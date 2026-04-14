// app/(protected)/layout.tsx
import { redirect } from 'next/navigation'
import { supabaseServer } from '@/lib/supabase/server'

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = await supabaseServer()
  const { data, error } = await supabase.auth.getSession()

  if (error || !data.session) {
    redirect('/login')
  }

  return <>{children}</>
}