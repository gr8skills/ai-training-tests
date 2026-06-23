/* =====================================================================
   AI Training Test — Quiz Engine
   Pure vanilla JS, no dependencies. Reads QUESTIONS from questions.js.
   ===================================================================== */

(function () {
  "use strict";

  const TIME_PER_Q = 90; // seconds, when timed mode is on

  // ---- state ----
  const state = {
    items: [],        // questions for the current run
    trackKey: null,   // current track key, or "mixed"
    idx: 0,           // current question index
    answers: [],      // chosen index per question (null if unanswered)
    locked: false,    // whether current question is answered & locked
    timer: null,      // interval id
    timeLeft: 0,
    opts: { timer: true, shuffle: true, instant: true }
  };

  // ---- element helpers ----
  const $ = (sel) => document.querySelector(sel);
  const el = (tag, cls, html) => {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html !== undefined) e.innerHTML = html;
    return e;
  };
  function showScreen(id) {
    document.querySelectorAll(".screen").forEach((s) => s.classList.remove("active"));
    $("#" + id).classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // ---- home screen ----
  function buildHome() {
    const grid = $("#track-grid");
    grid.innerHTML = "";
    Object.keys(QUESTIONS).forEach((key) => {
      const t = QUESTIONS[key];
      const card = el("button", "track-card");
      card.innerHTML =
        `<div class="tc-icon">${t.icon}</div>` +
        `<div class="tc-name">${t.name}</div>` +
        `<div class="tc-desc">${t.desc}</div>` +
        `<div class="tc-count">${t.items.length} questions →</div>`;
      card.addEventListener("click", () => startQuiz(key));
      grid.appendChild(card);
    });
  }

  function readOpts() {
    state.opts.timer = $("#opt-timer").checked;
    state.opts.shuffle = $("#opt-shuffle").checked;
    state.opts.instant = $("#opt-instant").checked;
  }

  // ---- start a quiz ----
  function startQuiz(trackKey) {
    readOpts();
    state.mode = "quiz";
    state.trackKey = trackKey;

    let items;
    if (trackKey === "mixed") {
      // pull everything, shuffle, cap at 12
      items = [];
      Object.keys(QUESTIONS).forEach((k) => {
        QUESTIONS[k].items.forEach((q) => items.push(Object.assign({ _track: QUESTIONS[k].name }, q)));
      });
      items = shuffle(items).slice(0, 12);
    } else {
      items = QUESTIONS[trackKey].items.map((q) =>
        Object.assign({ _track: QUESTIONS[trackKey].name }, q)
      );
      if (state.opts.shuffle) items = shuffle(items);
    }

    state.items = items;
    state.idx = 0;
    state.answers = new Array(items.length).fill(null);
    state.locked = false;

    showScreen("screen-quiz");
    renderQuestion();
  }

  // ---- render the current question ----
  function renderQuestion() {
    const q = state.items[state.idx];
    state.locked = false;

    $("#quiz-track").textContent =
      state.trackKey === "mixed" ? "🎲 Mixed exam" : QUESTIONS[state.trackKey].icon + " " + QUESTIONS[state.trackKey].name;
    $("#quiz-progress").textContent = `Question ${state.idx + 1} of ${state.items.length}`;
    $("#progress-fill").style.width = `${(state.idx / state.items.length) * 100}%`;

    const box = $("#question-box");
    box.innerHTML = "";
    box.appendChild(el("div", "q-type", q.type + (state.trackKey === "mixed" ? ` · <span class="muted">${q._track}</span>` : "")));
    box.appendChild(el("div", "q-prompt", q.prompt));
    if (q.context) box.appendChild(el("div", "q-context", q.context));

    const ul = el("ul", "choices");
    q.choices.forEach((c, i) => {
      const li = el("li", "choice");
      li.appendChild(el("div", "marker", String.fromCharCode(65 + i)));
      li.appendChild(el("div", "ctext", c));
      li.addEventListener("click", () => selectChoice(i));
      ul.appendChild(li);
    });
    box.appendChild(ul);

    // feedback + button
    $("#feedback").className = "feedback";
    $("#feedback").innerHTML = "";
    const nextBtn = $("#btn-next");
    nextBtn.disabled = true;
    nextBtn.textContent = "Submit";

    // timer
    startTimer();
  }

  function choiceEls() {
    return Array.from($("#question-box").querySelectorAll(".choice"));
  }

  // ---- select an answer (before lock) ----
  function selectChoice(i) {
    if (state.locked) return;
    state.answers[state.idx] = i;
    choiceEls().forEach((c, idx) => c.classList.toggle("selected", idx === i));
    $("#btn-next").disabled = false;
  }

  // ---- timer ----
  function startTimer() {
    stopTimer();
    const tEl = $("#quiz-timer");
    if (!state.opts.timer) {
      tEl.textContent = "";
      return;
    }
    state.timeLeft = TIME_PER_Q;
    renderTime();
    state.timer = setInterval(() => {
      state.timeLeft--;
      renderTime();
      if (state.timeLeft <= 0) {
        stopTimer();
        // auto-lock with whatever is selected (or none)
        lockAnswer(true);
      }
    }, 1000);
  }
  function renderTime() {
    const tEl = $("#quiz-timer");
    const m = Math.floor(state.timeLeft / 60);
    const s = state.timeLeft % 60;
    tEl.textContent = `⏱ ${m}:${s.toString().padStart(2, "0")}`;
    tEl.classList.toggle("low", state.timeLeft <= 10);
  }
  function stopTimer() {
    if (state.timer) clearInterval(state.timer);
    state.timer = null;
  }

  // ---- lock + reveal ----
  function lockAnswer(timedOut) {
    if (state.locked) return;
    state.locked = true;
    stopTimer();

    const q = state.items[state.idx];
    const chosen = state.answers[state.idx]; // may be null on timeout
    const correct = q.answer;

    choiceEls().forEach((c, idx) => {
      c.classList.add("locked");
      c.classList.remove("selected");
      if (idx === correct) c.classList.add("correct");
      if (idx === chosen && chosen !== correct) c.classList.add("incorrect");
    });

    if (state.opts.instant) {
      const fb = $("#feedback");
      const isRight = chosen === correct;
      fb.className = "feedback " + (isRight ? "right" : "wrong");
      const head = timedOut && chosen === null
        ? "⏱ Time's up"
        : isRight ? "✓ Correct" : "✗ Incorrect";
      fb.innerHTML =
        `<div class="fb-head">${head}</div>` +
        `<div class="fb-expl">${q.explanation}</div>`;
    }

    const nextBtn = $("#btn-next");
    nextBtn.disabled = false;
    nextBtn.textContent = state.idx === state.items.length - 1 ? "See results" : "Next question →";
  }

  // ---- next button handles both "submit" and "advance" ----
  function onNext() {
    if (!state.locked) {
      // submitting an answer
      if (state.answers[state.idx] === null) return; // nothing selected
      if (state.opts.instant) {
        lockAnswer(false);
        return; // user reads explanation, clicks again to advance
      } else {
        lockAnswer(false); // lock silently
      }
    }
    advance();
  }

  function advance() {
    if (state.idx < state.items.length - 1) {
      state.idx++;
      renderQuestion();
    } else {
      finish();
    }
  }

  // ---- results ----
  function finish() {
    stopTimer();
    $("#progress-fill").style.width = "100%";

    let correctCount = 0;
    const perTrack = {};
    state.items.forEach((q, i) => {
      const ok = state.answers[i] === q.answer;
      if (ok) correctCount++;
      const tk = q._track;
      perTrack[tk] = perTrack[tk] || { right: 0, total: 0 };
      perTrack[tk].total++;
      if (ok) perTrack[tk].right++;
    });

    const total = state.items.length;
    const pct = Math.round((correctCount / total) * 100);

    let verdict, vClass;
    if (pct >= 80) { verdict = "Strong — this is roughly the bar assessments look for."; vClass = "pass"; }
    else if (pct >= 60) { verdict = "Decent — review the misses and retry to tighten up."; vClass = "mid"; }
    else { verdict = "Keep practicing — read every explanation below carefully."; vClass = "fail"; }

    const summary = $("#score-summary");
    let breakdownHtml = "";
    if (state.trackKey === "mixed" && Object.keys(perTrack).length > 1) {
      breakdownHtml = '<div class="breakdown">' +
        Object.keys(perTrack).map((tk) =>
          `<span><b>${perTrack[tk].right}/${perTrack[tk].total}</b> · ${tk}</span>`
        ).join("") + "</div>";
    }
    summary.innerHTML =
      `<div class="score-big">${correctCount} / ${total}</div>` +
      `<div class="score-pct">${pct}%</div>` +
      `<div class="score-verdict ${vClass}">${verdict}</div>` +
      breakdownHtml;

    // review list
    const review = $("#review-list");
    review.innerHTML = "<h2 style='font-size:18px;margin:8px 0'>Review</h2>";
    state.items.forEach((q, i) => {
      const chosen = state.answers[i];
      const ok = chosen === q.answer;
      const item = el("div", "review-item " + (ok ? "right" : "wrong"));
      const chosenTxt = chosen === null ? "<i>no answer</i>" : q.choices[chosen];
      item.innerHTML =
        `<div class="ri-q">${ok ? "✓" : "✗"} Q${i + 1}. ${stripBlock(q.prompt)}</div>` +
        `<div class="ri-a">Your answer: <b>${chosenTxt}</b></div>` +
        (ok ? "" : `<div class="ri-a">Correct: <b>${q.choices[q.answer]}</b></div>`) +
        `<div class="ri-a" style="margin-top:6px">${q.explanation}</div>`;
      review.appendChild(item);
    });

    showScreen("screen-results");
  }

  // remove heavy block content from prompt for compact review headers
  function stripBlock(html) {
    return html.replace(/<pre[\s\S]*?<\/pre>/g, " <code>[code]</code> ");
  }

  /* =================================================================
     RATING TASK MODE (Outlier-style side-by-side)
     ================================================================= */
  const tstate = {
    items: [],
    idx: 0,
    cur: null,       // { dims: {key:{a,b}}, pref }
    locked: false,
    results: []      // per-task computed outcome
  };

  const JUST_MIN = 40; // minimum justification characters

  function startTasks() {
    readOpts();
    state.mode = "task";
    tstate.items = state.opts.shuffle ? shuffle(TASKS) : TASKS.slice();
    tstate.idx = 0;
    tstate.results = [];
    showScreen("screen-task");
    renderTask();
  }

  function renderTask() {
    const t = tstate.items[tstate.idx];
    tstate.locked = false;
    tstate.cur = { dims: {}, pref: null };
    t.dimensions.forEach((d) => (tstate.cur.dims[d.key] = { a: null, b: null }));

    $("#task-domain").textContent = "⚖️ " + t.domain;
    $("#task-progress").textContent = `Task ${tstate.idx + 1} of ${tstate.items.length}`;
    $("#task-progress-fill").style.width = `${(tstate.idx / tstate.items.length) * 100}%`;

    const isMT = t.type === "multiturn";
    $("#task-instructions").innerHTML = t.instructions;
    $("#task-prompt-label").textContent = isMT ? "Conversation so far" : "User prompt";
    $("#task-prompt").innerHTML = isMT ? renderConversation(t.conversation) : t.prompt;
    $("#task-context").innerHTML = t.context || "";
    $("#resp-head-a").textContent = isMT ? "Candidate final reply — A" : "Response A";
    $("#resp-head-b").textContent = isMT ? "Candidate final reply — B" : "Response B";
    $("#task-resp-a").innerHTML = t.responseA;
    $("#task-resp-b").innerHTML = t.responseB;

    // rubric
    const rubric = $("#rubric");
    rubric.innerHTML = "";
    t.dimensions.forEach((d) => {
      const row = el("div", "rubric-row");
      row.dataset.key = d.key;
      row.innerHTML =
        `<div class="dim-name">${d.name}</div>` +
        `<div class="dim-scores">` +
          sideHtml(d.key, "a", "A") +
          sideHtml(d.key, "b", "B") +
        `</div>` +
        `<div class="dim-feedback"></div>`;
      rubric.appendChild(row);
    });
    rubric.querySelectorAll(".score-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        if (tstate.locked) return;
        const { key, side, val } = btn.dataset;
        tstate.cur.dims[key][side] = parseInt(val, 10);
        const group = btn.parentElement;
        group.querySelectorAll(".score-btn").forEach((b) => b.classList.toggle("sel", b === btn));
      });
    });

    // preference scale
    const scale = $("#pref-scale");
    scale.innerHTML = "";
    PREF_LABELS.forEach((label, i) => {
      const opt = el("div", "pref-opt");
      opt.dataset.pref = i + 1;
      opt.innerHTML = `<span class="pnum">${i + 1}</span><span>${label}</span>`;
      opt.addEventListener("click", () => {
        if (tstate.locked) return;
        tstate.cur.pref = i + 1;
        scale.querySelectorAll(".pref-opt").forEach((o) => o.classList.toggle("sel", o === opt));
      });
      scale.appendChild(opt);
    });

    // justification
    const ta = $("#justification");
    ta.value = "";
    ta.disabled = false;
    updateJustCounter();
    ta.oninput = updateJustCounter;

    $("#task-feedback").innerHTML = "";
    const btn = $("#btn-task-submit");
    btn.textContent = "Submit rating";
    btn.disabled = false;

    startTaskTimer();
  }

  function renderConversation(conv) {
    const last = conv.length - 1;
    const rows = conv.map((m, i) => {
      const isLastUser = i === last && m.role === "user";
      const tag = isLastUser ? '<span class="answers-tag">↓ both replies answer this turn</span>' : "";
      return `<div class="bubble ${m.role}${isLastUser ? " last" : ""}">` +
        `<span class="role">${m.role === "user" ? "👤 User" : "🤖 Assistant"}</span>` +
        `${m.text}${tag}</div>`;
    });
    return `<div class="chat">${rows.join("")}</div>`;
  }

  function sideHtml(key, side, label) {
    let btns = "";
    for (let v = 1; v <= 5; v++) {
      btns += `<button class="score-btn" data-key="${key}" data-side="${side}" data-val="${v}">${v}</button>`;
    }
    return `<div class="dim-side ${side}"><span class="side-label">${label}</span><div class="score-btns">${btns}</div></div>`;
  }

  function updateJustCounter() {
    const n = $("#justification").value.trim().length;
    const c = $("#just-counter");
    c.textContent = `${n} / ${JUST_MIN} characters minimum`;
    c.classList.toggle("ok", n >= JUST_MIN);
  }

  // task timer (longer than quiz: 4 min/task, optional)
  function startTaskTimer() {
    stopTimer();
    const tEl = $("#task-timer");
    if (!state.opts.timer) { tEl.textContent = ""; return; }
    state.timeLeft = 240;
    renderTaskTime();
    state.timer = setInterval(() => {
      state.timeLeft--;
      renderTaskTime();
      if (state.timeLeft <= 0) { stopTimer(); }
    }, 1000);
  }
  function renderTaskTime() {
    const tEl = $("#task-timer");
    const m = Math.floor(state.timeLeft / 60);
    const s = state.timeLeft % 60;
    tEl.textContent = `⏱ ${m}:${s.toString().padStart(2, "0")}`;
    tEl.classList.toggle("low", state.timeLeft <= 20);
  }

  function sign(n) { return n > 0 ? 1 : n < 0 ? -1 : 0; }
  function prefDir(p) { return p < 4 ? "A" : p > 4 ? "B" : "tie"; }

  function submitTask() {
    if (tstate.locked) { advanceTask(); return; }
    const t = tstate.items[tstate.idx];

    // validation
    let missing = false;
    t.dimensions.forEach((d) => {
      if (tstate.cur.dims[d.key].a === null || tstate.cur.dims[d.key].b === null) missing = true;
    });
    const just = $("#justification").value.trim();
    if (missing || tstate.cur.pref === null || just.length < JUST_MIN) {
      const fb = $("#task-feedback");
      const msgs = [];
      if (missing) msgs.push("score every dimension for both A and B");
      if (tstate.cur.pref === null) msgs.push("choose an overall preference");
      if (just.length < JUST_MIN) msgs.push(`write a justification of at least ${JUST_MIN} characters`);
      fb.innerHTML = `<div class="fb-card"><div class="fb-verdict bad">Please ${msgs.join(", ")}.</div></div>`;
      fb.scrollIntoView({ behavior: "smooth", block: "nearest" });
      return;
    }

    tstate.locked = true;
    stopTimer();
    $("#justification").disabled = true;

    // ---- grade preference ----
    const eDir = prefDir(t.expertPref), uDir = prefDir(tstate.cur.pref);
    const diff = Math.abs(t.expertPref - tstate.cur.pref);
    let prefVerdict, prefClass, prefPass;
    if (tstate.cur.pref === t.expertPref) {
      prefVerdict = "✓ Spot on — your preference exactly matches the expert key.";
      prefClass = "good"; prefPass = true;
    } else if (eDir === uDir && eDir !== "tie") {
      prefVerdict = `✓ Correct call — you picked the same side as the expert (${eDir}), with a slightly different strength.`;
      prefClass = "good"; prefPass = true;
    } else if (diff === 1) {
      prefVerdict = "≈ Borderline — you were one step off the expert rating (e.g. tie vs. slight preference). Defensible, but review the rationale.";
      prefClass = "mid"; prefPass = true;
    } else {
      prefVerdict = `✗ Wrong call — the expert preferred ${eDir === "tie" ? "a tie" : "Response " + eDir}, you indicated ${uDir === "tie" ? "a tie" : "Response " + uDir}.`;
      prefClass = "bad"; prefPass = false;
    }

    // ---- grade dimension directions + reveal notes ----
    let dimHits = 0;
    t.dimensions.forEach((d) => {
      const u = tstate.cur.dims[d.key];
      const eSign = sign(d.expertA - d.expertB);
      const uSign = sign(u.a - u.b);
      const hit = eSign === uSign;
      if (hit) dimHits++;
      const row = $(`#rubric .rubric-row[data-key="${d.key}"]`);
      row.classList.add("revealed");
      const fb = row.querySelector(".dim-feedback");
      const dirWord = eSign > 0 ? "A higher" : eSign < 0 ? "B higher" : "A ≈ B";
      fb.innerHTML =
        `<span class="${hit ? "hit" : "miss"}">${hit ? "✓ direction matches" : "✗ direction differs"}</span> · ` +
        `Expert: <span class="exp">A=${d.expertA}, B=${d.expertB}</span> (${dirWord}). ` +
        `You: A=${u.a}, B=${u.b}.<br>${d.note}`;
    });

    // highlight expert + your choice on the scale
    $("#pref-scale").querySelectorAll(".pref-opt").forEach((o) => {
      const p = parseInt(o.dataset.pref, 10);
      if (p === t.expertPref) { o.classList.add("expert"); o.insertAdjacentHTML("beforeend", '<span class="expert-tag">EXPERT</span>'); }
      if (p === tstate.cur.pref && p !== t.expertPref) o.insertAdjacentHTML("beforeend", '<span class="your-tag">YOU</span>');
    });

    const taskPass = prefPass && dimHits >= Math.ceil(t.dimensions.length / 2);
    tstate.results.push({ domain: t.domain, prefPass, dimHits, dimTotal: t.dimensions.length, taskPass });

    // ---- feedback card ----
    const fb = $("#task-feedback");
    fb.innerHTML =
      `<div class="fb-card">` +
        `<div class="fb-verdict ${prefClass}">${prefVerdict}</div>` +
        `<div class="fb-rationale">Dimension directions matched: <b>${dimHits}/${t.dimensions.length}</b></div>` +
      `</div>` +
      `<div class="fb-card">` +
        `<h4>📋 Expert rationale</h4>` +
        `<div class="fb-rationale">${t.expertRationale}</div>` +
        `<ul class="checklist">${t.checklist.map((c) => `<li>${c}</li>`).join("")}</ul>` +
        `<div class="your-just"><b>Your justification:</b><br>${escapeHtml(just)}</div>` +
      `</div>`;

    const btn = $("#btn-task-submit");
    btn.textContent = tstate.idx === tstate.items.length - 1 ? "See results" : "Next task →";
    fb.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  function escapeHtml(s) {
    return s.replace(/[&<>]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]));
  }

  function advanceTask() {
    if (tstate.idx < tstate.items.length - 1) {
      tstate.idx++;
      renderTask();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      finishTasks();
    }
  }

  function finishTasks() {
    stopTimer();
    const r = tstate.results;
    const total = r.length;
    const prefCorrect = r.filter((x) => x.prefPass).length;
    const fullPass = r.filter((x) => x.taskPass).length;
    const dimHits = r.reduce((s, x) => s + x.dimHits, 0);
    const dimTotal = r.reduce((s, x) => s + x.dimTotal, 0);
    const pct = Math.round((prefCorrect / total) * 100);

    let verdict, vClass;
    if (pct >= 80) { verdict = "Strong rater agreement — this is the consistency assessments look for."; vClass = "pass"; }
    else if (pct >= 60) { verdict = "Getting there — re-read the expert rationales on your misses."; vClass = "mid"; }
    else { verdict = "Focus on instruction-following and accuracy as the dominant dimensions, and justify with specifics."; vClass = "fail"; }

    $("#score-summary").innerHTML =
      `<div class="score-big">${prefCorrect} / ${total}</div>` +
      `<div class="score-pct">preferences aligned with the expert key (${pct}%)</div>` +
      `<div class="score-verdict ${vClass}">${verdict}</div>` +
      `<div class="breakdown">` +
        `<span><b>${fullPass}/${total}</b> · full pass (pref + rubric)</span>` +
        `<span><b>${dimHits}/${dimTotal}</b> · rubric directions correct</span>` +
      `</div>`;

    const review = $("#review-list");
    review.innerHTML = "<h2 style='font-size:18px;margin:8px 0'>Per-task</h2>";
    r.forEach((x, i) => {
      const item = el("div", "review-item " + (x.taskPass ? "right" : "wrong"));
      item.innerHTML =
        `<div class="ri-q">${x.taskPass ? "✓" : "✗"} Task ${i + 1} · ${x.domain}</div>` +
        `<div class="ri-a">Preference ${x.prefPass ? "aligned" : "differed"} with expert · rubric directions ${x.dimHits}/${x.dimTotal}</div>`;
      review.appendChild(item);
    });

    showScreen("screen-results");
  }

  // ---- reusable in-app confirm modal (replaces native confirm/alert) ----
  function showConfirm(opts) {
    const overlay = $("#modal-overlay");
    const cBtn = $("#modal-confirm"), xBtn = $("#modal-cancel");
    $("#modal-icon").textContent = opts.icon || "⚠️";
    $("#modal-title").textContent = opts.title || "Are you sure?";
    $("#modal-msg").textContent = opts.message || "";
    cBtn.textContent = opts.confirmText || "Confirm";
    xBtn.textContent = opts.cancelText || "Cancel";
    cBtn.className = "btn " + (opts.danger === false ? "btn-primary" : "btn-danger");

    function cleanup() {
      overlay.hidden = true;
      cBtn.removeEventListener("click", onYes);
      xBtn.removeEventListener("click", onNo);
      overlay.removeEventListener("mousedown", onBackdrop);
      document.removeEventListener("keydown", onKey, true);
    }
    function onYes() { cleanup(); if (opts.onConfirm) opts.onConfirm(); }
    function onNo() { cleanup(); if (opts.onCancel) opts.onCancel(); }
    function onBackdrop(e) { if (e.target === overlay) onNo(); }
    function onKey(e) {
      if (e.key === "Escape") { e.preventDefault(); onNo(); }
      else if (e.key === "Enter") { e.preventDefault(); onYes(); }
    }
    cBtn.addEventListener("click", onYes);
    xBtn.addEventListener("click", onNo);
    overlay.addEventListener("mousedown", onBackdrop);
    document.addEventListener("keydown", onKey, true); // capture: runs before quiz keys
    overlay.hidden = false;
    xBtn.focus(); // default focus on the safe (cancel) action
  }

  function modalOpen() { return !$("#modal-overlay").hidden; }

  // ---- nav buttons ----
  function quit() {
    showConfirm({
      title: "Quit this test?",
      message: "Your progress on this attempt will be lost.",
      confirmText: "Quit",
      cancelText: "Keep going",
      onConfirm: () => { stopTimer(); showScreen("screen-home"); }
    });
  }

  // ---- wire up ----
  function init() {
    buildHome();
    $("#task-count").textContent = TASKS.length;
    $("#btn-mixed").addEventListener("click", () => startQuiz("mixed"));
    $("#btn-tasks").addEventListener("click", startTasks);
    $("#btn-next").addEventListener("click", onNext);
    $("#btn-quit").addEventListener("click", quit);
    $("#btn-task-quit").addEventListener("click", quit);
    $("#btn-task-submit").addEventListener("click", submitTask);
    $("#btn-retry").addEventListener("click", () => (state.mode === "task" ? startTasks() : startQuiz(state.trackKey)));
    $("#btn-home").addEventListener("click", () => showScreen("screen-home"));
    // keyboard: 1-4 to select, Enter to submit/advance
    document.addEventListener("keydown", (e) => {
      if (modalOpen()) return; // modal owns the keyboard while open
      if (!$("#screen-quiz").classList.contains("active")) return;
      if (e.key >= "1" && e.key <= "9") {
        const i = parseInt(e.key, 10) - 1;
        const cs = choiceEls();
        if (i < cs.length && !state.locked) selectChoice(i);
      } else if (e.key === "Enter") {
        const btn = $("#btn-next");
        if (!btn.disabled) onNext();
      }
    });
  }

  document.addEventListener("DOMContentLoaded", init);
})();
