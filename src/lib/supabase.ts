import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

let _supabase = null as ReturnType<typeof createClient> | null;

if (supabaseUrl && supabaseAnonKey) {
  _supabase = createClient(supabaseUrl, supabaseAnonKey);
} else {
  // Avoid throwing at import time (so build/prerender doesn't crash).
  // Log a warning so you know the envs are missing.
  // Any attempt to use `supabase` at runtime should be guarded.
  // console.warn will appear in server logs/build output.
  console.warn(
    "[lib/supabase] NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY not set."
  );
}

export const supabase = _supabase;
export default supabase;
