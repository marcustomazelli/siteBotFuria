'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navigation = [
  { name: 'Sobre', href: '#sobre' },
  { name: 'Funcionalidades', href: '#funcionalidades' },
  { name: 'Como Usar', href: '#como-usar' },
  { name: 'Código', href: '#codigo' },
  { name: 'Contato', href: '#contato' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed w-full bg-dark/80 backdrop-blur-sm z-50 border-b border-dark-200">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="text-2xl font-bold text-primary">
            FURICO BOT
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-primary transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 text-gray-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
} 