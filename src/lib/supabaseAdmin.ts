import { createClient } from '@supabase/supabase-js'

// TODO: Set these environment variables in your .env.local file
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseServiceRoleKey) {
  throw new Error('Missing Supabase URL or service role key.')
}

// Note: This client is for server-side use only and should not be exposed to the client.
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceRoleKey)
