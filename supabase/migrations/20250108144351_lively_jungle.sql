/*
  # Create leads table with updated RLS policies

  1. New Tables
    - `leads`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `email` (text, required)
      - `business_niche` (text, required)
      - `created_at` (timestamp with timezone)

  2. Security
    - Enable RLS on `leads` table
    - Add policies to allow anonymous inserts and selects
*/

CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  business_niche text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts
CREATE POLICY "Allow anonymous inserts" ON leads
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow anonymous selects
CREATE POLICY "Allow anonymous selects" ON leads
  FOR SELECT
  TO anon
  USING (true);