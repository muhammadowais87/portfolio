import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://duzjomvbjzydinffwfqc.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR1empvbXZianp5ZGluZmZ3ZnFjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgwMjAzMDYsImV4cCI6MjA3MzU5NjMwNn0.oQ9IYmpIVAnswTZnKpwSlEP8NRXbDSY0BZdQh_uG5ME";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);