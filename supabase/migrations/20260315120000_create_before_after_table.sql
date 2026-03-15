-- Create before/after gallery table
CREATE TABLE before_after_gallery (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  service_type TEXT NOT NULL CHECK (service_type IN ('laser-hair-removal', 'injectable-treatments', 'skin-rejuvenation')),
  before_image_url TEXT NOT NULL,
  after_image_url TEXT NOT NULL,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- Enable RLS
ALTER TABLE before_after_gallery ENABLE ROW LEVEL SECURITY;

-- Public can read
CREATE POLICY "Public read before_after_gallery"
  ON before_after_gallery
  FOR SELECT
  USING (true);

-- Admin can insert/update/delete (for now, anyone can - change later for auth)
CREATE POLICY "Anyone can manage before_after_gallery"
  ON before_after_gallery
  FOR ALL
  USING (true)
  WITH CHECK (true);

-- Create storage bucket for before/after images
INSERT INTO storage.buckets (id, name, public)
VALUES ('before-after-gallery', 'before-after-gallery', true)
ON CONFLICT (id) DO NOTHING;

-- Allow public access to storage bucket
CREATE POLICY "Public read bucket"
  ON storage.objects
  FOR SELECT
  USING (bucket_id = 'before-after-gallery');

CREATE POLICY "Admin upload to bucket"
  ON storage.objects
  FOR INSERT
  WITH CHECK (bucket_id = 'before-after-gallery');

CREATE POLICY "Admin delete from bucket"
  ON storage.objects
  FOR DELETE
  USING (bucket_id = 'before-after-gallery');
