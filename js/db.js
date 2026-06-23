/* =====================================================================
   AI Training Test — Central result storage (Supabase)
   ---------------------------------------------------------------------
   Sends one row per completed attempt to a hosted Postgres table.
   GitHub Pages can't run a database itself, so the static frontend posts
   results to Supabase over HTTPS. Row-Level Security on the table allows
   INSERT only — this public key CANNOT read, edit, or delete any results.
   (A publishable/anon key is meant to live in client code; data is
   protected by RLS, not by hiding the key.)

   View collected results in the Supabase dashboard → Table Editor → results.
   ===================================================================== */

const DB = (function () {
  const URL = "https://tykfaithdicdpeppxkxw.supabase.co";
  const KEY = "sb_publishable_jwOhhFGUtjcV_HAhNwQIdg_b1-d46Bm";
  const ENDPOINT = URL + "/rest/v1/results";
  const enabled = !!(URL && KEY);

  async function saveResult(payload) {
    if (!enabled) return { ok: false, reason: "not-configured" };
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: {
          "apikey": KEY,
          "Authorization": "Bearer " + KEY,
          "Content-Type": "application/json",
          "Prefer": "return=minimal"
        },
        body: JSON.stringify(payload)
      });
      if (!res.ok) {
        const detail = await res.text().catch(() => "");
        return { ok: false, reason: "http-" + res.status, detail };
      }
      return { ok: true };
    } catch (e) {
      return { ok: false, reason: "network", detail: String(e) };
    }
  }

  return { enabled, saveResult };
})();
