/*
  # Update leads table with proper RLS policies

  1. Table Structure
    - Ensures leads table exists with required fields
    - Enables RLS
    - Adds policies for anonymous access
*/

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Allow anonymous inserts" ON leads;
DROP POLICY IF EXISTS "Allow anonymous selects" ON leads;

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

-- Create new policies
CREATE POLICY "Allow anonymous inserts" ON leads FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow anonymous selects" ON leads FOR SELECT USING (true);