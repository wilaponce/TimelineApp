
'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { supabaseBrowser } from '@/lib/supabase/browser'

export default function SessionMenu() {
  const supabase = supabaseBrowser()
  const router = useRouter()
  const [email, setEmail] = useState<string | null>(null)

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setEmail(data.user?.email ?? null)
    })
  }, [])

  async function logout() {
    await supabase.auth.signOut()
    router.push('/login')
    router.refresh()
  }

  return (
    <span style={{ float: 'right' }}>
      {email ? (
        <>{email} <button onClick={logout}>Logout</button></>     ) : (
        <><Link href="/login">Login</Link> | <Link href="/signup">Signup</Link></>     )}
    </span>
  )
}
