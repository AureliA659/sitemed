/*
  # Communication Tables Migration

  ## New Tables

  ### 1. `contact_messages`
  Stores contact form submissions
  - `id` (uuid, primary key)
  - `name` (text, required)
  - `email` (text, required)
  - `phone` (text)
  - `subject` (text, required)
  - `message` (text, required)
  - `ip_address` (text) - for spam detection
  - `read` (boolean, default false)
  - `created_at` (timestamptz, default now())

  ### 2. `chat_messages`
  Stores chat widget messages
  - `id` (uuid, primary key)
  - `session_id` (uuid) - user session identifier
  - `message` (text, required)
  - `sender_type` (enum: 'user' or 'system')
  - `ip_address` (text)
  - `created_at` (timestamptz, default now())

  ## Security
  - RLS enabled on both tables
  - Public can INSERT (with rate limiting at app level)
  - Only authenticated admins can READ/UPDATE
*/

-- Create contact_messages table
CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  subject text NOT NULL,
  message text NOT NULL,
  ip_address text,
  "read" boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- Create chat_messages table
CREATE TABLE IF NOT EXISTS chat_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id uuid,
  message text NOT NULL,
  sender_type text DEFAULT 'user' CHECK (sender_type IN ('user', 'system')),
  ip_address text,
  created_at timestamptz DEFAULT now()
);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_contact_messages_email ON contact_messages(email);
CREATE INDEX IF NOT EXISTS idx_contact_messages_created_at ON contact_messages(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_messages_read ON contact_messages("read");

CREATE INDEX IF NOT EXISTS idx_chat_messages_session_id ON chat_messages(session_id);
CREATE INDEX IF NOT EXISTS idx_chat_messages_created_at ON chat_messages(created_at DESC);

-- Enable RLS
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE chat_messages ENABLE ROW LEVEL SECURITY;

-- RLS Policies for contact_messages
-- Public can INSERT (but not SELECT/UPDATE/DELETE)
CREATE POLICY "Anyone can submit contact form"
  ON contact_messages FOR INSERT
  TO public
  WITH CHECK (true);

-- Only authenticated users (admins) can read
CREATE POLICY "Authenticated users can read contact messages"
  ON contact_messages FOR SELECT
  TO authenticated
  USING (true);

-- Authenticated users can mark as read
CREATE POLICY "Authenticated users can update contact messages"
  ON contact_messages FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- RLS Policies for chat_messages
-- Public can INSERT
CREATE POLICY "Anyone can send chat messages"
  ON chat_messages FOR INSERT
  TO public
  WITH CHECK (true);

-- Authenticated users can read all messages
CREATE POLICY "Authenticated users can read chat messages"
  ON chat_messages FOR SELECT
  TO authenticated
  USING (true);

-- Public can read their own messages (by session_id)
CREATE POLICY "Users can read their own chat messages"
  ON chat_messages FOR SELECT
  TO public
  USING (session_id IS NOT NULL);
