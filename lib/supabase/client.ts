import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://wjnobtbejcdipnlfvgnx.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indqbm9idGJlamNkaXBubGZ2Z254Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA1NjkxNjIsImV4cCI6MjA0NjE0NTE2Mn0.qWcjZW-AGJ-OzKY694D6Ojldw3i2Aa7TfayH9OomK3g';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);