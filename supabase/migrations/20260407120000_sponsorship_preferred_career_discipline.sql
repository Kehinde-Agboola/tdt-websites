-- Run on Supabase if the app submits preferred_career_discipline from SponsorForm.
ALTER TABLE public.sponsorship_submissions
ADD COLUMN IF NOT EXISTS preferred_career_discipline text;
