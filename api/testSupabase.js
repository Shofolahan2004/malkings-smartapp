import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

export default async function handler(req, res) {
  // Try to fetch all available tables in your public schema
  const { data: tables, error: schemaError } = await supabase
    .rpc('pg_tables') // will likely fail, so we’ll test another way if it does

  const { data, error } = await supabase.from('Test').select('*')

  return res.status(200).json({
    connected: !!supabaseUrl,
    schemaError: schemaError ? schemaError.message : null,
    tableData: data || null,
    tableError: error ? error.message : null,
  })
}