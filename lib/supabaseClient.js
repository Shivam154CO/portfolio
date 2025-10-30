import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://zpcjcjqhhswcyaygtmxh.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpwY2pjanFoaHN3Y3lheWd0bXhoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjAyOTM0MDQsImV4cCI6MjA3NTg2OTQwNH0.dkVfgXIyg9dJvu8-DQRK7RN7tWR4zwPLeQa5b1HrojM";

export const supabase = createClient(supabaseUrl, supabaseKey);
