import type { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'Rahul Pagar — Senior Data Analyst',
  description: 'Senior Data Analyst with 5+ years of experience in ML, BI, and data engineering across enterprise environments.',
  keywords: ['data analyst', 'machine learning', 'power bi', 'python', 'sql', 'dublin'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
