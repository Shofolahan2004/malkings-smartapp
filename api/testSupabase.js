import { createClient } from '@supabase/supabase-js'

// Get your Supabase credentials from environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

export default async function handler(req, res) {
  try {
    // Test the connection by selecting from an existing or empty table
    const { data, error } = await supabase.from('test').select('*')

    if (error) {
      console.error('Supabase error:', error.message)
      return res.status(500).json({ error: error.message })
    }

    res.status(200).json({ success: true, data })
  } catch (err) {
    console.error('Server error:', err.message)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}
