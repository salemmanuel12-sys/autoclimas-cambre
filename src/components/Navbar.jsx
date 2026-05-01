import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar({ logoSrc }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Contacto', href: '#contacto' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-2xl border-b-4 border-gradient-to-r from-primary-500 via-accent-400 to-warm-500">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-4 shrink-0">
          <img
            src={logoSrc}
            alt="Logo Autoclimas Cambre"
            className="h-16 w-auto drop-shadow-lg hover:drop-shadow-2xl transition-all"
          />
          <div className="hidden sm:block border-l-2 border-primary-300 pl-4">
            <h2 className="font-display font-bold text-primary-900 text-xl leading-tight">
              Autoclimas
            </h2>
            <p className="text-sm font-semibold text-accent-600">Cambre</p>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 flex-1 justify-center">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-primary-700 font-semibold hover:text-accent-600 transition-colors relative group text-lg"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-accent-400 to-warm-500 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex gap-3">
          <a
            href="https://wa.me/528332470486"
            target="_blank"
            rel="noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg transition-all hover:shadow-lg hover:-translate-y-1"
          >
            WhatsApp
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 hover:bg-primary-100 rounded-lg transition"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 text-primary-900" />
          ) : (
            <Menu className="w-6 h-6 text-primary-900" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t-2 border-primary-200 bg-primary-50">
          <div className="px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-3 text-primary-700 hover:text-accent-600 font-bold text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/528332470486"
              target="_blank"
              rel="noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-lg block text-center transition-all"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
