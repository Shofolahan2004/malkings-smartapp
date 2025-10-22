import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

export default async function handler(req, res) {
  try {
    const { data, error } = await supabase.from('test_table').select('*')

    if (error) {
      console.error('❌ Connection failed:', error.message)
      return res.status(500).json({ success: false, error: error.message })
    }

    console.log('✅ Connected successfully!')
    return res.status(200).json({ success: true, data })
  } catch (err) {
    console.error('❌ Unexpected error:', err)
    return res.status(500).json({ success: false, error: err.message })
  }
}
