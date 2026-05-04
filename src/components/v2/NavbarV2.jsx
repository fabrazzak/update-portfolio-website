'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaLinkedin, FaGithub, FaBars, FaTimes } from 'react-icons/fa'
import { SiUpwork } from 'react-icons/si'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'

const sectionLinks = ['Home', 'About', 'Skills', 'Projects', 'Testimonial', 'Contact']

export default function NavbarV2() {
  const [activeSection, setActiveSection] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  const isHome = pathname === '/'
  const isBlog = pathname?.startsWith('/blog')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!isHome) return
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActiveSection(e.target.id)),
      { rootMargin: '0px', threshold: 0.4 }
    )
    sectionLinks.forEach((link) => {
      const el = document.getElementById(link.toLowerCase())
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [isHome])

  const scrollTo = (e, id) => {
    e.preventDefault()
    setMenuOpen(false)
    if (!isHome) { router.push(`/#${id}`); return }
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setActiveSection(id)
    }
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-5 pointer-events-none">
        <motion.nav
          className={`pointer-events-auto hidden md:flex items-center gap-0.5 px-3 py-2 rounded-full border transition-all duration-500 ${
            scrolled
              ? 'bg-black/88 backdrop-blur-xl border-white/10 shadow-2xl shadow-black/60'
              : 'bg-black/50 backdrop-blur-md border-white/6'
          }`}
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {sectionLinks.map((link) => {
            const id = link.toLowerCase()
            const isActive = isHome && activeSection === id
            return (
              <a
                key={link}
                href={link === 'Home' ? '/' : `/#${id}`}
                onClick={(e) => scrollTo(e, id)}
                className={`relative px-3.5 py-1.5 text-sm font-medium rounded-full transition-colors duration-200 ${
                  isActive ? 'text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="v2-nav-pill"
                    className="absolute inset-0 bg-violet-600/28 border border-violet-500/35 rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{link}</span>
              </a>
            )
          })}

          {/* Blog link */}
          <Link
            href="/blog"
            className={`relative px-3.5 py-1.5 text-sm font-medium rounded-full transition-colors duration-200 ${
              isBlog ? 'text-white' : 'text-gray-400 hover:text-white'
            }`}
          >
            {isBlog && (
              <motion.span
                layoutId="v2-nav-pill"
                className="absolute inset-0 bg-violet-600/28 border border-violet-500/35 rounded-full"
                transition={{ type: 'spring', stiffness: 380, damping: 32 }}
              />
            )}
            <span className="relative z-10">Blog</span>
          </Link>

          <div className="w-px h-4 bg-white/10 mx-1.5" />

          {[
            { href: 'https://www.linkedin.com/in/abdur--razzak/', icon: FaLinkedin, label: 'LinkedIn' },
            { href: 'https://github.com/fabrazzak', icon: FaGithub, label: 'GitHub' },
            { href: 'https://www.upwork.com/freelancers/~01cbcc4bb65e1d54ef', icon: SiUpwork, label: 'Upwork' },
            { href: 'https://wa.me/8801703906980', icon: AiOutlineWhatsApp, label: 'WhatsApp' },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-1.5 text-gray-500 hover:text-violet-400 transition-colors duration-200"
            >
              <Icon className="text-sm" />
            </a>
          ))}
        </motion.nav>

        {/* Mobile hamburger */}
        <motion.button
          className="pointer-events-auto fixed top-5 right-4 md:hidden p-2 bg-black/75 backdrop-blur-md border border-white/10 rounded-full text-gray-300 hover:text-white transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {menuOpen ? <FaTimes size={16} /> : <FaBars size={16} />}
        </motion.button>
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-[#050510]/97 backdrop-blur-2xl flex flex-col items-center justify-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
          >
            <button
              className="absolute top-5 right-4 text-gray-500 hover:text-white transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              <FaTimes size={22} />
            </button>

            {/* Brand name in mobile menu */}
            <div className="mb-4">
              <p className="text-xs text-gray-600 font-medium uppercase tracking-[0.2em]">Abdur Razzak</p>
            </div>

            {sectionLinks.map((link, i) => (
              <motion.a
                key={link}
                href={`/#${link.toLowerCase()}`}
                onClick={(e) => scrollTo(e, link.toLowerCase())}
                className="text-2xl font-black text-gray-400 hover:text-violet-400 transition-colors duration-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                {link}
              </motion.a>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: sectionLinks.length * 0.06 }}
            >
              <Link
                href="/blog"
                onClick={() => setMenuOpen(false)}
                className="text-2xl font-black text-gray-400 hover:text-violet-400 transition-colors duration-200"
              >
                Blog
              </Link>
            </motion.div>

            <div className="flex items-center gap-5 pt-5 mt-2 border-t border-white/8 w-52 justify-center">
              {[
                { href: 'https://www.linkedin.com/in/abdur--razzak/', icon: FaLinkedin },
                { href: 'https://github.com/fabrazzak', icon: FaGithub },
                { href: 'https://www.upwork.com/freelancers/~01cbcc4bb65e1d54ef', icon: SiUpwork },
                { href: 'https://wa.me/8801703906980', icon: AiOutlineWhatsApp },
              ].map(({ href, icon: Icon }, i) => (
                <a key={i} href={href} target="_blank" rel="noopener noreferrer"
                  className="text-gray-500 hover:text-violet-400 transition-colors text-xl">
                  <Icon />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
