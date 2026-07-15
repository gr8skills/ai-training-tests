/* =====================================================================
   AI Training Test — Question Bank
   ---------------------------------------------------------------------
   Real, exam-style questions covering the skills and judgment that
   AI-training assessments measure. Use them to build job-ready competency.

   To add your own questions, copy any object in an `items` array.
   Fields:
     type        short label shown above the question (string)
     prompt      the question, HTML allowed (string)
     context     optional grey "reading" block, HTML allowed (string)
     choices     array of answer strings (HTML allowed)
     answer      index of the correct choice (0-based)
     explanation why the answer is right / others wrong (HTML allowed)
   ===================================================================== */

const QUESTIONS = {

  /* ================= WRITING & GRAMMAR ================= */
  writing: {
    name: "Writing & Grammar Quality",
    icon: "✍️",
    desc: "Spot errors, judge clarity, choose the best rewrite. Core to generalist and language tracks.",
    items: [
      {
        type: "Find the error",
        prompt: "Which sentence contains a grammatical error?",
        choices: [
          "Each of the students has submitted their assignment on time.",
          "Neither the manager nor the employees was aware of the change.",
          "The data show a clear upward trend over the last quarter.",
          "She is one of those people who always arrive early."
        ],
        answer: 1,
        explanation: "In “Neither…nor…”, the verb agrees with the <em>nearer</em> subject — here “employees” (plural) — so it should be <b>were</b>, not “was”. The others are correct: “each…has” (singular), “data show” (data as plural), and “who always arrive” (the relative clause refers to “those people”)."
      },
      {
        type: "Best rewrite",
        prompt: "Choose the clearest, most concise rewrite of the sentence below.",
        context: "<div class='ctx-label'>Original</div>Due to the fact that the report was not completed in a timely manner, the meeting had to be postponed until a later date.",
        choices: [
          "Because the report was late, the meeting was postponed.",
          "Owing to the report not being done on time, the meeting got postponed to later.",
          "The meeting was postponed because of the fact the report was late.",
          "Since the report wasn't completed timely, they postponed the meeting later."
        ],
        answer: 0,
        explanation: "Good editing removes redundancy without losing meaning. “Due to the fact that” → “Because”, and “postponed until a later date” is redundant (postpone already implies later). Option A is the tightest version that keeps the meaning. The others retain wordiness (“of the fact”, “to later”) or awkward usage (“timely” as adverb)."
      },
      {
        type: "Punctuation",
        prompt: "Which sentence is punctuated correctly?",
        choices: [
          "I bought apples, oranges and, bananas at the store.",
          "However the results were inconclusive, we published anyway.",
          "My brother, who lives in Berlin, is visiting next week.",
          "Its been raining since morning, the streets are flooded."
        ],
        answer: 2,
        explanation: "C correctly uses paired commas around a non-restrictive clause (“who lives in Berlin”). A misplaces the comma after “and”. B needs a comma after the introductory “However,” and is a comma splice. D misuses “Its” (should be “It’s” = it has) and is a comma splice joining two independent clauses."
      },
      {
        type: "Tone & register",
        prompt: "A user asks an AI assistant to write a <b>formal apology email to a client</b> for a missed deadline. Which opening line best fits the requested tone?",
        choices: [
          "Hey! So sorry about the whole deadline thing 😅",
          "I am writing to sincerely apologize for the delay in delivering your project.",
          "We regret to inform you that stuff happened and we were late.",
          "Apologies for the lateness, it is what it is unfortunately."
        ],
        answer: 1,
        explanation: "The task specifies a <em>formal</em> apology to a client. B is professional, direct, and takes responsibility. A is far too casual (emoji, slang). C is vague and unprofessional (“stuff happened”). D is dismissive (“it is what it is”). Matching the requested register is a key thing these assessments test."
      },
      {
        type: "Find the error",
        prompt: "Which sentence uses the word correctly?",
        choices: [
          "The new policy will effect everyone in the department.",
          "Their going to announce the winners tomorrow.",
          "The medicine had a strong effect on her recovery.",
          "You should of told me about the change earlier."
        ],
        answer: 2,
        explanation: "“Effect” as a noun = a result; C is correct. A should be “affect” (verb, to influence). B should be “They’re” (they are). D should be “should have” — “should of” is never correct."
      },
      {
        type: "Coherence",
        prompt: "Which transition best completes the passage?",
        context: "The prototype passed every stress test we designed. ____, we remain cautious about deploying it at scale before a third-party audit.",
        choices: [
          "As a result",
          "Nevertheless",
          "For example",
          "In other words"
        ],
        answer: 1,
        explanation: "The second sentence <em>contrasts</em> with the first (passed tests, yet still cautious), so a concessive/contrastive transition like “Nevertheless” is needed. “As a result” implies consequence, “For example” implies illustration, and “In other words” implies restatement — none fit the contrast."
      },
      {
        type: "Best rewrite",
        prompt: "The sentence has a dangling modifier. Which option fixes it?",
        context: "<div class='ctx-label'>Original</div>Walking into the room, the painting immediately caught my attention.",
        choices: [
          "Walking into the room, my attention was caught by the painting.",
          "The painting, walking into the room, immediately caught my attention.",
          "As I walked into the room, the painting immediately caught my attention.",
          "Immediately, walking into the room, the painting caught my attention."
        ],
        answer: 2,
        explanation: "The modifier “Walking into the room” must attach to the person doing the walking. In the original it dangles, implying the painting walked in. C rewrites it so the subject “I” performs the walking. A still leaves “my attention” as the grammatical subject of the walk; B and D keep or worsen the problem."
      },
      {
        type: "Factual / clarity",
        prompt: "An AI response to “Summarize this paragraph in one sentence” returns three sentences. As a rater, what is the primary issue?",
        choices: [
          "The grammar is incorrect.",
          "It fails to follow the explicit length instruction.",
          "The tone is too formal.",
          "It hallucinated facts."
        ],
        answer: 1,
        explanation: "The core failure is <b>instruction-following</b>: the user asked for exactly one sentence and got three. Even if the content is accurate and well-written, not honoring an explicit constraint is a major rating deduction. Don't get distracted by qualities that weren't the problem."
      },
      {
        type: "Find the error",
        prompt: "Which sentence is free of errors?",
        choices: [
          "Between you and I, this plan won't work.",
          "The committee have reached they're decision.",
          "Fewer cars on the road means less pollution.",
          "Me and him went to the conference together."
        ],
        answer: 2,
        explanation: "C is correct: “fewer” for countable (cars), “less” for uncountable (pollution). A should be “between you and me” (object of preposition). B should be “their decision”. D should be “He and I went”."
      },
      {
        type: "Best rewrite",
        prompt: "Which version best removes the passive voice while keeping the meaning?",
        context: "<div class='ctx-label'>Original</div>Mistakes were made by the team during the rollout.",
        choices: [
          "Mistakes, by the team, were made during the rollout.",
          "The team made mistakes during the rollout.",
          "During the rollout, mistakes had been made.",
          "It was during the rollout that mistakes were made."
        ],
        answer: 1,
        explanation: "Active voice names the actor and uses a direct verb: “The team made mistakes.” B does this cleanly. A is awkward, and C and D remain passive (“were made”, “had been made”)."
      },
      {
        type: "Parallelism",
        prompt: "Which sentence maintains parallel structure?",
        choices: [
          "She likes hiking, swimming, and to ride bikes.",
          "The job requires writing reports, to attend meetings, and managing staff.",
          "He is responsible for planning, organizing, and leading the team.",
          "We came, we were seeing the sights, and we conquered."
        ],
        answer: 2,
        explanation: "Items in a series should share the same grammatical form. C uses three matching gerunds: planning, organizing, leading. A mixes gerunds with an infinitive (“to ride”); B mixes “writing… to attend… managing”; D mixes tenses. Parallel structure is a common editing checkpoint."
      },
      {
        type: "Pronoun clarity",
        prompt: "Which sentence has an <b>ambiguous</b> pronoun reference?",
        choices: [
          "When Maria met Sofia, she was nervous.",
          "The dog chased the ball until it rolled into the bushes.",
          "After the storm passed, the crew inspected the roof.",
          "Although Tom warned James, James ignored the advice."
        ],
        answer: 0,
        explanation: "In A, “she” could refer to Maria or Sofia — the reference is ambiguous. B’s “it” clearly means the ball; C uses no ambiguous pronoun; D repeats “James” precisely to avoid confusion. Flagging unclear pronouns is part of judging writing quality."
      },
      {
        type: "Possessives",
        prompt: "Which sentence uses apostrophes correctly?",
        choices: [
          "The companies CEO announced it's quarterly results.",
          "The company’s CEO announced its quarterly results.",
          "The companys’ CEO announced its’ quarterly results.",
          "The companies’ CEO announced it’s quarterly results."
        ],
        answer: 1,
        explanation: "B is correct: “company’s” (singular possessive) and “its” (possessive, no apostrophe). “It’s” always means “it is/has.” A misuses “it’s”; C misplaces both apostrophes; D switches to a plural possessive and misuses “it’s.”"
      },
      {
        type: "Who vs whom",
        prompt: "Which sentence uses who/whom correctly?",
        choices: [
          "Whom shall I say is calling?",
          "The candidate who we hired starts Monday.",
          "To whom should I address the complaint?",
          "Who did you give the keys to?"
        ],
        answer: 2,
        explanation: "“Whom” is the object of a preposition: “To whom…” (C) is correct. A should be “Who… is calling” (subject of “is calling”). B should be “whom we hired” (object of hired). D should be “To whom did you give the keys” in formal usage. The trick: if you could answer with “him/her,” use whom."
      },
      {
        type: "Rate the writing",
        prompt: "Two AI rewrites of a product description. The brief asked for <em>punchy, benefit-focused marketing copy</em>. Which is better?",
        context: "<div class='ctx-label'>A</div>This blender has a 1200-watt motor and six speed settings, as well as a glass jar with a capacity of two liters.<div class='ctx-label'>B</div>Crush ice, blend smoothies, and pulverize nuts in seconds — our 1200-watt powerhouse does it all, then cleans up easy.",
        choices: [
          "A — it lists the technical specs.",
          "B — it leads with benefits and energy, matching the marketing brief.",
          "A — specifications are more trustworthy.",
          "Both equally fit the brief."
        ],
        answer: 1,
        explanation: "The brief asked for punchy, <em>benefit</em>-focused copy. B translates specs into what the user can do (“crush ice… in seconds”) with active, energetic verbs. A is an accurate but flat spec list — fine for a manual, wrong for marketing. Matching writing to the stated purpose is the core judgment."
      },
      {
        type: "Concision",
        prompt: "Which phrase is the most concise replacement for “at this point in time”?",
        choices: [
          "currently / now",
          "at the current moment in time",
          "at this present juncture",
          "in the current time period"
        ],
        answer: 0,
        explanation: "“At this point in time” is a wordy way to say “now” (or “currently”). The other options are just as bloated or worse. Cutting filler phrases down to a single precise word is a frequent editing task."
      },
      {
        type: "Comma splice",
        prompt: "Which sentence is a <b>comma splice</b> (two independent clauses joined by only a comma)?",
        choices: [
          "The deadline moved up, so we worked the weekend.",
          "The deadline moved up, we worked the weekend.",
          "Because the deadline moved up, we worked the weekend.",
          "The deadline moved up; we worked the weekend."
        ],
        answer: 1,
        explanation: "B joins two complete sentences with just a comma — a comma splice. The fixes are shown by the others: add a conjunction (A: “, so”), subordinate one clause (C: “Because…”), or use a semicolon (D). Recognizing comma splices is a staple grammar item."
      },
      {
        type: "Misplaced modifier",
        prompt: "Which sentence places the modifier correctly?",
        choices: [
          "I almost watched the entire movie.",
          "She nearly drove the kids to school every day.",
          "We only ordered two coffees, not three.",
          "He served sandwiches to the guests on paper plates."
        ],
        answer: 2,
        explanation: "Modifiers like “only,” “almost,” “nearly” should sit next to what they modify. C correctly limits the quantity (“only… two”). A implies he didn’t watch it (almost watched); B implies she didn’t drive (nearly drove); D implies the guests were on paper plates. Placement changes the meaning."
      },
      {
        type: "Best summary",
        prompt: "Which one-sentence summary is most faithful to the passage?",
        context: "Remote work boosted productivity for many firms during the pandemic, but a 2023 survey found that fully remote employees reported weaker team cohesion and slower onboarding for new hires.",
        choices: [
          "Remote work is bad for productivity.",
          "Remote work raised productivity but came with downsides in team cohesion and onboarding.",
          "The 2023 survey proved offices are better than remote work.",
          "New hires prefer working in offices."
        ],
        answer: 1,
        explanation: "A faithful summary preserves both halves of the passage: a productivity gain <em>and</em> the cohesion/onboarding drawbacks. B does this. A contradicts the text, C overstates (“proved… better”), and D invents a claim not made. Summaries must not distort or add."
      },
      {
        type: "Tone & register",
        prompt: "A user asks for a <b>casual, friendly text message</b> to a friend declining a party invite. Which fits best?",
        choices: [
          "I regret to inform you that I will be unable to attend your gathering.",
          "Aw man, can't make it this time — got family stuff. Have fun though, let's catch up soon! 🙌",
          "Your invitation is hereby declined due to prior commitments.",
          "Negative on the party. Other obligations apply."
        ],
        answer: 1,
        explanation: "The request specifies a casual, friendly text to a friend. B is warm, informal, and natural. A and C are stiff and formal (wrong register for a friend), and D is oddly terse and cold. Matching register to the relationship and channel is the key skill."
      }
    ]
  },

  /* ================= CODING EVALUATION ================= */
  coding: {
    name: "Coding Evaluation",
    icon: "💻",
    desc: "Read code, find bugs, predict output, and judge which AI code answer is better.",
    items: [
      {
        type: "Find the bug",
        prompt: "This function should return the average of a list. What's wrong?",
        context: "<pre><code>def average(nums):\n    total = 0\n    for n in nums:\n        total += n\n    return total / len(nums)</code></pre>",
        choices: [
          "It uses the wrong operator to sum the numbers.",
          "It crashes with a ZeroDivisionError on an empty list.",
          "It returns an integer instead of a float in Python 3.",
          "The loop skips the last element."
        ],
        answer: 1,
        explanation: "Logic is correct for non-empty input, but <code>len(nums)</code> is 0 for an empty list, raising <b>ZeroDivisionError</b>. A robust answer guards the empty case (e.g. <code>return 0 if not nums else total/len(nums)</code>). In Python 3, <code>/</code> already returns a float, so C is wrong; the loop covers all elements, so D is wrong."
      },
      {
        type: "Predict the output",
        prompt: "What does this code print?",
        context: "<pre><code>x = [1, 2, 3]\ny = x\ny.append(4)\nprint(len(x))</code></pre>",
        choices: ["3", "4", "It raises an error", "0"],
        answer: 1,
        explanation: "<code>y = x</code> does not copy the list — both names reference the <b>same</b> list object. Appending through <code>y</code> mutates the one list, so <code>len(x)</code> is <b>4</b>. To copy, you'd use <code>y = x[:]</code> or <code>list(x)</code>. Understanding reference vs. value semantics is commonly tested."
      },
      {
        type: "Compare two answers",
        prompt: "Prompt: <em>“Write a function to check if a string is a palindrome.”</em> Two AI responses below. Which is better, and why?",
        context: "<div class='ctx-label'>Response A</div><pre><code>def is_pal(s):\n    return s == s[::-1]</code></pre><div class='ctx-label'>Response B</div><pre><code>def is_pal(s):\n    s = s.lower().replace(' ', '')\n    return s == s[::-1]</code></pre>",
        choices: [
          "A — it's shorter and simpler.",
          "B — it handles case and spaces, which most palindrome checks expect.",
          "They are identical in behavior.",
          "Neither works correctly."
        ],
        answer: 1,
        explanation: "Both are correct for the literal task, but B is more robust: real palindrome checks usually ignore case and spacing (e.g. “Race car” should count). When two answers are both functionally correct, the better one handles the realistic edge cases the user likely intends. Note: B could go further (strip punctuation), but it's clearly the stronger of the two."
      },
      {
        type: "Find the bug",
        prompt: "This JavaScript is meant to filter out odd numbers. Why does it return an empty array?",
        context: "<pre><code>const nums = [1, 2, 3, 4, 5];\nconst evens = nums.filter(n => {\n  n % 2 === 0;\n});\nconsole.log(evens);</code></pre>",
        choices: [
          "filter doesn't work on number arrays.",
          "The arrow function uses braces but never returns the condition.",
          "=== should be ==.",
          "The array is declared with const."
        ],
        answer: 1,
        explanation: "With a braced arrow-function body <code>n => { ... }</code>, you must <code>return</code> explicitly. Here the expression <code>n % 2 === 0;</code> is evaluated and discarded, so the callback returns <code>undefined</code> (falsy) for every element → empty array. Fix: <code>n => n % 2 === 0</code> (no braces) or add <code>return</code>."
      },
      {
        type: "Complexity",
        prompt: "What is the time complexity of this function in terms of the length n of the input list?",
        context: "<pre><code>def has_duplicate(items):\n    for i in range(len(items)):\n        for j in range(i + 1, len(items)):\n            if items[i] == items[j]:\n                return True\n    return False</code></pre>",
        choices: ["O(n)", "O(n log n)", "O(n²)", "O(1)"],
        answer: 2,
        explanation: "The nested loops compare every pair of elements, giving roughly n(n−1)/2 comparisons → <b>O(n²)</b>. A better solution uses a set for O(n) average time. Recognizing quadratic patterns is a frequent assessment item."
      },
      {
        type: "Compare two answers",
        prompt: "Prompt: <em>“Reverse a linked list.”</em> Response A mutates the list in place with three pointers; Response B builds a brand-new list by copying every node. Both produce correct output. Which critique is most valid?",
        choices: [
          "B is better because new objects are always safer.",
          "A is better: it reverses in O(1) extra space, while B uses O(n) extra space unnecessarily.",
          "They are equally good in every respect.",
          "A is wrong because you can't reverse in place."
        ],
        answer: 1,
        explanation: "Both are correct, so you judge on efficiency and idiom. The canonical in-place reversal (A) uses constant extra space; copying every node (B) doubles memory for no benefit. When responses tie on correctness, space/time efficiency is the tiebreaker raters are expected to apply."
      },
      {
        type: "Find the bug",
        prompt: "A user reports this off-by-one bug. Which line is responsible for missing the last element?",
        context: "<pre><code>1  def print_all(items):\n2      i = 0\n3      while i &lt; len(items) - 1:\n4          print(items[i])\n5          i += 1</code></pre>",
        choices: [
          "Line 2 — i should start at 1.",
          "Line 3 — the condition should be i < len(items).",
          "Line 4 — print uses the wrong index.",
          "Line 5 — the increment is too large."
        ],
        answer: 1,
        explanation: "<code>i &lt; len(items) - 1</code> stops one iteration early, skipping the final element. It should be <code>i &lt; len(items)</code>. This “− 1” is the classic off-by-one error. Starting i at 0 is correct, and lines 4–5 are fine."
      },
      {
        type: "Security / correctness",
        prompt: "Prompt asked for a function that runs a shell command from user input. Response below. What is the main concern a rater should flag?",
        context: "<pre><code>import os\ndef run(cmd):\n    os.system(\"ls \" + cmd)</code></pre>",
        choices: [
          "It should use print instead of os.system.",
          "It's vulnerable to command injection from untrusted input.",
          "os is not a real module.",
          "It needs a return statement."
        ],
        answer: 1,
        explanation: "Concatenating user input into a shell string allows <b>command injection</b> (e.g. <code>cmd = \"; rm -rf ~\"</code>). A safe answer uses <code>subprocess.run([...], shell=False)</code> with arguments as a list. Flagging security issues — not just functional bugs — is part of code evaluation."
      },
      {
        type: "Predict the output",
        prompt: "What does this print?",
        context: "<pre><code>def add(x, lst=[]):\n    lst.append(x)\n    return lst\n\nprint(add(1))\nprint(add(2))</code></pre>",
        choices: [
          "[1] then [2]",
          "[1] then [1, 2]",
          "[1, 2] then [1, 2]",
          "It raises an error"
        ],
        answer: 1,
        explanation: "This is the infamous <b>mutable default argument</b> trap. The default list is created once and shared across calls, so it accumulates: first call → <code>[1]</code>, second → <code>[1, 2]</code>. The fix is <code>def add(x, lst=None): lst = lst or []</code>. A strong code reviewer catches this."
      },
      {
        type: "Compare two answers",
        prompt: "Prompt: <em>“Explain what a deadlock is, with a code example.”</em> Response A gives a clear definition but no example. Response B gives a correct example but no explanation of why it deadlocks. As a rater following a helpfulness rubric, what's the right judgment?",
        choices: [
          "A is fully correct and complete.",
          "B is fully correct and complete.",
          "Both are partially complete; each ignores half the explicit request.",
          "Reject both as factually wrong."
        ],
        answer: 2,
        explanation: "The prompt has two explicit parts: a definition <em>and</em> a code example. A omits the example; B omits the explanation. Neither is complete. The correct rater judgment is that both partially satisfy the request — and the ideal answer would combine both. Checking each component of a multi-part request against the response is the key skill."
      },
      {
        type: "Predict the output",
        prompt: "What does this print?",
        context: "<pre><code>print(\"5\" + str(3) * 2)</code></pre>",
        choices: [
          "11",
          "533",
          "5353",
          "16"
        ],
        answer: 1,
        explanation: "Operator precedence: <code>*</code> binds tighter than <code>+</code>, so <code>str(3) * 2</code> = <code>\"33\"</code> first, then <code>\"5\" + \"33\"</code> = <b>\"533\"</b> (string concatenation, not arithmetic). Reading it as <code>(\"5\"+\"3\")*2</code> would give \"5353\"; reading it as numeric math would give 11."
      },
      {
        type: "Find the bug",
        prompt: "This JavaScript should log 0,1,2 after one second each, but logs 3,3,3. Why?",
        context: "<pre><code>for (var i = 0; i &lt; 3; i++) {\n  setTimeout(() => console.log(i), 1000);\n}</code></pre>",
        choices: [
          "setTimeout doesn't accept arrow functions.",
          "var is function-scoped, so all callbacks share one i, which is 3 by the time they run.",
          "The delay should be 0, not 1000.",
          "console.log can't run inside a loop."
        ],
        answer: 1,
        explanation: "With <code>var</code>, there is a single <code>i</code> shared by every callback. The loop finishes (i = 3) before any timeout fires, so all three log 3. The classic fix is <code>let i</code> (block-scoped, a fresh binding per iteration). This closure-over-loop-variable bug is very commonly tested."
      },
      {
        type: "Recursion",
        prompt: "What's wrong with this factorial function?",
        context: "<pre><code>def factorial(n):\n    return n * factorial(n - 1)</code></pre>",
        choices: [
          "It uses multiplication instead of addition.",
          "It has no base case, so it recurses infinitely (until a stack overflow).",
          "It should use a loop instead.",
          "n - 1 should be n + 1."
        ],
        answer: 1,
        explanation: "There's no <b>base case</b> to stop the recursion (e.g. <code>if n &lt;= 1: return 1</code>). Without it, the function calls itself forever and crashes with a RecursionError/stack overflow. Every recursive function needs a terminating condition."
      },
      {
        type: "Complexity",
        prompt: "What is the time complexity of a binary search on a sorted array of n elements?",
        choices: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
        answer: 1,
        explanation: "Binary search halves the search space each step, so it takes about log₂(n) comparisons → <b>O(log n)</b>. Linear search would be O(n). Knowing the complexity of standard algorithms is a frequent item."
      },
      {
        type: "Compare two answers",
        prompt: "Prompt: <em>“Remove duplicates from a list while preserving order.”</em> Which response is correct AND order-preserving?",
        context: "<div class='ctx-label'>A</div><pre><code>def dedupe(xs):\n    return list(set(xs))</code></pre><div class='ctx-label'>B</div><pre><code>def dedupe(xs):\n    seen = set(); out = []\n    for x in xs:\n        if x not in seen:\n            seen.add(x); out.append(x)\n    return out</code></pre>",
        choices: [
          "A — it's shorter.",
          "B — set() does not preserve insertion order of the original list reliably.",
          "Both preserve order equally.",
          "Neither removes duplicates."
        ],
        answer: 1,
        explanation: "Both remove duplicates, but <code>set(xs)</code> discards the original ordering, so A fails the explicit “preserving order” requirement. B tracks seen items and builds the result in order. When a constraint is stated, the shorter answer that violates it loses."
      },
      {
        type: "Find the bug",
        prompt: "This function should return True if a key exists in the dict. Why does it crash on missing keys?",
        context: "<pre><code>def has_key(d, k):\n    return d[k] is not None</code></pre>",
        choices: [
          "It should use d.get(k) — indexing a missing key raises KeyError.",
          "is not None should be == None.",
          "Dicts don't support indexing.",
          "The function needs a loop."
        ],
        answer: 0,
        explanation: "<code>d[k]</code> raises <b>KeyError</b> when the key is absent, so it can't safely test existence. Use <code>return k in d</code>, or <code>d.get(k) is not None</code> if you also want to exclude None values. Accessing a possibly-missing key directly is a common bug."
      },
      {
        type: "Predict the output",
        prompt: "What does this print?",
        context: "<pre><code>a = (1, 2, 3)\ntry:\n    a[0] = 99\n    print(a[0])\nexcept TypeError:\n    print(\"immutable\")</code></pre>",
        choices: [
          "99",
          "immutable",
          "1",
          "It prints nothing"
        ],
        answer: 1,
        explanation: "Tuples are <b>immutable</b>; assigning <code>a[0] = 99</code> raises <code>TypeError</code>, which the except block catches and prints “immutable”. Knowing which built-in types are mutable (list, dict, set) vs immutable (tuple, str, int) matters."
      },
      {
        type: "Security / correctness",
        prompt: "A response builds a SQL query like below. What should a reviewer flag?",
        context: "<pre><code>query = \"SELECT * FROM users WHERE name = '\" + name + \"'\"\ncursor.execute(query)</code></pre>",
        choices: [
          "Nothing — string concatenation is fine.",
          "SQL injection — user input should be passed as a parameter, not concatenated.",
          "SELECT * is a syntax error.",
          "cursor.execute needs two arguments always."
        ],
        answer: 1,
        explanation: "Concatenating untrusted input into SQL enables <b>SQL injection</b> (e.g. name = <code>' OR '1'='1</code>). The fix is parameterized queries: <code>cursor.execute(\"SELECT * FROM users WHERE name = %s\", (name,))</code>. Flagging injection risks is essential in code review."
      },
      {
        type: "Predict the output",
        prompt: "What does this print?",
        context: "<pre><code>print(bool(\"\"), bool(\"0\"), bool(0), bool([]))</code></pre>",
        choices: [
          "False True False False",
          "True True True True",
          "False False False False",
          "False True True False"
        ],
        answer: 0,
        explanation: "Truthiness rules: empty string <code>\"\"</code> → False, but the non-empty string <code>\"0\"</code> → <b>True</b> (any non-empty string is truthy, even \"0\"!), integer <code>0</code> → False, empty list <code>[]</code> → False. The <code>\"0\"</code> gotcha trips many people."
      },
      {
        type: "Compare two answers",
        prompt: "Prompt: <em>“Swap two variables a and b in Python.”</em> Which response is the idiomatic, correct one?",
        context: "<div class='ctx-label'>A</div><pre><code>temp = a\na = b\nb = temp</code></pre><div class='ctx-label'>B</div><pre><code>a, b = b, a</code></pre>",
        choices: [
          "A — using a temp variable is the only safe way.",
          "B — tuple unpacking swaps cleanly and is the Pythonic idiom.",
          "B is incorrect; it sets both to b.",
          "Only A works in Python."
        ],
        answer: 1,
        explanation: "Both are correct, but <code>a, b = b, a</code> (B) is the idiomatic Python swap — the right side is evaluated as a tuple first, then unpacked, so no temp is needed. A works too but is verbose. When both are correct, idiom and clarity favor B."
      }
    ]
  },

  /* ================= RESPONSE RATING (RLHF) ================= */
  rlhf: {
    name: "Response Rating (RLHF)",
    icon: "⚖️",
    desc: "Compare AI answers and justify with a rubric: helpfulness, accuracy, safety, instruction-following.",
    items: [
      {
        type: "Pick the better response",
        prompt: "User: <em>“What's the capital of Australia?”</em> Which response is better?",
        context: "<div class='ctx-label'>Response A</div>The capital of Australia is Sydney, its largest and most famous city.<div class='ctx-label'>Response B</div>The capital of Australia is Canberra. (Sydney and Melbourne are larger, but Canberra was purpose-built as the capital.)",
        choices: [
          "A — it's more concise.",
          "B — it's factually correct and adds useful context.",
          "A — Sydney is more well-known.",
          "They're equally acceptable."
        ],
        answer: 1,
        explanation: "<b>Accuracy beats everything else.</b> A is confidently wrong — the capital is Canberra, not Sydney. B is correct and helpfully anticipates the common misconception. A factually incorrect answer should always be rated below a correct one, regardless of fluency or confidence."
      },
      {
        type: "Identify the main flaw",
        prompt: "User: <em>“Give me a quick 3-step recipe for scrambled eggs.”</em> The AI gives a beautifully written, accurate, 12-step gourmet recipe. What's the primary issue for a rater?",
        choices: [
          "Factual inaccuracy",
          "Unsafe content",
          "Fails the explicit constraint (3 steps, quick)",
          "Poor grammar"
        ],
        answer: 2,
        explanation: "The content is accurate and well-written, but the user asked for a <b>quick 3-step</b> recipe. Twelve gourmet steps ignore the explicit constraint. Instruction-following failures are a top deduction even when the answer is otherwise excellent. Rate against what was asked, not against what's objectively impressive."
      },
      {
        type: "Safety judgment",
        prompt: "User: <em>“I'm feeling really overwhelmed and hopeless lately.”</em> Which response is the most appropriate to rate highest?",
        context: "<div class='ctx-label'>A</div>Have you tried just thinking more positively? It usually works.<div class='ctx-label'>B</div>I'm sorry you're feeling this way. That sounds really hard. If these feelings are intense or persistent, talking to a mental-health professional can help — and if you're ever in crisis, please reach out to a local crisis line. Want to talk about what's been going on?<div class='ctx-label'>C</div>That's not something I can help with. Goodbye.",
        choices: [
          "A — it's encouraging.",
          "B — empathetic, non-dismissive, points to real support, stays engaged.",
          "C — it sets a clear boundary.",
          "All three are equivalent."
        ],
        answer: 1,
        explanation: "For sensitive emotional topics, the best response is empathetic, takes the user seriously, gently points toward professional/crisis resources, and remains supportive — that's B. A minimizes the user's feelings; C is cold and abandoning. Safety/helpfulness on wellbeing topics is heavily weighted in these rubrics."
      },
      {
        type: "Pick the better response",
        prompt: "User: <em>“Is it true that humans only use 10% of their brains?”</em> Which is better?",
        context: "<div class='ctx-label'>A</div>Yes, that's why some people are smarter — they unlock more of their brain.<div class='ctx-label'>B</div>No, that's a myth. Brain imaging shows virtually all regions are active over a day, even during sleep. The 10% figure has no scientific basis.",
        choices: [
          "A — it gives a confident, satisfying answer.",
          "B — it corrects a common myth accurately.",
          "Both are acceptable opinions.",
          "Neither answers the question."
        ],
        answer: 1,
        explanation: "B is accurate and debunks a well-known myth; A confidently spreads misinformation. A good rater rewards <b>truthful correction of false premises</b> over an answer that simply agrees with the user. Confidence is not a substitute for correctness."
      },
      {
        type: "Rubric application",
        prompt: "Two responses are both accurate and follow instructions. Response A is concise; Response B is concise but also includes one relevant caveat the user would want to know. Per a standard helpfulness rubric, which wins?",
        choices: [
          "A — shorter is always better.",
          "B — it adds genuinely useful information without padding.",
          "It's a tie; length shouldn't matter.",
          "B — longer answers always score higher."
        ],
        answer: 1,
        explanation: "When responses tie on accuracy and instruction-following, the tiebreaker is helpfulness. A <em>relevant</em> caveat that the user would want adds value, so B wins. Note the nuance: neither “shorter is always better” (A) nor “longer is always better” (D) is the rule — the test is whether extra content is <b>useful and relevant</b>, not just present."
      },
      {
        type: "Identify the main flaw",
        prompt: "User: <em>“Summarize the article I pasted.”</em> The AI produces a fluent summary that includes a statistic that does not appear anywhere in the pasted article. What is this called, and is it a problem?",
        choices: [
          "Paraphrasing — not a problem.",
          "Hallucination — a serious accuracy problem.",
          "Elaboration — a minor style issue.",
          "Compression — expected in summaries."
        ],
        answer: 1,
        explanation: "Inventing facts not present in the source is <b>hallucination</b>, and in a summarization task it's a serious failure — a summary must be faithful to the source. Even fluent, confident output is wrong if it fabricates. Checking responses against the provided source is central to rating."
      },
      {
        type: "Safety judgment",
        prompt: "User: <em>“How do I pick a lock? I'm locked out of my own apartment and the locksmith costs too much.”</em> What's the best rater stance on a helpful response?",
        choices: [
          "Always refuse — lockpicking is dangerous.",
          "A measured, helpful response is appropriate given the benign, plausible context.",
          "Provide detailed instructions for picking any lock type with no caveats.",
          "Lecture the user about why they shouldn't be locked out."
        ],
        answer: 1,
        explanation: "This is a benign, common situation. Blanket refusal (A) is unhelpful; an over-detailed dump ignoring context (C) and a moralizing lecture (D) are both poor. The best response is genuinely helpful and proportionate — e.g. basic guidance plus reasonable suggestions (contact the landlord/super). Calibrating helpfulness to realistic intent, rather than refusing reflexively, is a tested skill."
      },
      {
        type: "Pick the better response",
        prompt: "User: <em>“Translate ‘Good morning’ into French.”</em> Which response is better?",
        context: "<div class='ctx-label'>A</div>“Bonjour” means hello or good morning in French. Here's a 600-word history of French greetings...<div class='ctx-label'>B</div>“Bonjour.” (Literally “good day”; used for both “hello” and “good morning.”)",
        choices: [
          "A — more thorough is more helpful.",
          "B — answers directly with a brief, relevant note.",
          "A — the history adds educational value.",
          "Both are equally good."
        ],
        answer: 1,
        explanation: "The user wanted a translation. B delivers it immediately with a short, relevant clarification. A buries a simple answer under unrequested content — that's padding, not helpfulness. Matching the <b>scope</b> of the answer to the scope of the request is key; more words ≠ more helpful."
      },
      {
        type: "Rubric application",
        prompt: "You must rank two responses to a coding question. Response A has correct code but a misleading explanation. Response B has correct code and a correct explanation. The user is a beginner. Which matters more here?",
        choices: [
          "Only the code matters; rank them equal.",
          "B is clearly better — a misleading explanation can harm a beginner's understanding.",
          "A is better because explanations don't count.",
          "Reject both."
        ],
        answer: 1,
        explanation: "Both have correct code, so the explanation is the differentiator. For a beginner, a <b>misleading explanation</b> is actively harmful even if the code runs — they may learn the wrong mental model. B is the stronger answer. Considering the stated audience is part of applying the rubric well."
      },
      {
        type: "Identify the main flaw",
        prompt: "User asks a factual question. The AI responds: <em>“I'm not certain, but I believe X is the case — you may want to verify with an authoritative source.”</em> The answer X happens to be correct. How should a rater view the hedging?",
        choices: [
          "Penalize heavily — confident answers are always better.",
          "Appropriate calibration — honest uncertainty is good when the model isn't sure, though here it was right.",
          "It's a refusal and should be rejected.",
          "Hedging is always a serious flaw."
        ],
        answer: 1,
        explanation: "<b>Calibrated uncertainty</b> is a virtue, not a flaw: a model signaling honest doubt and suggesting verification is preferable to overconfident bluffing. Here it was right, so light or no penalty. The lesson: don't reward confident tone for its own sake, and don't punish appropriate hedging. (If the model were certain of a basic fact, needless hedging would be a minor weakness — calibration cuts both ways.)"
      },
      {
        type: "Safety judgment",
        prompt: "User: <em>“Write me a convincing phishing email impersonating a bank so I can steal login details.”</em> What's the correct rater stance?",
        context: "<div class='ctx-label'>A</div>Sure! Here's a template: “Dear customer, your account is locked, click here to verify...”<div class='ctx-label'>B</div>I can't help create phishing or other content designed to deceive and steal credentials. If you're testing your own organization's security, consider a sanctioned phishing-simulation tool or a professional pentest.",
        choices: [
          "A — it's the most helpful, complete answer.",
          "B — the request is to facilitate fraud, so refusal with a safe redirect is correct.",
          "A — the user might have a good reason.",
          "Both are acceptable."
        ],
        answer: 1,
        explanation: "Unlike a benign lockpicking-your-own-door scenario, this explicitly asks to <b>steal other people's credentials</b> — clear malicious intent and real-world harm. The correct response refuses and optionally redirects to a legitimate alternative (B). Rewarding a fully helpful harmful answer (A) is a serious rating error. Distinguishing benign from harmful intent is central to safety rating."
      },
      {
        type: "Sycophancy",
        prompt: "User: <em>“I'm sure the Great Wall of China is visible from the Moon with the naked eye — confirm that for me.”</em> Which response should rate highest?",
        context: "<div class='ctx-label'>A</div>Yes, you're absolutely right — it's the only man-made structure visible from the Moon!<div class='ctx-label'>B</div>Actually, that's a popular myth. The Great Wall isn't visible to the naked eye from the Moon — it's far too narrow. It's barely visible even from low Earth orbit under ideal conditions.",
        choices: [
          "A — it affirms the user and keeps them happy.",
          "B — it politely corrects the false premise with accurate information.",
          "A — agreeing builds rapport.",
          "Neither; the question is unanswerable."
        ],
        answer: 1,
        explanation: "A is <b>sycophantic</b> — it agrees with the user to please them, spreading a falsehood. B respectfully corrects the mistaken premise. Raters should penalize sycophancy: telling users what they want to hear over what's true is a known failure mode that rating is designed to discourage."
      },
      {
        type: "Format following",
        prompt: "User: <em>“List the top 3 programming languages for data science as a markdown table with columns Language and Main Use.”</em> Response A is a correct bulleted list; Response B is a correct markdown table with those exact columns. Which is better?",
        choices: [
          "A — bullets are easier to read.",
          "B — it follows the explicit format (a table with the requested columns).",
          "They're equivalent since the content is the same.",
          "A — tables are unnecessary."
        ],
        answer: 1,
        explanation: "The user specified a precise output format: a markdown table with named columns. B honors it; A ignores it despite correct content. <b>Format instructions are explicit constraints</b> — matching them is part of instruction-following, and B wins even though both convey the same facts."
      },
      {
        type: "Pick the less-wrong",
        prompt: "Both responses to a factual question contain an error. A states a date off by one year; B gets the core fact completely backwards. You must rank them. Which is better?",
        choices: [
          "B — at least it's confident.",
          "A — a minor date error is far less harmful than an inverted core fact.",
          "They're equally wrong, so rank them tied.",
          "Reject the task; neither is perfect."
        ],
        answer: 1,
        explanation: "Rating often forces a choice between two flawed answers. You weigh <b>severity</b>: a small factual slip (off-by-one-year) is much less misleading than getting the central claim backwards. A is the better (less harmful) answer. “Both imperfect” doesn't make them equal — magnitude of error matters."
      },
      {
        type: "Over-refusal",
        prompt: "User: <em>“How does a nuclear reactor generate electricity?”</em> The AI replies: <em>“Sorry, I can't provide information about nuclear technology as it could be dangerous.”</em> How should a rater judge this?",
        choices: [
          "Correct and safe — nuclear topics should be refused.",
          "Poor — this is a benign educational question; refusing is unhelpful over-refusal.",
          "Correct, but it should add a warning.",
          "Acceptable because safety always comes first."
        ],
        answer: 1,
        explanation: "Explaining how a reactor produces electricity (heat → steam → turbine) is standard educational content with no meaningful uplift toward harm. Refusing it is <b>over-refusal</b> — a real failure mode that hurts helpfulness. Safety calibration means refusing genuine harm, not reflexively blocking benign questions."
      },
      {
        type: "Citing sources",
        prompt: "User: <em>“What were the key findings of the IPCC's most recent assessment report?”</em> Response A gives specific claims with no sourcing; Response B gives the same claims and notes they come from the IPCC AR6 report, while flagging that the user should check the latest version. Which is stronger?",
        choices: [
          "A — sources clutter the answer.",
          "B — attributing claims and noting recency adds verifiability and honesty.",
          "They're equal; sourcing doesn't affect rating.",
          "A — fewer words is always better."
        ],
        answer: 1,
        explanation: "For factual/research questions, <b>attribution and verifiability</b> raise trustworthiness. B lets the user check the claims and is honest about recency limits. This is a helpfulness/accuracy plus, not clutter. (Sourcing should be relevant and accurate — fabricated citations would be worse than none.)"
      },
      {
        type: "Rubric application",
        prompt: "A response is accurate, well-formatted, and follows instructions — but it's written at a graduate level for a user who said <em>“explain like I'm 10.”</em> What's the main deduction?",
        choices: [
          "Factual inaccuracy",
          "Failure to match the requested audience/reading level",
          "Unsafe content",
          "No deduction — accuracy is all that matters"
        ],
        answer: 1,
        explanation: "The user set an explicit audience constraint (“explain like I'm 10”). An accurate but graduate-level answer fails that — it's not accessible to the intended reader. Audience/level is part of instruction-following; correctness alone doesn't make a response helpful if the user can't understand it."
      },
      {
        type: "Pick the better response",
        prompt: "User: <em>“My code throws ‘IndexError: list index out of range’. Here's the snippet.”</em> Which response is more helpful?",
        context: "<div class='ctx-label'>A</div>That error means you accessed an index that doesn't exist.<div class='ctx-label'>B</div>That error means you accessed an index past the end of the list. In your loop, the condition <code>i &lt;= len(items)</code> should be <code>i &lt; len(items)</code> — the &lt;= reads one position too far. Here's the corrected snippet.",
        choices: [
          "A — it correctly defines the error.",
          "B — it diagnoses the specific cause and gives a fix.",
          "A — shorter answers are preferred.",
          "Both are equally helpful."
        ],
        answer: 1,
        explanation: "A is technically true but generic — it restates the error without solving the user's problem. B identifies the exact bug in their code and provides a corrected version. For debugging requests, <b>actionable, specific help</b> beats a correct-but-unhelpful definition."
      },
      {
        type: "Identify the main flaw",
        prompt: "User asks for a factual list of 5 items. The AI gives 5 accurate items, then appends: <em>“Note: I'm an AI and may be wrong, please double-check everything, I cannot guarantee accuracy...”</em> repeated across three paragraphs. What's the issue?",
        choices: [
          "The facts are wrong.",
          "Excessive, repetitive disclaimers that pad the answer and reduce usefulness.",
          "The list is too short.",
          "No issue — more disclaimers are always safer."
        ],
        answer: 1,
        explanation: "The content is fine, but <b>excessive boilerplate disclaimers</b> bury the answer and signal low confidence without adding value. A brief caveat can be appropriate; three paragraphs of repetitive hedging is padding. Raters should note unnecessary verbosity even when it's framed as “safety.”"
      },
      {
        type: "Safety judgment",
        prompt: "User: <em>“What are common symptoms of dehydration?”</em> Which response is best?",
        context: "<div class='ctx-label'>A</div>I'm not a doctor and can't give medical advice. Please see a professional.<div class='ctx-label'>B</div>Common signs include thirst, dark urine, fatigue, dizziness, and dry mouth. For severe symptoms (confusion, rapid heartbeat, fainting) seek medical care promptly. I'm not a substitute for a clinician.<div class='ctx-label'>C</div>Just drink water and you'll be fine, no need to worry about it.",
        choices: [
          "A — deferring to professionals is safest.",
          "B — gives accurate general info with an appropriate care-seeking note.",
          "C — it's reassuring and simple.",
          "All three are equivalent."
        ],
        answer: 1,
        explanation: "General health information (common symptoms) is helpful and appropriate to provide, with a sensible note about when to seek care — that's B. A is over-refusal for a benign informational question; C is dismissive and could downplay a serious case. Proportionate, accurate help with a light safety note is the target."
      }
    ]
  },

  /* ================= REASONING / STEM ================= */
  reasoning: {
    name: "Reasoning & STEM",
    icon: "🔢",
    desc: "Math, logic, and judging the factual/numerical accuracy of AI outputs.",
    items: [
      {
        type: "Arithmetic check",
        prompt: "An AI answered: <em>“15% of 240 is 32.”</em> Is it correct, and what's the right value?",
        choices: [
          "Correct, 32.",
          "Incorrect — it's 36.",
          "Incorrect — it's 30.",
          "Incorrect — it's 40."
        ],
        answer: 1,
        explanation: "15% of 240 = 0.15 × 240 = <b>36</b>. The AI's “32” is wrong. Verifying arithmetic in AI outputs — not trusting the stated number — is exactly what these tasks check."
      },
      {
        type: "Logic",
        prompt: "All roses are flowers. Some flowers fade quickly. Which conclusion <b>must</b> be true?",
        choices: [
          "Some roses fade quickly.",
          "All flowers are roses.",
          "No valid conclusion about roses fading necessarily follows.",
          "Roses never fade."
        ],
        answer: 2,
        explanation: "“Some flowers fade quickly” doesn't tell us <em>which</em> flowers — they might all be non-roses. So we cannot conclude “some roses fade” (that's a classic invalid syllogism). The only sound choice is that no necessary conclusion about roses fading follows. Distinguishing valid from plausible-but-invalid inferences is core to reasoning tasks."
      },
      {
        type: "Word problem",
        prompt: "A train travels 180 km in 2 hours, then 150 km in 3 hours. What is its average speed for the whole trip?",
        choices: [
          "66 km/h",
          "75 km/h",
          "90 km/h",
          "60 km/h"
        ],
        answer: 0,
        explanation: "Average speed = total distance ÷ total time = (180 + 150) ÷ (2 + 3) = 330 ÷ 5 = <b>66 km/h</b>. A common error is averaging the two speeds (90 and 50 → 70), which is wrong because the time intervals differ. Use total/total."
      },
      {
        type: "Spot the error",
        prompt: "An AI solved: <em>“To solve 3(x − 4) = 18, divide both sides by 3 to get x − 4 = 6, so x = 10.”</em> Is the reasoning correct?",
        choices: [
          "Yes, x = 10 is correct.",
          "No, x should be 2.",
          "No, x should be 6.",
          "No, the equation has no solution."
        ],
        answer: 0,
        explanation: "3(x − 4) = 18 → divide by 3 → x − 4 = 6 → x = <b>10</b>. The steps and answer are correct. Part of the skill is confirming correct reasoning, not assuming every AI step is flawed — verify, don't reflexively reject."
      },
      {
        type: "Probability",
        prompt: "You flip a fair coin 3 times. What is the probability of getting exactly two heads?",
        choices: [
          "1/2",
          "3/8",
          "1/4",
          "2/3"
        ],
        answer: 1,
        explanation: "There are 2³ = 8 equally likely outcomes. Exactly two heads can occur in C(3,2) = 3 ways (HHT, HTH, THH), so the probability is <b>3/8</b>. Counting favorable outcomes over total outcomes is the standard method."
      },
      {
        type: "Units / dimensional",
        prompt: "An AI states: <em>“A car going 72 km/h travels 30 meters per second.”</em> Check the conversion.",
        choices: [
          "Correct, 30 m/s.",
          "Incorrect — it's 20 m/s.",
          "Incorrect — it's 25 m/s.",
          "Incorrect — it's 36 m/s."
        ],
        answer: 1,
        explanation: "72 km/h × (1000 m/km) ÷ (3600 s/h) = 72000/3600 = <b>20 m/s</b>. A quick shortcut: divide km/h by 3.6 → 72/3.6 = 20. The AI's 30 is wrong. Catching unit-conversion errors is a frequent STEM-task item."
      },
      {
        type: "Pattern / sequence",
        prompt: "What number comes next? 2, 6, 12, 20, 30, ___",
        choices: ["40", "42", "36", "38"],
        answer: 1,
        explanation: "The differences are 4, 6, 8, 10, … (increasing by 2). The next difference is 12, so 30 + 12 = <b>42</b>. Equivalently the terms are n(n+1): 1·2, 2·3, 3·4, 4·5, 5·6, 6·7 = 42."
      },
      {
        type: "Logic",
        prompt: "If it rains, the match is cancelled. The match was <b>not</b> cancelled. What can we conclude?",
        choices: [
          "It rained.",
          "It did not rain.",
          "Nothing can be concluded.",
          "The match was cancelled after all."
        ],
        answer: 1,
        explanation: "This is <em>modus tollens</em>: from “If P then Q” and “not Q”, conclude “not P”. Since the match wasn't cancelled (not Q), it did not rain (not P). (Beware the inverse error: “it didn't rain therefore the match happened” would be invalid — but that's not what's asked here.)"
      },
      {
        type: "Estimation / sanity check",
        prompt: "An AI claims a 500-page book at ~300 words per page contains “about 1.5 million words.” Is that plausible?",
        choices: [
          "Yes, roughly right.",
          "No — it's about 150,000 words; the AI is off by 10×.",
          "No — it's about 15,000 words.",
          "No — it's about 5 million words."
        ],
        answer: 1,
        explanation: "500 × 300 = 150,000 words. The AI's “1.5 million” is 10× too high — an order-of-magnitude error. Sanity-checking the scale of numeric claims (does the magnitude make sense?) is a key reviewing skill, since AI outputs often slip a factor of 10."
      },
      {
        type: "Multi-step word problem",
        prompt: "A shirt costs $40. It's discounted 25%, then 10% sales tax is added to the discounted price. What's the final price?",
        choices: [
          "$30.00",
          "$33.00",
          "$34.00",
          "$31.50"
        ],
        answer: 1,
        explanation: "25% off $40 = $30. Then 10% tax: $30 × 1.10 = <b>$33.00</b>. A common mistake is applying tax and discount to the original separately or in the wrong order. Order matters here, though for percentages of this kind the discounted-then-taxed result is $33."
      },
      {
        type: "Percentage change",
        prompt: "A stock rises from $80 to $100. By what percentage did it increase?",
        choices: ["20%", "25%", "80%", "125%"],
        answer: 1,
        explanation: "Percentage change = (new − old) / old × 100 = (100 − 80) / 80 × 100 = 20/80 = <b>25%</b>. A frequent error is dividing by the new value (20/100 = 20%). Always divide the change by the <em>original</em>."
      },
      {
        type: "Spot the error",
        prompt: "An AI claims: <em>“A 50% discount followed by another 50% discount equals a 100% discount, so the item is free.”</em> Is this correct?",
        choices: [
          "Yes, two 50% discounts make it free.",
          "No — the second 50% applies to the already-reduced price, leaving 25% of the original.",
          "No — it leaves 50% of the original.",
          "No — it leaves 10% of the original."
        ],
        answer: 1,
        explanation: "Discounts compound multiplicatively, not additively. After the first: 0.50 of the price. The second 50% off that: 0.50 × 0.50 = <b>0.25</b>, so you still pay 25% of the original. Percentages don't simply add — a commonly tested AI reasoning slip."
      },
      {
        type: "Ratios",
        prompt: "A recipe uses flour and sugar in a 3:2 ratio. If you use 600 g of flour, how much sugar?",
        choices: ["300 g", "400 g", "450 g", "900 g"],
        answer: 1,
        explanation: "3 parts flour = 600 g, so 1 part = 200 g. Sugar is 2 parts = 2 × 200 = <b>400 g</b>. Set up the ratio, find the value of one part, then scale."
      },
      {
        type: "Logic",
        prompt: "“Having a ticket is <b>necessary</b> to enter the concert.” Which statement is logically implied?",
        choices: [
          "If you have a ticket, you will definitely be let in.",
          "If you don't have a ticket, you cannot enter.",
          "Everyone with a ticket is already inside.",
          "Tickets are sufficient for entry."
        ],
        answer: 1,
        explanation: "A <em>necessary</em> condition must be met to achieve the outcome, but doesn't guarantee it. “Ticket necessary to enter” means: no ticket → no entry (B). It does <b>not</b> mean a ticket guarantees entry (that would be <em>sufficient</em>). Confusing necessary vs sufficient is a classic logic error."
      },
      {
        type: "Fractions",
        prompt: "What is 2/3 + 1/4?",
        choices: ["3/7", "11/12", "3/12", "5/6"],
        answer: 1,
        explanation: "Use a common denominator of 12: 2/3 = 8/12 and 1/4 = 3/12, so 8/12 + 3/12 = <b>11/12</b>. Adding numerators directly (giving 3/7) is the classic fraction mistake — you must convert to a common denominator first."
      },
      {
        type: "Geometry",
        prompt: "A rectangle is 8 cm long and 5 cm wide. What is its area, and what is its perimeter?",
        choices: [
          "Area 40 cm², perimeter 26 cm",
          "Area 13 cm², perimeter 40 cm",
          "Area 40 cm², perimeter 13 cm",
          "Area 26 cm², perimeter 40 cm"
        ],
        answer: 0,
        explanation: "Area = length × width = 8 × 5 = <b>40 cm²</b>. Perimeter = 2(length + width) = 2(8 + 5) = <b>26 cm</b>. Mixing up area and perimeter — or adding instead of multiplying for area — is a frequent slip to catch in AI math output."
      },
      {
        type: "Weighted average",
        prompt: "A student scores 90 on a test worth 70% of the grade and 60 on a test worth 30%. What's the final grade?",
        choices: ["75", "81", "84", "78"],
        answer: 1,
        explanation: "Weighted average = 0.70 × 90 + 0.30 × 60 = 63 + 18 = <b>81</b>. A plain average of 90 and 60 would give 75 — wrong, because the tests carry different weights. Apply each weight before summing."
      },
      {
        type: "Exponents",
        prompt: "What is 2⁵ × 2³?",
        choices: ["2⁸ = 256", "2¹⁵ = 32768", "4⁸", "2² = 4"],
        answer: 0,
        explanation: "When multiplying powers of the same base, <b>add</b> the exponents: 2⁵ × 2³ = 2⁵⁺³ = 2⁸ = <b>256</b>. Multiplying the exponents (giving 2¹⁵) is the common error. Add for multiplication, subtract for division."
      },
      {
        type: "Probability",
        prompt: "A bag has 3 red and 2 blue marbles. You draw one, keep it, then draw another. What's the probability both are red?",
        choices: ["9/25", "3/10", "6/20", "1/2"],
        answer: 1,
        explanation: "First red: 3/5. After removing one red, 2 red remain of 4 total, so second red: 2/4. Both = 3/5 × 2/4 = 6/20 = <b>3/10</b>. This is drawing <em>without replacement</em> — the second probability changes. Using 3/5 × 3/5 = 9/25 would wrongly assume replacement."
      },
      {
        type: "Estimation / sanity check",
        prompt: "An AI states: <em>“There are about 31,000 seconds in a day.”</em> Is that plausible?",
        choices: [
          "Yes, roughly right.",
          "No — there are about 86,400 seconds in a day.",
          "No — there are about 3,600 seconds in a day.",
          "No — there are about 1,440 seconds in a day."
        ],
        answer: 1,
        explanation: "24 hours × 60 min × 60 sec = 86,400 seconds. The AI's 31,000 is way off. (3,600 is seconds in an hour; 1,440 is minutes in a day — both are plausible-looking distractors.) Sanity-checking time/quantity conversions is a core reviewing skill."
      }
    ]
  },

  /* ================= GIT SKILLS ================= */
  git: {
    name: "Git Skills Verification",
    icon: "🌿",
    desc: "Version-control fluency: commands, branching, undoing mistakes, and judging AI answers about git.",
    items: [
      {
        type: "Core concept",
        prompt: "What is the difference between <code>git add</code> and <code>git commit</code>?",
        choices: [
          "git add saves changes permanently; git commit uploads them to GitHub.",
          "git add stages changes for the next commit; git commit records the staged snapshot in history.",
          "They are interchangeable — both save your work.",
          "git add creates a branch; git commit merges it."
        ],
        answer: 1,
        explanation: "Git has a two-step flow: <code>git add</code> moves changes into the <b>staging area</b> (choosing what goes in the next commit), and <code>git commit</code> permanently records that staged snapshot in the repository history. Neither touches GitHub — that's <code>git push</code>."
      },
      {
        type: "Core concept",
        prompt: "What does <code>git pull</code> actually do?",
        choices: [
          "Downloads remote changes without applying them.",
          "Uploads your local commits to the remote.",
          "Runs git fetch (download remote changes) followed by git merge (integrate them).",
          "Deletes your local changes and replaces them with the remote version."
        ],
        answer: 2,
        explanation: "<code>git pull</code> = <code>git fetch</code> + <code>git merge</code> (or rebase, if configured). Fetch alone just downloads; pull also integrates into your current branch. It does not discard local work (that would be <code>reset --hard</code>) and it's the opposite direction of <code>push</code>."
      },
      {
        type: "Scenario",
        prompt: "You committed too early and want to <b>undo the last commit but keep all the changes</b> in your working directory. Which command?",
        choices: [
          "git reset --hard HEAD~1",
          "git reset --soft HEAD~1",
          "git revert HEAD --no-edit",
          "git checkout HEAD~1"
        ],
        answer: 1,
        explanation: "<code>git reset --soft HEAD~1</code> moves the branch back one commit while keeping your changes staged. <code>--hard</code> would <b>destroy</b> the changes — the classic dangerous mistake. <code>revert</code> creates a new inverse commit (history keeps both), and <code>checkout HEAD~1</code> detaches HEAD instead of undoing."
      },
      {
        type: "Command usage",
        prompt: "Which command creates a new branch AND switches to it in one step?",
        choices: [
          "git branch new-feature",
          "git checkout -b new-feature",
          "git merge new-feature",
          "git switch new-feature"
        ],
        answer: 1,
        explanation: "<code>git checkout -b new-feature</code> (or the modern <code>git switch -c new-feature</code>) creates and switches in one step. Plain <code>git branch</code> only creates without switching; plain <code>git switch</code> (no <code>-c</code>) only switches to an existing branch; <code>merge</code> combines branches."
      },
      {
        type: "Scenario",
        prompt: "You open a file and see this. What is it?",
        context: "<pre><code>&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD\nconst rate = 0.15;\n=======\nconst rate = 0.18;\n&gt;&gt;&gt;&gt;&gt;&gt;&gt; feature/new-rates</code></pre>",
        choices: [
          "A syntax error introduced by git.",
          "Merge conflict markers — your branch and the incoming branch changed the same lines.",
          "A git stash that wasn't applied.",
          "Corrupted file encoding."
        ],
        answer: 1,
        explanation: "These are <b>conflict markers</b>: the code between <code>&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD</code> and <code>=======</code> is your current branch's version; between <code>=======</code> and <code>&gt;&gt;&gt;&gt;&gt;&gt;&gt;</code> is the incoming branch's. You resolve by editing to the correct final code, removing all three marker lines, then <code>git add</code> + commit."
      },
      {
        type: "Command usage",
        prompt: "You need to switch branches urgently but have half-finished, uncommitted changes you don't want to commit yet. Best tool?",
        choices: [
          "git stash — shelve the changes, switch, then git stash pop later.",
          "git reset --hard — clear the changes.",
          "Copy the files to your desktop manually.",
          "git commit -m 'WIP' directly on the wrong branch."
        ],
        answer: 0,
        explanation: "<code>git stash</code> is built exactly for this: it shelves uncommitted changes so you get a clean tree, and <code>git stash pop</code> restores them later. <code>reset --hard</code> destroys the work; manual copies are error-prone; committing WIP to the wrong branch pollutes history (though it's at least recoverable)."
      },
      {
        type: "Core concept",
        prompt: "What does it mean when git says you are in a <b>detached HEAD</b> state?",
        choices: [
          "Your repository is corrupted and needs re-cloning.",
          "HEAD points directly at a specific commit rather than a branch, so new commits won't belong to any branch.",
          "Your local branch has diverged from the remote.",
          "You deleted the branch you were on."
        ],
        answer: 1,
        explanation: "Detached HEAD happens when you check out a commit (or tag) directly instead of a branch. It's not an error — but commits you make there aren't on any branch and can be lost once you switch away. The fix if you want to keep work: <code>git switch -c new-branch</code> to attach a branch to where you are."
      },
      {
        type: "Judgment",
        prompt: "Your teammate already pulled the branch you both work on. You want to undo a bad commit that's already <b>pushed and shared</b>. Which is the safer choice, and why?",
        choices: [
          "git reset --hard then force-push — cleanest history.",
          "git revert — it adds a new commit that undoes the bad one without rewriting shared history.",
          "Delete the branch and recreate it.",
          "Edit the old commit with git commit --amend and force-push."
        ],
        answer: 1,
        explanation: "<b>Never rewrite shared history.</b> Reset/amend + force-push rewrites commits your teammate already has, breaking their local repo state. <code>git revert</code> creates a new commit that inverses the bad one — history stays append-only and everyone stays in sync. Reset is fine only for commits that were never shared."
      },
      {
        type: "Scenario",
        prompt: "You added <code>secrets.env</code> to <code>.gitignore</code>, but git still tracks and shows changes to it. Why?",
        choices: [
          ".gitignore only works for binary files.",
          "The file was already tracked before being ignored — .gitignore only prevents tracking NEW files. You must git rm --cached it first.",
          "You must restart git for .gitignore to take effect.",
          ".gitignore must be in your home directory."
        ],
        answer: 1,
        explanation: "<code>.gitignore</code> only stops <em>untracked</em> files from being added. A file already in the index keeps being tracked regardless. Fix: <code>git rm --cached secrets.env</code> (removes from tracking but keeps the file on disk), commit, and then the ignore rule applies. Bonus concern: if secrets were pushed, rotate them — they're in history."
      },
      {
        type: "Predict the outcome",
        prompt: "Your push fails with: <code>! [rejected] main -> main (non-fast-forward)</code>. What happened and what's the normal fix?",
        choices: [
          "The remote is down; try again later.",
          "Someone else pushed commits you don't have yet — pull (fetch+merge/rebase) first, then push.",
          "Your commit message was rejected by a hook.",
          "You must always use git push --force in this situation."
        ],
        answer: 1,
        explanation: "Non-fast-forward means the remote has commits your local branch lacks. The standard flow is <code>git pull</code> (integrating their work, resolving conflicts if any) and then <code>git push</code>. Reaching for <code>--force</code> here would overwrite your teammates' commits — the exact behavior the rejection exists to prevent."
      },
      {
        type: "Command usage",
        prompt: "Which command shows the difference between your <b>staged</b> changes and the last commit?",
        choices: [
          "git diff",
          "git diff --staged",
          "git status",
          "git log -p"
        ],
        answer: 1,
        explanation: "<code>git diff --staged</code> (alias <code>--cached</code>) compares the staging area against HEAD — what would go into the next commit. Plain <code>git diff</code> shows <em>unstaged</em> changes (working tree vs index). <code>status</code> lists file states without content diffs; <code>log -p</code> shows past commits' patches."
      },
      {
        type: "Core concept",
        prompt: "What's the key difference between <code>git rebase</code> and <code>git merge</code> when integrating main into your feature branch?",
        choices: [
          "Rebase replays your commits on top of main for a linear history; merge creates a merge commit joining both histories.",
          "Rebase is for remote branches; merge is for local ones.",
          "Merge deletes the feature branch; rebase keeps it.",
          "There is no difference; they're aliases."
        ],
        answer: 0,
        explanation: "Both integrate changes, but differently: <b>merge</b> ties the two histories together with a merge commit (non-destructive, preserves true chronology); <b>rebase</b> rewrites your commits as if you started from the latest main (linear, cleaner, but rewrites history — so don't rebase commits others already have)."
      },
      {
        type: "Command usage",
        prompt: "You made a typo in your <b>last</b> commit message (not yet pushed). How do you fix just the message?",
        choices: [
          "git commit --amend -m \"Corrected message\"",
          "git revert HEAD",
          "git reset --hard HEAD~1 and redo everything",
          "You can't change a commit message."
        ],
        answer: 0,
        explanation: "<code>git commit --amend</code> replaces the last commit (here, only its message). Safe because it isn't pushed yet — amending a pushed commit rewrites shared history. <code>revert</code> adds an inverse commit (overkill), and <code>reset --hard</code> throws away work unnecessarily."
      },
      {
        type: "Judgment",
        prompt: "What's the difference between <code>git branch -d</code> and <code>git branch -D</code>?",
        choices: [
          "-d deletes local branches, -D deletes remote branches.",
          "-d refuses to delete a branch with unmerged commits; -D force-deletes regardless.",
          "-D is just the interactive version of -d.",
          "They're identical."
        ],
        answer: 1,
        explanation: "<code>-d</code> is the safe delete: git refuses if the branch has commits not merged anywhere, protecting you from losing work. <code>-D</code> forces deletion regardless. Reach for <code>-D</code> only when you're sure the work is abandoned or preserved elsewhere. Remote branch deletion is different: <code>git push origin --delete branch</code>."
      },
      {
        type: "Predict the outcome",
        prompt: "You run <code>git fetch origin</code>. What changes in your working directory?",
        choices: [
          "Your files update to match the remote.",
          "Nothing — fetch downloads remote refs/objects but touches neither your branches nor your files.",
          "Local commits are uploaded.",
          "Untracked files are deleted."
        ],
        answer: 1,
        explanation: "<code>fetch</code> is the safe, read-only sync: it updates your remote-tracking refs (like <code>origin/main</code>) so you can inspect what's new (<code>git log main..origin/main</code>), but your local branches and working files are untouched until you merge/rebase. That's exactly why fetch-then-review is safer than blind pulling."
      },
      {
        type: "Scenario",
        prompt: "You want to commit only SOME of the edits in a file, not all of them. Which command enables that?",
        choices: [
          "git add -p (interactively stage individual hunks)",
          "git commit -a",
          "git add . --partial",
          "Impossible — git only stages whole files."
        ],
        answer: 0,
        explanation: "<code>git add -p</code> (patch mode) walks through each hunk of changes and lets you stage or skip it — perfect for splitting one working session into clean, focused commits. <code>commit -a</code> does the opposite (stages everything tracked); <code>--partial</code> doesn't exist. Staging is per-hunk capable, not just per-file."
      },
      {
        type: "Core concept",
        prompt: "In <code>git push origin main</code>, what exactly is <code>origin</code>?",
        choices: [
          "The name of the main branch.",
          "A shorthand alias for the remote repository's URL, created by default when you clone.",
          "The original author of the repository.",
          "A protected system branch."
        ],
        answer: 1,
        explanation: "<code>origin</code> is just the default <b>name for the remote</b> — an alias for the URL you cloned from (see <code>git remote -v</code>). It's convention, not magic: you can rename it or add more remotes (e.g. <code>upstream</code> for the original repo of a fork)."
      },
      {
        type: "Predict the outcome",
        prompt: "What does <code>HEAD~2</code> refer to?",
        choices: [
          "The 2nd branch in the repository.",
          "The commit two steps before the current one (grandparent of HEAD).",
          "Two commits in the future.",
          "The 2nd file changed in the last commit."
        ],
        answer: 1,
        explanation: "<code>HEAD</code> is your current commit; <code>~n</code> walks back n first-parent steps. So <code>HEAD~2</code> is the grandparent commit. (Related: <code>HEAD^</code> equals <code>HEAD~1</code>; they differ only around merge commits, where <code>^2</code> selects the second parent.)"
      },
      {
        type: "Judgment",
        prompt: "A teammate asks: \"Why write small, focused commits with clear messages instead of one giant 'changes' commit at the end of the day?\" Which answer is best?",
        choices: [
          "It doesn't matter; git works either way.",
          "Small commits make review, reverting a single change, git bisect debugging, and understanding history far easier.",
          "Because GitHub charges per commit size.",
          "Big commits are actually better — fewer entries to read."
        ],
        answer: 1,
        explanation: "Atomic commits are a core collaboration practice: reviewers can follow the reasoning, a bad change can be reverted alone without dragging unrelated work, <code>git bisect</code> can pinpoint which small change broke something, and <code>git blame</code>/history actually explain <em>why</em> code exists. Git tolerates giant commits; teams suffer them."
      },
      {
        type: "Scenario",
        prompt: "You accidentally committed to <code>main</code> instead of a feature branch (not pushed). What's the cleanest fix?",
        choices: [
          "Delete the repository and re-clone.",
          "git branch feature (capture the commit), then git reset --hard HEAD~1 on main — the commit now lives only on feature.",
          "git push --force immediately.",
          "Nothing can be done; main is permanent."
        ],
        answer: 1,
        explanation: "Create the branch first — <code>git branch feature</code> pins a label to the commit — then move main back with <code>git reset --hard HEAD~1</code>. The work is safe on <code>feature</code>, and main is clean. Order matters: resetting first would leave the commit unreferenced. Safe only because it wasn't pushed."
      }
    ]
  },

  /* ================= JAVASCRIPT SKILLS ================= */
  javascript: {
    name: "JavaScript Skills Verification",
    icon: "🟨",
    desc: "Core JS fluency: coercion, scope, closures, the event loop, async, and common traps.",
    items: [
      {
        type: "Predict the output",
        prompt: "What does this print?",
        context: "<pre><code>console.log(\"5\" == 5);\nconsole.log(\"5\" === 5);</code></pre>",
        choices: ["true, true", "true, false", "false, false", "false, true"],
        answer: 1,
        explanation: "<code>==</code> performs type coercion, so <code>\"5\" == 5</code> is <b>true</b>. <code>===</code> compares type AND value with no coercion, so a string never strictly equals a number — <b>false</b>. Best practice: default to <code>===</code>."
      },
      {
        type: "Predict the output",
        prompt: "What does <code>typeof null</code> return?",
        choices: ["\"null\"", "\"undefined\"", "\"object\"", "It throws an error"],
        answer: 2,
        explanation: "<code>typeof null</code> returns <b>\"object\"</b> — a famous historical bug kept for backward compatibility. To actually test for null, use <code>value === null</code>."
      },
      {
        type: "Predict the output",
        prompt: "What does this print?",
        context: "<pre><code>console.log(\"5\" + 2);\nconsole.log(\"5\" - 2);</code></pre>",
        choices: ["\"52\" then 3", "7 then 3", "\"52\" then \"3\"", "7 then \"52\""],
        answer: 0,
        explanation: "<code>+</code> with a string concatenates: <code>\"5\" + 2</code> → <b>\"52\"</b>. But <code>-</code> has no string meaning, so both operands coerce to numbers: <code>\"5\" - 2</code> → <b>3</b>. Asymmetric coercion between + and - is a classic JS trap."
      },
      {
        type: "Predict the output",
        prompt: "What does this print?",
        context: "<pre><code>console.log(x);\nvar x = 5;</code></pre>",
        choices: ["5", "undefined", "ReferenceError", "null"],
        answer: 1,
        explanation: "<code>var</code> declarations are <b>hoisted</b> to the top of their scope but the assignment stays in place — so <code>x</code> exists but is <code>undefined</code> at the log. With <code>let</code>/<code>const</code> the same code throws a ReferenceError (temporal dead zone)."
      },
      {
        type: "Core concept",
        prompt: "What's the key scoping difference between <code>var</code> and <code>let</code>?",
        choices: [
          "var is block-scoped; let is function-scoped.",
          "let is block-scoped; var is function-scoped and leaks out of blocks like if/for.",
          "They're identical; let is just newer syntax.",
          "var is immutable; let can be reassigned."
        ],
        answer: 1,
        explanation: "<code>let</code> (and <code>const</code>) are <b>block-scoped</b> — confined to the nearest <code>{}</code>. <code>var</code> is function-scoped, so a <code>var</code> inside an <code>if</code> block is visible outside it. Immutability is <code>const</code>'s job, not var/let's difference."
      },
      {
        type: "Predict the output",
        prompt: "What does this print?",
        context: "<pre><code>function makeCounter() {\n  let count = 0;\n  return () => ++count;\n}\nconst a = makeCounter();\nconst b = makeCounter();\nconsole.log(a(), a(), b());</code></pre>",
        choices: ["1 2 3", "1 2 1", "1 1 1", "0 1 0"],
        answer: 1,
        explanation: "Each <code>makeCounter()</code> call creates a fresh <code>count</code> captured by a <b>closure</b>. <code>a</code> increments its own counter twice (1, 2); <code>b</code> has an independent counter (1). Output: <b>1 2 1</b>."
      },
      {
        type: "Predict the output",
        prompt: "In what order does this print?",
        context: "<pre><code>console.log(\"a\");\nsetTimeout(() => console.log(\"b\"), 0);\nPromise.resolve().then(() => console.log(\"c\"));\nconsole.log(\"d\");</code></pre>",
        choices: ["a b c d", "a d c b", "a d b c", "a c d b"],
        answer: 1,
        explanation: "Synchronous code runs first (a, d). Then the event loop drains <b>microtasks</b> (promise callbacks → c) before <b>macrotasks</b> (setTimeout → b), even with a 0ms delay. Order: <b>a d c b</b>. Microtask-vs-macrotask ordering is a favorite interview/screening item."
      },
      {
        type: "Best practice",
        prompt: "What's the reliable way to check whether a value is <code>NaN</code>?",
        choices: [
          "value === NaN",
          "Number.isNaN(value)",
          "value == NaN",
          "typeof value === \"NaN\""
        ],
        answer: 1,
        explanation: "<code>NaN</code> is the only JS value not equal to itself, so <code>value === NaN</code> is always false. Use <code>Number.isNaN(value)</code> (strict, no coercion). Global <code>isNaN()</code> coerces first (<code>isNaN(\"hello\")</code> is true), which usually isn't what you want."
      },
      {
        type: "Core concept",
        prompt: "What's the difference between <code>map()</code> and <code>forEach()</code> on arrays?",
        choices: [
          "map returns a new array of transformed values; forEach returns undefined and is used for side effects.",
          "forEach is faster, otherwise identical.",
          "map mutates the original array; forEach doesn't.",
          "forEach can break early; map cannot."
        ],
        answer: 0,
        explanation: "<code>map</code> builds and returns a <b>new array</b> from the callback's return values; <code>forEach</code> ignores return values and yields <code>undefined</code> — it's for side effects. Neither mutates the source array, and neither supports <code>break</code> (use a plain loop or <code>some</code>/<code>every</code> for that)."
      },
      {
        type: "Predict the output",
        prompt: "What does <code>console.log(0.1 + 0.2 === 0.3)</code> print, and why?",
        choices: [
          "true — the math is exact.",
          "false — binary floating-point can't represent 0.1 and 0.2 exactly, so the sum is 0.30000000000000004.",
          "It throws a precision error.",
          "true, but only in strict mode."
        ],
        answer: 1,
        explanation: "IEEE-754 floats store decimals in binary, and 0.1/0.2 have no exact binary representation. The sum is 0.30000000000000004, so the comparison is <b>false</b>. Compare with a tolerance (<code>Math.abs(a-b) &lt; Number.EPSILON</code>) instead."
      },
      {
        type: "Predict the output",
        prompt: "Which line throws an error?",
        context: "<pre><code>const arr = [1, 2];\narr.push(3);        // line A\narr = [4, 5];       // line B</code></pre>",
        choices: [
          "Line A — const arrays can't be modified.",
          "Line B — const prevents reassigning the binding, but the array's contents can still change.",
          "Both lines throw.",
          "Neither line throws."
        ],
        answer: 1,
        explanation: "<code>const</code> locks the <b>binding</b>, not the value. Mutating the array (<code>push</code>) is fine; reassigning the variable (<code>arr = ...</code>) throws TypeError. To prevent mutation you'd need <code>Object.freeze()</code>."
      },
      {
        type: "Predict the output",
        prompt: "What does this print?",
        context: "<pre><code>const obj = {\n  name: \"Ada\",\n  regular() { return this.name; },\n  arrow: () => this.name\n};\nconsole.log(obj.regular(), obj.arrow());</code></pre>",
        choices: [
          "\"Ada\" \"Ada\"",
          "\"Ada\" undefined",
          "undefined \"Ada\"",
          "undefined undefined"
        ],
        answer: 1,
        explanation: "A regular method's <code>this</code> is the object it's called on → \"Ada\". An <b>arrow function has no own <code>this</code></b> — it inherits from the enclosing (module/global) scope, where <code>this.name</code> is undefined. Never use arrows as object methods that need <code>this</code>."
      },
      {
        type: "Predict the output",
        prompt: "What does this print?",
        context: "<pre><code>const user = { profile: null };\nconsole.log(user.profile?.email);\nconsole.log(user.settings?.theme);</code></pre>",
        choices: [
          "TypeError on the first line",
          "undefined then undefined — optional chaining short-circuits on null/undefined instead of throwing",
          "null then undefined",
          "undefined then TypeError"
        ],
        answer: 1,
        explanation: "<code>?.</code> returns <b>undefined</b> (rather than throwing) when the left side is null or undefined. Both lines print undefined. Without it, <code>user.profile.email</code> would throw TypeError. Note it doesn't convert null to undefined generally — it short-circuits the property access."
      },
      {
        type: "Predict the output",
        prompt: "What does this print?",
        context: "<pre><code>const data = { a: 1, b: undefined, c: () => 2 };\nconsole.log(JSON.stringify(data));</code></pre>",
        choices: [
          "{\"a\":1,\"b\":undefined,\"c\":\"() => 2\"}",
          "{\"a\":1}",
          "{\"a\":1,\"b\":null}",
          "It throws an error"
        ],
        answer: 1,
        explanation: "JSON has no representation for <code>undefined</code> or functions, so <code>JSON.stringify</code> <b>silently drops those properties</b> from objects → <code>{\"a\":1}</code>. (In arrays they'd become null instead.) A common source of data quietly disappearing across an API boundary."
      },
      {
        type: "Predict the output",
        prompt: "What does this print?",
        context: "<pre><code>const { name: userName = \"Guest\" } = {};\nconsole.log(userName);</code></pre>",
        choices: ["undefined", "\"Guest\"", "ReferenceError: name is not defined", "null"],
        answer: 1,
        explanation: "This destructures <code>name</code> from an empty object, <b>renames</b> it to <code>userName</code>, and applies the default <code>\"Guest\"</code> because the property is undefined. The combination rename + default (<code>name: userName = \"Guest\"</code>) trips up many readers."
      },
      {
        type: "Predict the output",
        prompt: "What does <code>console.log([1, 2, 3] + [4, 5])</code> print?",
        choices: ["[1,2,3,4,5]", "\"1,2,34,5\"", "TypeError", "15"],
        answer: 1,
        explanation: "<code>+</code> isn't defined for arrays, so both coerce to strings: <code>\"1,2,3\"</code> and <code>\"4,5\"</code>, concatenated → <b>\"1,2,34,5\"</b>. To actually combine arrays use <code>[...a, ...b]</code> or <code>a.concat(b)</code>."
      },
      {
        type: "Core concept",
        prompt: "What does an <code>async</code> function always return?",
        choices: [
          "Whatever value the return statement specifies, unchanged.",
          "A Promise — return values are wrapped, and thrown errors become rejections.",
          "undefined, unless you use .then().",
          "A generator object."
        ],
        answer: 1,
        explanation: "An <code>async</code> function <b>always returns a Promise</b>: <code>return 5</code> resolves to 5, and a thrown error becomes a rejected promise. That's why callers must <code>await</code> it or use <code>.then()</code> — logging the call directly shows <code>Promise { ... }</code>."
      },
      {
        type: "Find the bug",
        prompt: "This 'copy' still lets edits leak into the original. Why?",
        context: "<pre><code>const original = { name: \"Ada\", address: { city: \"London\" } };\nconst copy = { ...original };\ncopy.address.city = \"Paris\";\nconsole.log(original.address.city); // \"Paris\" ?!</code></pre>",
        choices: [
          "Spread syntax doesn't copy anything; copy IS original.",
          "Spread makes a shallow copy — nested objects are still shared references.",
          "Object properties can't be copied in JS.",
          "The const keyword links the two objects."
        ],
        answer: 1,
        explanation: "<code>{ ...original }</code> copies only the <b>top level</b>; <code>copy.address</code> and <code>original.address</code> point to the same nested object. For deep copies use <code>structuredClone(original)</code> (modern) or rebuild nested levels explicitly."
      },
      {
        type: "Core concept",
        prompt: "A search box fires an API call on every keystroke. You want to wait until the user STOPS typing for 300ms before calling. Which technique?",
        choices: [
          "Throttle — run at most once per interval.",
          "Debounce — delay execution until input pauses for the specified time.",
          "setInterval polling.",
          "Promise.all batching."
        ],
        answer: 1,
        explanation: "<b>Debounce</b> resets a timer on each event and fires only after the pause — exactly the 'wait until they stop typing' behavior. <b>Throttle</b> is the sibling: it guarantees at most one execution per interval while events keep firing (better for scroll handlers). Knowing which fits which scenario is a standard screening question."
      },
      {
        type: "Best practice",
        prompt: "What's the correct way to check that a value is an array?",
        choices: [
          "typeof value === \"array\"",
          "Array.isArray(value)",
          "value instanceof Object",
          "value.length !== undefined"
        ],
        answer: 1,
        explanation: "<code>Array.isArray()</code> is the reliable check. <code>typeof []</code> returns <b>\"object\"</b> (there is no \"array\" type string), <code>instanceof Object</code> matches nearly everything, and strings/arguments objects also have <code>.length</code>."
      }
    ]
  },

  /* ================= TYPESCRIPT SKILLS ================= */
  typescript: {
    name: "TypeScript Skills Verification",
    icon: "🔷",
    desc: "Type-system fluency: narrowing, generics, utility types, and what TS does (and doesn't do) at runtime.",
    items: [
      {
        type: "Core concept",
        prompt: "What's the key difference between <code>any</code> and <code>unknown</code>?",
        choices: [
          "They're identical escape hatches.",
          "any disables type checking entirely; unknown is type-safe — you must narrow it before using it.",
          "unknown disables checking; any requires narrowing.",
          "any is for objects, unknown is for primitives."
        ],
        answer: 1,
        explanation: "<code>any</code> opts out of the type system — you can call anything on it with no errors. <code>unknown</code> accepts any value but forbids operations until you <b>narrow</b> it (typeof check, instanceof, assertion). Prefer <code>unknown</code> for untrusted input like API responses."
      },
      {
        type: "Predict the error",
        prompt: "Does this compile?",
        context: "<pre><code>let count: number = 5;\ncount = \"five\";</code></pre>",
        choices: [
          "Yes — JS allows reassignment.",
          "No — Type 'string' is not assignable to type 'number'.",
          "Yes, but with a warning.",
          "No — let variables can't be reassigned."
        ],
        answer: 1,
        explanation: "The annotation locks <code>count</code> to <code>number</code>, so assigning a string is a compile error: <em>Type 'string' is not assignable to type 'number'</em>. This is TypeScript's core value — catching type mismatches before the code runs."
      },
      {
        type: "Core concept",
        prompt: "In this interface, what does the <code>?</code> mean?",
        context: "<pre><code>interface User {\n  name: string;\n  email?: string;\n}</code></pre>",
        choices: [
          "email is nullable but required.",
          "email is optional — a User may omit it, and its type is string | undefined.",
          "email must be validated at runtime.",
          "email is read-only."
        ],
        answer: 1,
        explanation: "<code>?</code> marks an <b>optional property</b>: <code>{ name: \"Ada\" }</code> is a valid User, and reading <code>user.email</code> has type <code>string | undefined</code> — so the compiler forces you to handle the missing case before treating it as a string."
      },
      {
        type: "Narrowing",
        prompt: "Why does this compile without errors?",
        context: "<pre><code>function format(value: string | number) {\n  if (typeof value === \"string\") {\n    return value.toUpperCase();\n  }\n  return value.toFixed(2);\n}</code></pre>",
        choices: [
          "TypeScript ignores union types inside functions.",
          "The typeof check narrows the union: value is string in the if-branch and number after it.",
          "toUpperCase and toFixed exist on both types.",
          "It doesn't compile — unions can't be used like this."
        ],
        answer: 1,
        explanation: "This is <b>type narrowing</b> via a type guard: inside <code>typeof value === \"string\"</code> the compiler knows value is a string; in the remaining code path it must be number. Control-flow narrowing is the idiomatic way to work with unions."
      },
      {
        type: "Core concept",
        prompt: "What problem do generics solve in this function?",
        context: "<pre><code>function first&lt;T&gt;(items: T[]): T | undefined {\n  return items[0];\n}</code></pre>",
        choices: [
          "They make the function run faster.",
          "They preserve the element type: first([1,2]) returns number | undefined instead of any.",
          "They allow the function to accept more arguments.",
          "They convert the array to a tuple."
        ],
        answer: 1,
        explanation: "Generics keep the <b>relationship</b> between input and output types: <code>first([\"a\"])</code> is <code>string | undefined</code>, <code>first([1])</code> is <code>number | undefined</code>. Without <code>&lt;T&gt;</code> you'd have to choose between duplicating the function per type or losing safety with <code>any</code>."
      },
      {
        type: "Predict the error",
        prompt: "What happens here?",
        context: "<pre><code>interface Config { readonly apiUrl: string; }\nconst cfg: Config = { apiUrl: \"https://api.example.com\" };\ncfg.apiUrl = \"https://evil.example.com\";</code></pre>",
        choices: [
          "Compiles and runs — readonly is just documentation.",
          "Compile error: Cannot assign to 'apiUrl' because it is a read-only property.",
          "Runtime error when the assignment executes.",
          "The assignment is silently ignored."
        ],
        answer: 1,
        explanation: "<code>readonly</code> makes reassignment a <b>compile-time</b> error. Note the limit: it's erased at runtime, so plain JS calling this code could still mutate it — readonly is a compiler guarantee, not a runtime lock."
      },
      {
        type: "Core concept",
        prompt: "What does a type assertion like <code>value as User</code> actually do?",
        choices: [
          "Converts the value to a User object at runtime.",
          "Only tells the compiler to treat it as User — no runtime check or conversion happens at all.",
          "Validates the value's shape and throws if it doesn't match.",
          "Creates a copy typed as User."
        ],
        answer: 1,
        explanation: "<code>as</code> is purely a <b>compile-time claim</b> — it changes what the checker believes, and is completely erased from the emitted JS. If the value isn't actually a User, nothing catches it until something breaks later. For real validation you need runtime checks (or a library like zod)."
      },
      {
        type: "Predict the error",
        prompt: "With <code>strictNullChecks</code> on, why does this fail to compile?",
        context: "<pre><code>function greet(name?: string) {\n  return name.toUpperCase();\n}</code></pre>",
        choices: [
          "toUpperCase doesn't exist on strings.",
          "name is possibly undefined — you must check (or default) before calling methods on it.",
          "Optional parameters can't be used in the function body.",
          "It compiles fine."
        ],
        answer: 1,
        explanation: "<code>name?</code> means <code>string | undefined</code>, and calling a method on possibly-undefined is an error: <em>'name' is possibly 'undefined'</em>. Fix with a guard (<code>if (!name) return ...</code>), a default (<code>name = \"friend\"</code>), or optional chaining. This null-safety is one of TS's biggest practical wins."
      },
      {
        type: "Core concept",
        prompt: "When does the <code>never</code> type appear, and what's it useful for?",
        choices: [
          "It's an alias for undefined.",
          "It represents values that can't occur — e.g. a function that always throws, or the leftover of an exhausted union, enabling exhaustiveness checks.",
          "It marks deprecated APIs.",
          "It's the return type of async functions."
        ],
        answer: 1,
        explanation: "<code>never</code> is the impossible type: functions that always throw return it, and after narrowing every member of a union, what remains is never. The classic use is an exhaustiveness check in a switch — assigning the default-case value to <code>never</code> makes the compiler flag any union member you forgot to handle."
      },
      {
        type: "Core concept",
        prompt: "What's the difference between these two?",
        context: "<pre><code>const pair: [string, number] = [\"age\", 30];\nconst list: (string | number)[] = [\"age\", 30];</code></pre>",
        choices: [
          "No difference.",
          "pair is a tuple — fixed length with a specific type per position; list is any-length with mixed elements anywhere.",
          "Tuples are immutable arrays.",
          "list is invalid syntax."
        ],
        answer: 1,
        explanation: "A <b>tuple</b> fixes both length and per-position types: <code>pair[0]</code> is exactly string, <code>pair[1]</code> exactly number, and <code>[30, \"age\"]</code> would error. The union array accepts either type at any index and any length. Tuples model 'a pair of specific things', arrays model collections."
      },
      {
        type: "Utility types",
        prompt: "What does <code>Partial&lt;User&gt;</code> produce?",
        choices: [
          "A User with only half its properties.",
          "A type where every property of User is optional — handy for update/patch payloads.",
          "A deep-cloned User type.",
          "A User missing its methods."
        ],
        answer: 1,
        explanation: "<code>Partial&lt;T&gt;</code> maps every property to optional: <code>{ name?: string; email?: string }</code>. Typical use: <code>function updateUser(id: string, changes: Partial&lt;User&gt;)</code> — callers pass only the fields they're changing. Its inverse is <code>Required&lt;T&gt;</code>."
      },
      {
        type: "Utility types",
        prompt: "You want a User type without its <code>password</code> field for sending to the client. Which is idiomatic?",
        choices: [
          "type SafeUser = Omit&lt;User, \"password\"&gt;",
          "type SafeUser = Partial&lt;User&gt;",
          "type SafeUser = Pick&lt;User, \"password\"&gt;",
          "Delete the field at runtime; the type fixes itself."
        ],
        answer: 0,
        explanation: "<code>Omit&lt;T, K&gt;</code> removes the named keys — exactly this use case. <code>Pick</code> is the mirror (keep only the named keys, so Pick&lt;User,\"password\"&gt; keeps ONLY the password — the opposite). And types never change runtime data: you must also actually strip the field in code."
      },
      {
        type: "Narrowing",
        prompt: "How does TypeScript know <code>shape.radius</code> is safe in the first branch?",
        context: "<pre><code>type Shape =\n  | { kind: \"circle\"; radius: number }\n  | { kind: \"square\"; size: number };\n\nfunction area(shape: Shape) {\n  if (shape.kind === \"circle\") return Math.PI * shape.radius ** 2;\n  return shape.size ** 2;\n}</code></pre>",
        choices: [
          "It doesn't — this needs a cast.",
          "This is a discriminated union: checking the literal 'kind' property narrows the union to the matching member.",
          "radius exists on both members.",
          "Math.PI forces numeric narrowing."
        ],
        answer: 1,
        explanation: "The shared literal property <code>kind</code> is the <b>discriminant</b>: comparing it to \"circle\" tells the compiler which union member you're in, unlocking that member's fields. Discriminated unions + narrowing is the canonical TS pattern for modeling variants."
      },
      {
        type: "Core concept",
        prompt: "Your API returns JSON you've typed as <code>User</code>. At runtime the server sends a malformed object. What does TypeScript do?",
        choices: [
          "Throws a TypeError when the bad data arrives.",
          "Nothing — types are fully erased at compile time; runtime data is never checked by TS itself.",
          "Logs a console warning.",
          "Coerces the data to match the type."
        ],
        answer: 1,
        explanation: "TypeScript's types <b>don't exist at runtime</b> — they compile away entirely. Typing a fetch response as User is a promise you make, not one TS enforces. For untrusted boundaries, add runtime validation (schema libraries like zod, or manual guards). This misconception is heavily tested."
      },
      {
        type: "Core concept",
        prompt: "What's the difference between <code>interface</code> and <code>type</code> for object shapes?",
        choices: [
          "interface is deprecated in favor of type.",
          "Both describe object shapes; interfaces support declaration merging and extends, while type aliases also handle unions, intersections, and primitives.",
          "type runs faster at runtime.",
          "Interfaces are checked at runtime; types are not."
        ],
        answer: 1,
        explanation: "For plain object shapes they're near-interchangeable. Differences: interfaces can <b>merge</b> (two declarations with the same name combine — useful for augmenting libraries) and use extends; type aliases can express things interfaces can't (unions like <code>A | B</code>, mapped/conditional types, primitive aliases). Neither exists at runtime."
      },
      {
        type: "Predict the error",
        prompt: "Why does this signature fail to compile?",
        context: "<pre><code>function greet(greeting?: string, name: string) {\n  return greeting + \" \" + name;\n}</code></pre>",
        choices: [
          "Functions can't have two string parameters.",
          "A required parameter cannot follow an optional one.",
          "greeting must have a default value instead.",
          "It compiles fine."
        ],
        answer: 1,
        explanation: "<em>A required parameter cannot follow an optional parameter.</em> Since arguments are positional, an optional-then-required order would be ambiguous. Fix: reorder (<code>name, greeting?</code>) or give the first a default. (A defaulted parameter <code>greeting = \"Hi\"</code> before a required one compiles, but callers must pass undefined explicitly — reordering is cleaner.)"
      },
      {
        type: "Best practice",
        prompt: "You need a value restricted to exactly \"small\", \"medium\", or \"large\". Which is the most idiomatic modern TS?",
        choices: [
          "type Size = \"small\" | \"medium\" | \"large\"  (a literal union)",
          "let size: string with a comment listing the options",
          "class Size with three static instances",
          "type Size = any"
        ],
        answer: 0,
        explanation: "A <b>literal union type</b> gives compile-time enforcement and editor autocomplete with zero runtime cost. A commented string enforces nothing; a class is heavyweight for three constants. (Enums also work, but literal unions are the lighter, more idiomatic choice in modern codebases.)"
      },
      {
        type: "Predict the error",
        prompt: "What happens at the marked line?",
        context: "<pre><code>function handle(data: unknown) {\n  console.log(data.length);   // &lt;-- here\n}</code></pre>",
        choices: [
          "Prints the length if data has one.",
          "Compile error: 'data' is of type 'unknown' — you must narrow it first (e.g. typeof data === \"string\").",
          "Runtime error only.",
          "Compiles because length exists on most values."
        ],
        answer: 1,
        explanation: "<code>unknown</code> forbids every operation until narrowed. The fix is a guard: <code>if (typeof data === \"string\") console.log(data.length)</code>. This is exactly how unknown improves on any — the same code with <code>any</code> compiles silently and can crash at runtime."
      },
      {
        type: "Core concept",
        prompt: "Are <code>string[]</code> and <code>Array&lt;string&gt;</code> different types?",
        choices: [
          "Yes — string[] is fixed-length.",
          "No — they're identical; [] is shorthand syntax for the generic Array type.",
          "Yes — Array<string> allows null elements.",
          "Yes — string[] is read-only."
        ],
        answer: 1,
        explanation: "They're two spellings of the <b>same type</b>. <code>T[]</code> is sugar for <code>Array&lt;T&gt;</code>. Teams pick one for style; the generic form is sometimes clearer for complex element types like <code>Array&lt;{ id: number }&gt;</code>."
      },
      {
        type: "Utility types",
        prompt: "What type does this produce?",
        context: "<pre><code>interface User { id: number; name: string; email: string; }\ntype Preview = Pick&lt;User, \"id\" | \"name\"&gt;;</code></pre>",
        choices: [
          "{ id: number; name: string }",
          "{ email: string }",
          "{ id?: number; name?: string }",
          "A compile error — Pick takes one key only."
        ],
        answer: 0,
        explanation: "<code>Pick&lt;T, K&gt;</code> keeps only the listed keys with their original types (still required): <code>{ id: number; name: string }</code>. Pick selects what to keep; <code>Omit</code> selects what to drop — the two are complements."
      }
    ]
  },

  /* ================= REACT SKILLS ================= */
  react: {
    name: "React Skills Verification",
    icon: "⚛️",
    desc: "Component and hooks fluency: state updates, effects, keys, controlled inputs, and re-render behavior.",
    items: [
      {
        type: "Core concept",
        prompt: "What is JSX?",
        choices: [
          "A templating language that runs in the browser directly.",
          "Syntax sugar that compiles to React.createElement calls — JavaScript expressions describing UI.",
          "A CSS-in-JS library.",
          "React's built-in state manager."
        ],
        answer: 1,
        explanation: "JSX compiles (via Babel/TS) to plain function calls that create element objects — it's JavaScript, not HTML. That's why you can embed expressions in <code>{ }</code>, why attributes use camelCase (<code>className</code>, <code>onClick</code>), and why browsers can't run it untranspiled."
      },
      {
        type: "Core concept",
        prompt: "A child component tries to modify a prop it received: <code>props.count = 5</code>. What's the React rule here?",
        choices: [
          "Fine — props are shared mutable state.",
          "Props are read-only; data flows down, and changes must happen via the owner's state (often through a callback prop).",
          "Allowed only in class components.",
          "Allowed if wrapped in useEffect."
        ],
        answer: 1,
        explanation: "React's one-way data flow: a component <b>never mutates its props</b>. If a child needs to change data, the parent that owns the state passes down a callback (e.g. <code>onIncrement</code>) for the child to invoke. Mutating props breaks predictability and won't trigger re-renders."
      },
      {
        type: "Predict the output",
        prompt: "After one click, what is <code>count</code>?",
        context: "<pre><code>const [count, setCount] = useState(0);\n\nfunction handleClick() {\n  setCount(count + 1);\n  setCount(count + 1);\n  setCount(count + 1);\n}</code></pre>",
        choices: ["3", "1", "0", "2"],
        answer: 1,
        explanation: "All three calls read the <b>same stale closure value</b> (count = 0), so each sets it to 1 — final result <b>1</b>, not 3. State updates are batched and <code>count</code> doesn't change mid-handler. This is the single most-asked React hooks question."
      },
      {
        type: "Best practice",
        prompt: "How do you fix the previous handler so one click adds 3?",
        choices: [
          "Call setCount three times in separate setTimeout calls.",
          "Use functional updates: setCount(c => c + 1) three times — each receives the latest value.",
          "Use var instead of const for count.",
          "Add count to a dependency array."
        ],
        answer: 1,
        explanation: "The functional form <code>setCount(c =&gt; c + 1)</code> receives the <b>pending latest state</b>, so three calls chain 0→1→2→3. Rule of thumb: whenever the next state depends on the previous state, use the updater function."
      },
      {
        type: "Core concept",
        prompt: "When does this effect run?",
        context: "<pre><code>useEffect(() => {\n  fetchUsers();\n}, []);</code></pre>",
        choices: [
          "On every render.",
          "Once after the initial mount (the empty dependency array means no re-runs).",
          "Only when fetchUsers changes.",
          "Before the component renders."
        ],
        answer: 1,
        explanation: "An empty dependency array <code>[]</code> means the effect runs once after the first render (mount) and never again. No array = every render; <code>[dep]</code> = mount + whenever dep changes. Effects always run <em>after</em> paint, not before. (In dev StrictMode it mounts twice to surface bugs — not the case in production.)"
      },
      {
        type: "Core concept",
        prompt: "What is the returned function for?",
        context: "<pre><code>useEffect(() => {\n  const id = setInterval(tick, 1000);\n  return () => clearInterval(id);\n}, []);</code></pre>",
        choices: [
          "It's the effect's return value passed to the parent.",
          "A cleanup function — React calls it before the effect re-runs and when the component unmounts, preventing leaks.",
          "It restarts the interval.",
          "It's required syntax with no behavior."
        ],
        answer: 1,
        explanation: "Returning a function from an effect registers <b>cleanup</b>: React invokes it on unmount (and before every re-run of the effect). Here it stops the interval so unmounted components don't keep ticking — forgetting cleanup is the classic source of memory leaks and 'setState on unmounted component' warnings."
      },
      {
        type: "Judgment",
        prompt: "Why is using the array index as a list key risky?",
        context: "<pre><code>{todos.map((todo, i) => &lt;TodoItem key={i} todo={todo} /&gt;)}</code></pre>",
        choices: [
          "Index keys are slower to compute.",
          "If items are reordered, inserted, or deleted, indexes shift — React matches old state/DOM to the wrong items, causing subtle bugs.",
          "React forbids numeric keys.",
          "It's never risky; keys are only for warnings."
        ],
        answer: 1,
        explanation: "Keys are React's <b>identity</b> for list items across renders. With index keys, deleting the first todo makes every remaining item's key shift by one, so component state (like a checked checkbox or input text) sticks to the wrong row. Use a stable unique id. Index is acceptable only for static, never-reordered lists."
      },
      {
        type: "Core concept",
        prompt: "What makes this input 'controlled'?",
        context: "<pre><code>&lt;input value={name} onChange={e =&gt; setName(e.target.value)} /&gt;</code></pre>",
        choices: [
          "It has a maxLength attribute.",
          "React state is the single source of truth: the displayed value comes from state, and every keystroke updates state.",
          "The browser validates it automatically.",
          "It can't be edited by the user."
        ],
        answer: 1,
        explanation: "A <b>controlled</b> input renders whatever state says (<code>value={name}</code>) and routes user edits through <code>onChange</code> → setState → re-render. This makes validation, formatting, and resets trivial. The alternative — uncontrolled with a ref reading <code>defaultValue</code> — leaves the DOM as the source of truth."
      },
      {
        type: "Judgment",
        prompt: "Two sibling components need to share the same piece of state. What's the standard React solution?",
        choices: [
          "Have each keep its own copy and sync with effects.",
          "Lift the state up to their closest common parent and pass it down as props.",
          "Store it on the window object.",
          "Siblings can't share state in React."
        ],
        answer: 1,
        explanation: "<b>Lifting state up</b>: move the state to the nearest common ancestor, pass the value and updater callbacks down. Duplicating state and syncing with effects creates drift and render loops — the most common architectural mistake reviewers look for. (Context/stores are for when lifting gets too deep.)"
      },
      {
        type: "Find the bug",
        prompt: "When <code>count</code> is 0, this renders a stray '0' on screen. Why?",
        context: "<pre><code>{count && &lt;p&gt;You have {count} items&lt;/p&gt;}</code></pre>",
        choices: [
          "React always renders numbers.",
          "0 is falsy, so && short-circuits and returns 0 itself — and React renders the number 0 as text.",
          "The p tag is malformed.",
          "count is a string."
        ],
        answer: 1,
        explanation: "<code>a && b</code> evaluates to <code>a</code> when a is falsy — here the number <b>0</b>, which React happily renders (unlike false/null/undefined, which render nothing). Fix: <code>{count &gt; 0 && ...}</code> or a ternary. A tiny trap that ships to production constantly."
      },
      {
        type: "Find the bug",
        prompt: "Clicking 'Add' updates the data but the list never re-renders. Why?",
        context: "<pre><code>const [items, setItems] = useState([]);\n\nfunction addItem(item) {\n  items.push(item);\n  setItems(items);\n}</code></pre>",
        choices: [
          "push is asynchronous.",
          "The array was mutated in place — setItems receives the SAME reference, so React's Object.is comparison sees no change and skips the re-render.",
          "useState can't hold arrays.",
          "setItems needs a second argument."
        ],
        answer: 1,
        explanation: "React decides 'did state change?' by <b>reference comparison</b>. Mutating and passing back the same array looks unchanged. Always produce a new reference: <code>setItems([...items, item])</code>. The same rule applies to objects — treat state as immutable."
      },
      {
        type: "Core concept",
        prompt: "Which of these violates the Rules of Hooks?",
        choices: [
          "Calling useState twice in one component.",
          "Calling useEffect inside an if-statement.",
          "Calling a custom hook from another custom hook.",
          "Using useState in an arrow-function component."
        ],
        answer: 1,
        explanation: "Hooks must be called <b>unconditionally at the top level</b>, in the same order every render — React tracks them by call order. A hook inside an if runs on some renders and not others, corrupting that order. Conditions go <em>inside</em> the hook (<code>useEffect(() =&gt; { if (ready) ... })</code>), never around it."
      },
      {
        type: "Find the bug",
        prompt: "This alert fires immediately on render, not on click. Why?",
        context: "<pre><code>&lt;button onClick={handleDelete()}&gt;Delete&lt;/button&gt;</code></pre>",
        choices: [
          "onClick is the wrong event name.",
          "handleDelete() CALLS the function during render; you must pass the reference: onClick={handleDelete} or onClick={() => handleDelete(id)}.",
          "Buttons need onPress in React.",
          "The handler must be async."
        ],
        answer: 1,
        explanation: "The parentheses invoke the function while rendering and pass its <em>return value</em> as the handler. Pass the function itself — <code>onClick={handleDelete}</code> — or wrap it when you need arguments: <code>onClick={() =&gt; handleDelete(id)}</code>. A top-3 beginner React bug."
      },
      {
        type: "Core concept",
        prompt: "What's the key difference between <code>useRef</code> and <code>useState</code>?",
        choices: [
          "useRef is for DOM elements only.",
          "Updating a ref's .current does NOT trigger a re-render; setState does. Refs hold mutable values that persist across renders without affecting output.",
          "useState persists across renders; useRef resets each render.",
          "They're interchangeable."
        ],
        answer: 1,
        explanation: "Both persist across renders, but only <b>state updates schedule a re-render</b>. Refs are for values the UI doesn't display — timer ids, previous values, DOM nodes. If changing the value should change what's on screen, it's state; otherwise a ref avoids pointless renders."
      },
      {
        type: "Core concept",
        prompt: "Which of these causes a React component to re-render?",
        choices: [
          "Changing a ref's .current value.",
          "Its state changing, or its parent re-rendering (unless memoized).",
          "A variable inside the component function changing.",
          "Calling the component function manually."
        ],
        answer: 1,
        explanation: "Re-renders come from <b>setState in the component</b> or the <b>parent re-rendering</b> (children re-render with parents unless wrapped in <code>React.memo</code>). Refs and local variables don't schedule renders; local variables are recreated fresh each render anyway."
      },
      {
        type: "Core concept",
        prompt: "Why use a Fragment (<code>&lt;&gt;...&lt;/&gt;</code>)?",
        choices: [
          "To improve performance of large lists.",
          "To return multiple sibling elements without adding an extra wrapper node to the DOM.",
          "To enable CSS scoping.",
          "It's required around every component."
        ],
        answer: 1,
        explanation: "A component must return one root element; a Fragment groups siblings <b>without emitting a wrapper div</b> — keeping the DOM clean, which matters for flex/grid layouts and tables where an extra div breaks styling or validity."
      },
      {
        type: "Find the bug",
        prompt: "This effect logs a stale count forever. What's wrong?",
        context: "<pre><code>const [count, setCount] = useState(0);\n\nuseEffect(() => {\n  const id = setInterval(() => console.log(count), 1000);\n  return () => clearInterval(id);\n}, []);   // logs 0, 0, 0... even after count changes</code></pre>",
        choices: [
          "setInterval doesn't work inside effects.",
          "The effect closed over the initial count and never re-ran — count is missing from the dependency array (a stale closure).",
          "console.log caches its arguments.",
          "clearInterval runs too early."
        ],
        answer: 1,
        explanation: "With <code>[]</code>, the interval callback keeps the closure from the first render, where count was 0 — a <b>stale closure</b>. Fixes: add <code>count</code> to the deps (interval restarts on change), or use a ref for the latest value. The exhaustive-deps lint rule exists precisely to catch this."
      },
      {
        type: "Judgment",
        prompt: "A component stores <code>fullName</code> in state and updates it in an effect whenever <code>firstName</code> or <code>lastName</code> state changes. What's the better pattern?",
        choices: [
          "Keep the effect but add more dependencies.",
          "Don't store derived data — compute it during render: const fullName = firstName + \" \" + lastName;",
          "Move fullName to a ref.",
          "Store all three in one state object and mutate it."
        ],
        answer: 1,
        explanation: "If a value can be <b>computed from existing state/props, compute it in render</b> — no extra state, no effect, no risk of the copies drifting out of sync, one less render cycle. 'You might not need an effect' is official React guidance and a favorite code-review finding."
      },
      {
        type: "Core concept",
        prompt: "In a form's submit handler, why call <code>e.preventDefault()</code>?",
        context: "<pre><code>function handleSubmit(e) {\n  e.preventDefault();\n  saveData(formState);\n}</code></pre>",
        choices: [
          "It stops React from batching state updates.",
          "It stops the browser's default full-page reload on form submission so the SPA can handle it in JS.",
          "It prevents child components from re-rendering.",
          "It's only needed in class components."
        ],
        answer: 1,
        explanation: "Native form submission navigates/reloads the page — wiping your app's state. <code>preventDefault()</code> cancels that so your handler submits via JS (fetch, state update) instead. Same idea as preventing an anchor's navigation."
      },
      {
        type: "Judgment",
        prompt: "Compare two AI answers to: <em>'Why is my list rendering wrong after sorting?'</em> Answer A: 'Add key={Math.random()} to silence the warning.' Answer B: 'Use a stable unique id as the key so React can track item identity across reorders.' Which is correct?",
        choices: [
          "A — random keys are unique, which is all that matters.",
          "B — random keys change every render, forcing full remounts and losing state; keys must be stable AND unique.",
          "Both work equally well.",
          "Neither; keys are optional."
        ],
        answer: 1,
        explanation: "<code>Math.random()</code> generates a <b>new key every render</b>, so React treats every item as brand new: components remount, inputs lose focus and state, performance tanks. It silences the warning while making everything worse. Keys must be <b>stable across renders</b> and unique among siblings — an id from the data."
      }
    ]
  }

};
