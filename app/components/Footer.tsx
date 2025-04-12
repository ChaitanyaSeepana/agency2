import Link from 'next/link'
import Image from 'next/image'

const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    className="hover:scale-110 transition-transform"
  >
    <path
      d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
      stroke="#00FF85"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16Z"
      stroke="#00FF85"
      strokeWidth="1.5"
    />
    <path
      d="M17.5 6.51L17.51 6.49889"
      stroke="#00FF85"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const LinkedInIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    className="hover:scale-110 transition-transform"
  >
    <path
      d="M21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8Z"
      stroke="#00FF85"
      strokeWidth="1.5"
    />
    <path
      d="M7 17V13.5V10"
      stroke="#00FF85"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11 17V13.75M11 10V13.75M11 13.75C11 10 17 10 17 13.75V17"
      stroke="#00FF85"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7 7.01L7.01 6.99889"
      stroke="#00FF85"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default function Footer() {
  return (
    <footer className="bg-[#0A1621] text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo and Copyright */}
          <div className="flex items-center mb-4 md:mb-0">
            <Image 
              src="/images/logo.png"
              alt="Ayhro Logo"
              width={50}
              height={50}
            />
            <span className="text-[#00FF85] ml-2 text-lg">ayhro</span>
            <span className="text-gray-400 ml-4 text-sm">© Copyright 2023, All right reserved</span>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            <Link href="/privacy" className="text-gray-400 hover:text-[#00FF85] transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-[#00FF85] transition-colors text-sm">
              Terms
            </Link>
            <Link href="/contact" className="text-gray-400 hover:text-[#00FF85] transition-colors text-sm">
              Get in Touch
            </Link>
            <div className="flex items-center space-x-3">
              <Link 
                href="https://www.linkedin.com/company/ayhro" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <LinkedInIcon />
              </Link>
              <Link 
                href="https://www.instagram.com/ayhro" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <InstagramIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 