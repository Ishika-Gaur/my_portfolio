import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ishika Gaur — Frontend Developer',
  description: 'BTech CS Student & Frontend Developer specializing in React and Next.js. Building beautiful, performant web experiences.',
  keywords: ['Frontend Developer', 'React', 'Next.js', 'Web Development', 'Ishika Gaur'],
  authors: [{ name: 'Ishika Gaur' }],
  openGraph: {
    title: 'Ishika Gaur — Frontend Developer',
    description: 'BTech CS Student & Frontend Developer specializing in React and Next.js.',
    type: 'website',
  },
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
