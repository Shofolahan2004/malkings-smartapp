import { createClient } from '@supabase/supabase-js'

// Get keys from environment variables (stored on Vercel)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

// Test function
async function testConnection() {
  const { data, error } = await supabase.from('test_table').select('*')
  if (error) {
    console.error('❌ Connection failed:', error.message)
  } else {
    console.log('✅ Connected successfully! Data:', data)
  }
}

testConnection()
