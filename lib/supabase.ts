import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Property = {
  id: string;
  title: string;
  price: string;
  type: string;
  location: string;
  image_url: string;
  description: string | null;
  bedrooms: number | null;
  bathrooms: number | null;
  area_sqft: number | null;
  featured: boolean;
  created_at: string;
};
