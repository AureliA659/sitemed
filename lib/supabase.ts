import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  bio: string;
  photo_url?: string;
  display_order: number;
  education?: string;
  years_experience?: number;
  created_at: string;
  updated_at: string;
}

export interface ServiceCategory {
  id: string;
  name: string;
  slug: string;
  description?: string;
  image_url?: string;
  display_order: number;
  created_at: string;
}

export interface Service {
  id: string;
  category_id: string;
  name: string;
  slug: string;
  description: string;
  image_url?: string;
  price_from?: number;
  duration_minutes?: number;
  display_order: number;
  created_at: string;
  updated_at: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  content: string;
  featured_image_url?: string;
  author_id?: string;
  published: boolean;
  published_at?: string;
  meta_title?: string;
  meta_description?: string;
  created_at: string;
  updated_at: string;
  author?: Doctor;
}

export interface Testimonial {
  id: string;
  patient_name: string;
  rating: number;
  comment: string;
  service_id?: string;
  approved: boolean;
  created_at: string;
  service?: Service;
}

export interface CenterInfo {
  id: string;
  name: string;
  address: string;
  city: string;
  postal_code: string;
  phone: string;
  email: string;
  latitude?: number;
  longitude?: number;
  opening_hours?: Record<string, string>;
  doctolib_link?: string;
  general_description?: string;
  google_maps_embed_url?: string;
  updated_at: string;
}
