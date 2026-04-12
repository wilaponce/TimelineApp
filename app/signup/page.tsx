
'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabaseBrowser } from '@/lib/supabase/browser'

export default function SignupPage() {
  const supabase = supabaseBrowser()
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    await supabase.auth.signUp({ email, password })
    router.push('/login')
  }

  return (
    <form onSubmit={submit} style={{ padding: 24 }}>
      <h1>Signup</h1>
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <button>Signup</button>
    </form>
  )
}
