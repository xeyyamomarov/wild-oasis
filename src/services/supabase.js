import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://uxciuxbzobzsdxqfixbu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV4Y2l1eGJ6b2J6c2R4cWZpeGJ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIxMjY0MzIsImV4cCI6MjAyNzcwMjQzMn0._LN8k1l_9_yVb2859jR_xGeGY3qwZE9lDXSuEaXifkE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
