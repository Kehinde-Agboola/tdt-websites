import { createClient } from '@supabase/supabase-js'

// TODO: Set these environment variables in your .env.local file
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase URL or anon key.')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
