import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

export default async function handler(req, res) {
  const { data, error } = await supabase.from('test').select('*')

  if (error) {
    return res.status(500).json({ success: false, error: error.message })
  }

  return res.status(200).json({ success: true, data })
}
