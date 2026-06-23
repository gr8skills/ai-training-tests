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
  }

};
