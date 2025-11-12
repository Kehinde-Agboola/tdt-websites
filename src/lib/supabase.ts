import { createClient } from "@supabase/supabase-js";

// Read env vars; fall back to empty string so module import never throws.
// Prefer setting NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in production.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

if (!supabaseUrl || !supabaseAnonKey) {
  // Warn at runtime/build so maintainers know to set envs.
  // Avoid throwing here so TypeScript/Next build won't fail during prerender.
  // Calls to Supabase will error at runtime if the keys are missing.
  // eslint-disable-next-line no-console
  console.warn(
    "[lib/supabase] NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY not set."
  );
}

// Only create the client when both env vars are present. Otherwise export null
// so imports don't throw during build/prerender. Call sites must guard for null.
export const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;

export default supabase;
