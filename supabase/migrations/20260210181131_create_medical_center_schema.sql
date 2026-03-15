/*
  # Medical Center Database Schema

  ## Overview
  This migration creates the complete database structure for a single medical center
  with four treating physicians, including services, blog posts, testimonials, and center information.

  ## New Tables

  ### 1. `doctors`
  Stores information about the four treating physicians
  - `id` (uuid, primary key)
  - `name` (text, required) - Full name of the doctor
  - `specialty` (text, required) - Medical specialty
  - `bio` (text, required) - Professional biography
  - `photo_url` (text) - URL to professional photo
  - `display_order` (integer, default 0) - Order for display on website
  - `education` (text) - Educational background
  - `years_experience` (integer) - Years of medical practice
  - `created_at` (timestamptz, default now())
  - `updated_at` (timestamptz, default now())

  ### 2. `service_categories`
  Main service categories (e.g., Laser Hair Removal, Injections)
  - `id` (uuid, primary key)
  - `name` (text, required) - Category name
  - `slug` (text, unique, required) - URL-friendly identifier
  - `description` (text) - Category description
  - `image_url` (text) - Representative image
  - `display_order` (integer, default 0)
  - `created_at` (timestamptz, default now())

  ### 3. `services`
  Individual services within categories
  - `id` (uuid, primary key)
  - `category_id` (uuid, foreign key to service_categories)
  - `name` (text, required) - Service name
  - `slug` (text, unique, required) - URL-friendly identifier
  - `description` (text, required) - Detailed description
  - `image_url` (text) - Service image
  - `price_from` (numeric) - Starting price
  - `duration_minutes` (integer) - Treatment duration
  - `display_order` (integer, default 0)
  - `created_at` (timestamptz, default now())
  - `updated_at` (timestamptz, default now())

  ### 4. `blog_posts`
  Scientific articles and medical information
  - `id` (uuid, primary key)
  - `title` (text, required) - Article title
  - `slug` (text, unique, required) - URL-friendly identifier
  - `excerpt` (text) - Brief summary
  - `content` (text, required) - Full article content (supports markdown)
  - `featured_image_url` (text) - Main article image
  - `author_id` (uuid, foreign key to doctors) - Doctor who authored the article
  - `published` (boolean, default false) - Publication status
  - `published_at` (timestamptz) - Publication date
  - `meta_title` (text) - SEO meta title
  - `meta_description` (text) - SEO meta description
  - `created_at` (timestamptz, default now())
  - `updated_at` (timestamptz, default now())

  ### 5. `testimonials`
  Patient reviews and testimonials
  - `id` (uuid, primary key)
  - `patient_name` (text, required) - Patient name (or initials)
  - `rating` (integer, required) - Rating 1-5
  - `comment` (text, required) - Testimonial text
  - `service_id` (uuid, foreign key to services) - Related service
  - `approved` (boolean, default false) - Approval status
  - `created_at` (timestamptz, default now())

  ### 6. `center_info`
  Single medical center information
  - `id` (uuid, primary key)
  - `name` (text, required) - Center name
  - `address` (text, required) - Full address
  - `city` (text, required)
  - `postal_code` (text, required)
  - `phone` (text, required) - Contact phone
  - `email` (text, required) - Contact email
  - `latitude` (numeric) - GPS latitude
  - `longitude` (numeric) - GPS longitude
  - `opening_hours` (jsonb) - Structured opening hours
  - `doctolib_link` (text) - Booking platform URL
  - `general_description` (text) - About the center
  - `google_maps_embed_url` (text) - Embedded map URL
  - `updated_at` (timestamptz, default now())

  ## Security
  - Enable RLS on all tables
  - Public read access for published content
  - Authenticated write access for content management
*/

-- Create doctors table
CREATE TABLE IF NOT EXISTS doctors (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  specialty text NOT NULL,
  bio text NOT NULL,
  photo_url text,
  display_order integer DEFAULT 0,
  education text,
  years_experience integer,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create service_categories table
CREATE TABLE IF NOT EXISTS service_categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text UNIQUE NOT NULL,
  description text,
  image_url text,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Create services table
CREATE TABLE IF NOT EXISTS services (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id uuid REFERENCES service_categories(id) ON DELETE CASCADE,
  name text NOT NULL,
  slug text UNIQUE NOT NULL,
  description text NOT NULL,
  image_url text,
  price_from numeric,
  duration_minutes integer,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create blog_posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  excerpt text,
  content text NOT NULL,
  featured_image_url text,
  author_id uuid REFERENCES doctors(id) ON DELETE SET NULL,
  published boolean DEFAULT false,
  published_at timestamptz,
  meta_title text,
  meta_description text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create testimonials table
CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_name text NOT NULL,
  rating integer NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comment text NOT NULL,
  service_id uuid REFERENCES services(id) ON DELETE SET NULL,
  approved boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- Create center_info table (single row)
CREATE TABLE IF NOT EXISTS center_info (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  address text NOT NULL,
  city text NOT NULL,
  postal_code text NOT NULL,
  phone text NOT NULL,
  email text NOT NULL,
  latitude numeric,
  longitude numeric,
  opening_hours jsonb,
  doctolib_link text,
  general_description text,
  google_maps_embed_url text,
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE doctors ENABLE ROW LEVEL SECURITY;
ALTER TABLE service_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE center_info ENABLE ROW LEVEL SECURITY;

-- RLS Policies for public read access
CREATE POLICY "Public can view all doctors"
  ON doctors FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Public can view all service categories"
  ON service_categories FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Public can view all services"
  ON services FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Public can view published blog posts"
  ON blog_posts FOR SELECT
  TO public
  USING (published = true);

CREATE POLICY "Public can view approved testimonials"
  ON testimonials FOR SELECT
  TO public
  USING (approved = true);

CREATE POLICY "Public can view center info"
  ON center_info FOR SELECT
  TO public
  USING (true);

-- RLS Policies for authenticated users (content management)
CREATE POLICY "Authenticated users can manage doctors"
  ON doctors FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can manage service categories"
  ON service_categories FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can manage services"
  ON services FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can manage blog posts"
  ON blog_posts FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can manage testimonials"
  ON testimonials FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can manage center info"
  ON center_info FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_services_category_id ON services(category_id);
CREATE INDEX IF NOT EXISTS idx_blog_posts_author_id ON blog_posts(author_id);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts(published);
CREATE INDEX IF NOT EXISTS idx_testimonials_service_id ON testimonials(service_id);
CREATE INDEX IF NOT EXISTS idx_testimonials_approved ON testimonials(approved);