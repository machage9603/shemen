import Navbar from "@/components/navbar"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1 flex items-center justify-center p-4 md:p-8 bg-gradient-to-br from-blue-400 to-blue-500">
        <div className="w-full max-w-4xl bg-white shadow-lg rounded-sm overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Left side - About Information */}
            <div className="bg-blue-900 text-white p-8 md:w-2/5">
              <h2 className="text-2xl font-light mb-8">About Us</h2>

              <div className="space-y-6">
                <p className="leading-relaxed">
                  We are a forward-thinking company dedicated to creating innovative solutions that make a difference.
                </p>

                <p className="leading-relaxed">
                  Founded in 2023, our mission is to combine cutting-edge technology with thoughtful design to deliver
                  exceptional experiences.
                </p>

                <p className="leading-relaxed">
                  Our team of experts brings diverse perspectives and skills to every project we undertake.
                </p>
              </div>

              {/* Values */}
              <div className="mt-8">
                <h3 className="text-lg font-light mb-4">Our Values</h3>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckIcon />
                    <span>Innovation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckIcon />
                    <span>Quality</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckIcon />
                    <span>Integrity</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckIcon />
                    <span>Collaboration</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right side - Company Story */}
            <div className="p-8 md:w-3/5">
              <h2 className="text-2xl font-light text-blue-900 mb-2">Our Story</h2>
              <p className="text-gray-500 mb-8">Learn more about our journey and vision</p>

              <div className="space-y-6 text-gray-700">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu
                  sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.
                </p>

                <p>
                  Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse
                  dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit
                  odio.
                </p>

                <p>
                  Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a
                  porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum
                  faucibus eget in metus.
                </p>

                <div className="pt-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-blue-500 hover:text-blue-700 transition-colors"
                  >
                    <span>Get in touch with us</span>
                    <ArrowRightIcon />
                  </Link>
                </div>
              </div>
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
function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

function ArrowRightIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-1">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
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
