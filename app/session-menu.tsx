'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { supabaseBrowser } from '@/lib/supabase/browser'

export default function SessionMenu() {
  const supabase = supabaseBrowser()
  const [email, setEmail] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let isMounted = true

    async function loadUser() {
      const { data } = await supabase.auth.getUser()

      if (!isMounted) return
      setEmail(data.user?.email ?? null)
      setLoading(false)
    }

    loadUser()

    return () => {
      isMounted = false
    }
  }, [supabase])

  async function handleLogout() {
    await supabase.auth.signOut()
    window.location.href = '/login'
  }

  if (loading) {
    return (
      <span style={{ float: 'right', opacity: 0.7 }}>
        Loading…
      </span>
    )
  }

  return (
    <span style={{ float: 'right' }}>
      {email ? (
        <>
          <span style={{ marginRight: 8 }}>{email}</span>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <Link href="/login">Login</Link>
          {' '}|{' '}
          <Link href="/signup">Signup</Link>
        </>
      )}
    </span>
  )
}