# AI Training Tests — Outlier / Handshake Prep

A self-contained, offline web app to practice the skills that AI-training
assessments measure. **No install, no server, no internet needed.**

## What's inside

There are **two modes** on the home screen.

### 1. Knowledge assessments (multiple choice)

Four tracks (20 questions each, 80 total) plus a randomized mixed exam:

| Track | What it drills |
|-------|----------------|
| ✍️ **Writing & Grammar** | Spot errors, judge clarity, pick the best rewrite, match tone |
| 💻 **Coding Evaluation** | Find bugs, predict output, judge complexity, compare two AI code answers |
| ⚖️ **Response Rating (RLHF)** | Compare answers on accuracy, helpfulness, safety, instruction-following |
| 🔢 **Reasoning & STEM** | Arithmetic/unit checks, logic, probability, sanity-checking AI numbers |

Per-question timer (90s, optional), shuffle, instant explanations, keyboard
shortcuts (`1`–`4` to pick, `Enter` to submit/advance), scored results with a
full review and per-track breakdown.

### 2. Realistic rating tasks (the actual platform work)

This is the format platforms like Outlier actually use. It includes both
**single-prompt** SxS tasks and **multi-turn conversation** tasks. For each
task you:

1. Read a **user prompt** and **two AI responses (A and B)**.
2. Score **each response 1–5** on rubric dimensions (Instruction Following,
   Truthfulness/Accuracy, Harmlessness, Quality — they vary per task).
3. Choose an **overall preference** on the industry-standard **7-point scale**
   (A much better → about the same → B much better).
4. **Write a justification** citing specific, concrete differences (a minimum
   length is enforced, just like real tasks reject low-effort rationales).

On submit, an **expert key** reveals: the consensus preference, the expert's
per-dimension scores with notes, a model rationale, and a self-check checklist
to compare your justification against. Your preference is graded against the
key (right side / borderline / wrong call), and your rubric directions are
checked dimension by dimension. The final screen reports how many of your
preferences aligned with the expert consensus — the rater-consistency metric
these platforms actually care about.

**Multi-turn tasks** show a full chat history (user/assistant bubbles) with
the final user turn highlighted, and ask you to compare two candidate *final
assistant replies*. They add a **Context / Consistency** rubric dimension that
tests whether each reply respected constraints stated earlier, things already
tried, and the tone/level established in prior turns — the failure modes
unique to multi-turn evaluation (e.g. recommending pork to a user who said
they're vegetarian three turns ago).

Tasks live in [`js/tasks.js`](js/tasks.js) and are easy to extend (see below).

## How to run

Just open the file in a browser:

```
xdg-open index.html        # Linux
open index.html            # macOS
```

Or double-click `index.html` in your file manager. That's it.

(Optional — serve it over HTTP if you prefer:)

```
python3 -m http.server 8000   # then visit http://localhost:8000
```

## About the questions

These are **real, exam-style questions** covering the same skills and judgment
the AI-training platforms assess. Every question has a detailed explanation of
why the answer is right and the others are wrong, so you build genuine
competency as you practice — and walk in ready to qualify.

## Add your own questions

Open [`js/questions.js`](js/questions.js) and copy any object in an `items`
array. Each question looks like:

```js
{
  type: "Find the bug",          // short label shown above the question
  prompt: "What's wrong here?",   // HTML allowed
  context: "<pre><code>...</code></pre>",  // optional grey reading block
  choices: ["A", "B", "C", "D"],  // 2+ options, HTML allowed
  answer: 1,                       // index of the correct choice (0-based)
  explanation: "Because ..."       // shown after answering
}
```

Save and refresh the browser — no build step.

To add a **rating task**, copy any object in the `TASKS` array in
[`js/tasks.js`](js/tasks.js): supply the prompt, the two responses, the rubric
`dimensions` (with expert 1–5 scores per side), the `expertPref` (1–7), an
`expertRationale`, and a `checklist`. The file's header documents every field.

## Files

- `index.html` — the page
- `css/styles.css` — styling
- `js/questions.js` — the multiple-choice question bank
- `js/tasks.js` — the SxS rating-task bank
- `js/app.js` — the quiz + rating-task engine
