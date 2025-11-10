-- Enable RLS for all tables
ALTER TABLE public.research_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.sponsorship_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.project_adoption_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.newsletter_subscriptions ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows anonymous users to insert into the tables
CREATE POLICY "Allow anonymous users to insert"
ON public.research_submissions
FOR INSERT
TO anon
WITH CHECK (true);

CREATE POLICY "Allow anonymous users to insert"
ON public.sponsorship_submissions
FOR INSERT
TO anon
WITH CHECK (true);

CREATE POLICY "Allow anonymous users to insert"
ON public.project_adoption_submissions
FOR INSERT
TO anon
WITH CHECK (true);

CREATE POLICY "Allow anonymous users to insert"
ON public.newsletter_subscriptions
FOR INSERT
TO anon
WITH CHECK (true);

-- Create a policy that allows admin users to perform any action on the tables
-- This assumes you have a way to identify admin users, e.g., via a custom claim or a separate roles table.
-- For this example, we'll assume a function `is_admin()` that returns true if the user is an admin.
-- You would need to create this function in your database.
CREATE POLICY "Allow admin users full access"
ON public.research_submissions
FOR ALL
TO authenticated
USING (is_admin())
WITH CHECK (is_admin());

CREATE POLICY "Allow admin users full access"
ON public.sponsorship_submissions
FOR ALL
TO authenticated
USING (is_admin())
WITH CHECK (is_admin());

CREATE POLICY "Allow admin users full access"
ON public.project_adoption_submissions
FOR ALL
TO authenticated
USING (is_admin())
WITH CHECK (is_admin());

CREATE POLICY "Allow admin users full access"
ON public.newsletter_subscriptions
FOR ALL
TO authenticated
USING (is_admin())
WITH CHECK (is_admin());
