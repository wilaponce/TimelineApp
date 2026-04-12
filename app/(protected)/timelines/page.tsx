
export default async function TimelinePage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/moments/verified`, { cache: 'no-store' })
  const moments = await res.json()

  return (
    <main style={{ padding: 24 }}>
      <h1>Verified Timeline</h1>
      <ul>
        {moments.map((m: any) => (
          <li key={m.id}><strong>{m.title}</strong> – score {m.verification_score}</li>
        ))}
      </ul>
    </main>
  )
}
