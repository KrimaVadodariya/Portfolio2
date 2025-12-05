import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'

export const metadata = {
  title: 'Business Solutions',
  description: 'Professional business solutions for your success',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}