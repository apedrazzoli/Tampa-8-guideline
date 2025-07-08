import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Fun and The City - Tampa Bay Guide for 18+",
  description: "Your guide to Tampa Bay's best 18+ spots, activities, and experiences. No fake ID required.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
        <footer className="bg-gray-900 text-white py-12 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-teal-400 mb-4">Fun and The City</h3>
            <p className="text-gray-400 mb-6">Discovering Tampa Bay's best 18+ experiences, one adventure at a time.</p>
            <div className="flex justify-center space-x-6 text-sm text-gray-400">
              <span>© 2024 Fun and The City</span>
              <span>•</span>
              <span>Made with ❤️ in Tampa</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
