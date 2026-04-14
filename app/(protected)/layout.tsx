import { redirect } from 'next/navigation'
import { supabaseServer } from '@/lib/supabase/server'
import type { ReactNode } from 'react'

export default async function ProtectedLayout({
  children,
}: {
  children: ReactNode
}) {
  const supabase = await supabaseServer()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  return <>{children}</>
}