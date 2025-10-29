-- Create a table to store user roles
CREATE TABLE public.user_roles (
  user_id UUID NOT NULL REFERENCES auth.users(id),
  role TEXT NOT NULL,
  PRIMARY KEY (user_id, role)
);

-- Create a function to check if a user is an admin
CREATE OR REPLACE FUNCTION is_admin()
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = auth.uid() AND role = 'admin'
  );
END;
$$;
