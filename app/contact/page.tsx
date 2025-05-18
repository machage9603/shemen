import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1 flex items-center justify-center p-4 md:p-8 bg-gradient-to-br from-blue-400 to-blue-500">
        <div className="w-full max-w-4xl bg-white shadow-lg rounded-sm overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Left side - Contact Information */}
            <div className="bg-blue-900 text-white p-8 md:w-2/5">
              <h2 className="text-2xl font-light mb-8">Contact Us</h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <LocationIcon />
                  <div>
                    <p>23, Avenue de Paris</p>
                    <p>75012 Paris</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <EmailIcon />
                  <p>hello@example.com</p>
                </div>

                <div className="flex items-center space-x-3">
                  <UserIcon />
                  <p>username</p>
                </div>

                <div className="flex items-center space-x-3">
                  <PhoneIcon />
                  <p>+33 6 19 53 01 44</p>
                </div>
              </div>

              {/* Social Media Icons */}
              <div className="flex space-x-4 mt-12">
                <Link href="#" className="text-white hover:text-blue-200 transition-colors">
                  <InstagramIcon />
                </Link>
                <Link href="#" className="text-white hover:text-blue-200 transition-colors">
                  <XIcon />
                </Link>
                <Link href="#" className="text-white hover:text-blue-200 transition-colors">
                  <LinkedInIcon />
                </Link>
              </div>
            </div>

            {/* Right side - Contact Form */}
            <div className="p-8 md:w-3/5">
              <h2 className="text-2xl font-light text-blue-900 mb-2">Get in Touch</h2>
              <p className="text-gray-500 mb-8">Feel free to drop us a line below!</p>

              <form className="space-y-6">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="h-12 border rounded-md focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none"
                />

                <Textarea
                  placeholder="Type your message here..."
                  className="min-h-[120px] border rounded-md focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none"
                />

                <div className="flex justify-start">
                  <Button className="px-8 py-2 bg-blue-400 hover:bg-blue-500 text-white rounded-full transition-colors">
                    SEND
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>

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

// Icons
function LocationIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  )
}

function UserIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

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
