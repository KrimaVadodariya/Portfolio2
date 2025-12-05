'use client'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <div className="logo">JR.</div>
          <ul className="nav-links">
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#services">SERVICES</a></li>
            <li><a href="#portfolio">PORTFOLIO</a></li>
            <li><a href="#contact">CONTACT</a></li>
          </ul>
          <button 
            className="mobile-menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </nav>
        {isMenuOpen && (
          <div className="mobile-menu">
            <a href="#about" onClick={() => setIsMenuOpen(false)}>ABOUT</a>
            <a href="#services" onClick={() => setIsMenuOpen(false)}>SERVICES</a>
            <a href="#portfolio" onClick={() => setIsMenuOpen(false)}>PORTFOLIO</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>CONTACT</a>
          </div>
        )}
      </div>
    </header>
  )
}