
import { redirect } from 'next/navigation'
import { supabaseUser } from '@/lib/supabase/server'

export default async function ProtectedLayout({ children }: { children: React.ReactNode }) {
  const supabase = supabaseUser()
  const { data } = await supabase.auth.getSession()
  if (!data.session) redirect('/login')
  return <>{children}</>
}
