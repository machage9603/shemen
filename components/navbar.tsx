import Link from "next/link"

export default function Navbar() {
  return (
    <header className="w-full border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo on the left */}
          <div className="flex items-center">
            <Link href="/" className="text-xl font-light">
              LOGO
            </Link>
          </div>

          {/* Navigation links on the right */}
          <nav className="flex space-x-8">
            <Link href="/about" className="text-sm font-light tracking-wider hover:text-black transition-colors">
              ABOUT
            </Link>
            <Link href="/contact" className="text-sm font-light tracking-wider hover:text-black transition-colors">
              CONTACT
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
