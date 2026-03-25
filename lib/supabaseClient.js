import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  // Graceful fallback for build time / env not set
  console.warn("Missing Supabase environment variables in supabaseClient.js");
}

export const supabase = createClient(
  supabaseUrl || "",
  supabaseKey || ""
);
