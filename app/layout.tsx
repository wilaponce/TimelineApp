
import SessionMenu from './session-menu'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'system-ui' }}>
        <header style={{ padding: 16, borderBottom: '1px solid #ccc' }}>
          <strong>Timeline App</strong>
          <SessionMenu />
        </header>
        {children}
      </body>
    </html>
  )
}
