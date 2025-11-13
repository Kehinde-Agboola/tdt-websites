import { createClient } from "@supabase/supabase-js";
import type { SupabaseClient } from "@supabase/supabase-js";

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

// Only create the real client when both env vars are present. Otherwise export
// a lightweight no-op stub with the same surface used by our code so imports
// won't cause runtime errors during prerender. This keeps the app buildable
// without production env vars while providing predictable failures at runtime.
// Minimal typed stub for environments where Supabase env vars are not set.
// This provides the methods our app calls (from().insert(), auth, storage, functions)
// while keeping TypeScript happy without using `any`.
type MinimalTable = {
  insert: (rows: unknown[]) => Promise<{ data: unknown | null; error: Error | null }>;
  select: (...args: unknown[]) => Promise<{ data: unknown | null; error: Error | null }>;
  update: (...args: unknown[]) => Promise<{ data: unknown | null; error: Error | null }>;
  delete: (...args: unknown[]) => Promise<{ data: unknown | null; error: Error | null }>;
};

type MinimalStorage = {
  upload: (...args: unknown[]) => Promise<unknown>;
  download: (...args: unknown[]) => Promise<unknown>;
  list: (...args: unknown[]) => Promise<unknown>;
  remove: (...args: unknown[]) => Promise<unknown>;
};

type MinimalSupabaseClient = {
  from: (table: string) => MinimalTable;
  auth: {
    signUp: (...args: unknown[]) => Promise<unknown>;
    signIn: (...args: unknown[]) => Promise<unknown>;
    signOut: (...args: unknown[]) => Promise<unknown>;
  };
  storage: {
    from: (bucket: string) => MinimalStorage;
  };
  functions: {
    invoke: (...args: unknown[]) => Promise<unknown>;
  };
};

function makeStubClient(): MinimalSupabaseClient {
  const noop = async () => ({ data: null, error: new Error("Supabase not configured") });
  const table = (): MinimalTable => ({ insert: noop, select: noop, update: noop, delete: noop });
  return {
    from: () => table(),
    auth: {
      signUp: noop,
      signIn: noop,
      signOut: noop,
    },
    storage: {
      from: () => ({ upload: noop, download: noop, list: noop, remove: noop }),
    },
    functions: {
      invoke: noop,
    },
  };
}

export const supabase: SupabaseClient | MinimalSupabaseClient =
  supabaseUrl && supabaseAnonKey
    ? (createClient(supabaseUrl, supabaseAnonKey) as SupabaseClient)
    : makeStubClient();

export default supabase;
