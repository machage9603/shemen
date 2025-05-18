import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import Navbar from "@/components/navbar"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        {/* Main Content */}
        <div className="w-full max-w-md space-y-12 text-center">
          <h1 className="text-5xl font-light tracking-wider">COMING SOON</h1>

          <p className="text-xl font-light tracking-wide">BE THE FIRST TO KNOW WHEN WE LIVE</p>

          <div className="space-y-8">
            {/* Horizontal input fields */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <Input
                type="text"
                placeholder="Enter Name"
                className="h-12 border-b border-t-0 border-l-0 border-r-0 rounded-none shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-black focus:outline-none flex-1"
              />

              <Input
                type="email"
                placeholder="Enter your Email"
                className="h-12 border-b border-t-0 border-l-0 border-r-0 rounded-none shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-black focus:outline-none flex-1"
              />
            </div>

            <Button className="w-full h-12 mt-8 border border-black bg-transparent text-black hover:bg-black hover:text-white transition-colors rounded-none font-light text-lg">
              SIGN UP
            </Button>
          </div>
        </div>
      </main>

      {/* Footer with Social Media Icons */}
      <footer className="py-6 border-t">
        <div className="container flex justify-center">
          <div className="flex space-x-8">
            <Link href="#" className="text-gray-600 hover:text-black transition-colors">
              <LinkedInIcon />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="#" className="text-gray-600 hover:text-black transition-colors">
              <XIcon />
              <span className="sr-only">X (Twitter)</span>
            </Link>
            <Link href="#" className="text-gray-600 hover:text-black transition-colors">
              <InstagramIcon />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Minimal social media icons
function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}
