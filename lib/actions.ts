"use server";

import { createClient } from "@supabase/supabase-js";

// Initialize the private client here to have better access control
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function submitContactForm(formData: { name: string; email: string; message: string }) {
  // Simple validation
  if (!formData.name || !formData.email || !formData.message) {
      return { success: false, error: "All fields are required" };
  }

  // Basic spam protection: Verify email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.email)) {
    return { success: false, error: "Invalid email format" };
  }

  try {
    const { error } = await supabase.from("contact_messages").insert([formData]);
    if (error) throw error;
    return { success: true };
  } catch (err) {
    console.error("Submission error:", err);
    return { success: false, error: "Failed to send message" };
  }
}

export async function getHeroData() {
  try {
    const { data, error } = await supabase.from('hero_content').select('*').single();
    if (error) throw error;
    return data;
  } catch (err) {
    console.error("Fetch hero error:", err);
    return null;
  }
}

export async function getStatusUpdates() {
  try {
    const { data, error } = await supabase.from('status_updates').select('*').order('order_index', { ascending: true });
    if (error) throw error;
    return data;
  } catch (err) {
    console.error("Fetch status updates error:", err);
    return [];
  }
}

export async function getSkills() {
    try {
        const { data, error } = await supabase.from('skills').select('*');
        if (error) throw error;
        return data;
    } catch (err) {
        console.error("Fetch skills error:", err);
        return [];
    }
}

export async function getProjects() {
    try {
        const { data, error } = await supabase.from('projects').select('*').order('id', { ascending: false });
        if (error) throw error;
        return data;
    } catch (err) {
        console.error("Fetch projects error:", err);
        return [];
    }
}

export async function getTimelineData() {
    try {
        const { data, error } = await supabase.from('timeline_items').select('*').order('order_id', { ascending: false });
        if (error) throw error;
        return data;
    } catch (err) {
        console.error("Fetch timeline error:", err);
        return [];
    }
}

export async function getVisitorCount() {
    try {
        const { count, error } = await supabase
            .from('visitor_logs')
            .select('*', { count: 'exact', head: true });
        
        if (error) throw error;
        return count || 0;
    } catch (err) {
        console.error("Fetch visitor count error:", err);
        return 0;
    }
}

export async function recordVisit() {
    try {
        const { error } = await supabase
            .from('visitor_logs')
            .insert([{}]);
        
        if (error) throw error;
        return true;
    } catch (err) {
        console.error("Record visit error:", err);
        return false;
    }
}
