/*
  # Update leads table policies

  1. Table Structure
    - Ensures leads table exists with required fields
    - Enables RLS
    - Adds policies for anonymous access
*/

-- Create table if it doesn't exist
CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  business_niche text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

DO $$ 
BEGIN
  -- Create insert policy if it doesn't exist
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'leads' AND policyname = 'Allow anonymous inserts'
  ) THEN
    CREATE POLICY "Allow anonymous inserts" ON leads
      FOR INSERT
      TO anon
      WITH CHECK (true);
  END IF;

  -- Create select policy if it doesn't exist
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'leads' AND policyname = 'Allow anonymous selects'
  ) THEN
    CREATE POLICY "Allow anonymous selects" ON leads
      FOR SELECT
      TO anon
      USING (true);
  END IF;
END $$;