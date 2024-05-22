import './globals.css'
import { Metadata } from 'next'

export const metadata = {
  title: 'Nashon Angudha App',
  description: 'Nashon Angudha App Portfolio Website',
  other: {
    'theme-color': '#0d1117',
    "color-scheme": "dark only",
    "twitter:image": 'https://drive.google.com/file/d/1eUs36GGnos4g0YPL5KrGHazg6U_u38FQ/view?usp=drive_link',
    "twitter:card": "summary_large_image",
    "og:url": "jsmastery.pro",
    "og:image": 'https://drive.google.com/file/d/1eUs36GGnos4g0YPL5KrGHazg6U_u38FQ/view?usp=drive_link',
    "og:type": "website",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black-100 font-poppins">{children}</body>
    </html>
  )
}