import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.REACT_APP_SUPABASE_PROJECT_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_PROJECT_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);
