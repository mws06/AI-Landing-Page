/*
  # Fix RLS policies for leads table

  1. Security Updates
    - Drop and recreate RLS policies with proper permissions
    - Enable public access for inserts and selects
*/

-- First disable RLS to reset policies
ALTER TABLE leads DISABLE ROW LEVEL SECURITY;

-- Drop existing policies
DROP POLICY IF EXISTS "Allow anonymous inserts" ON leads;
DROP POLICY IF EXISTS "Allow anonymous selects" ON leads;

-- Re-enable RLS
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Create new policies with public access
CREATE POLICY "public_insert"
ON leads FOR INSERT
TO public
WITH CHECK (true);

CREATE POLICY "public_select"
ON leads FOR SELECT
TO public
USING (true);