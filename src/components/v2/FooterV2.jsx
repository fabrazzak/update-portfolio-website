'use client'
import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaFacebook, FaHeart } from 'react-icons/fa'
import { SiUpwork, SiNextdotjs } from 'react-icons/si'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const navSections = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Testimonials', id: 'testimonial' },
  { label: 'Contact', id: 'contact' },
]

const socialLinks = [
  { href: 'https://www.linkedin.com/in/abdur--razzak/', Icon: FaLinkedin, label: 'LinkedIn', color: '#0A66C2' },
  { href: 'https://github.com/fabrazzak', Icon: FaGithub, label: 'GitHub', color: '#e6e6e6' },
  { href: 'https://www.upwork.com/freelancers/~01cbcc4bb65e1d54ef', Icon: SiUpwork, label: 'Upwork', color: '#14a800' },
  { href: 'https://wa.me/8801703906980', Icon: AiOutlineWhatsApp, label: 'WhatsApp', color: '#25D366' },
  { href: 'https://facebook.com', Icon: FaFacebook, label: 'Facebook', color: '#1877F2' },
]

export default function FooterV2() {
  const router = useRouter()
  const year = new Date().getFullYear()

  const scrollTo = (e, id) => {
    e.preventDefault()
    if (window.location.pathname !== '/') { router.push(`/#${id}`); return }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <footer className="relative bg-[#050510] border-t overflow-hidden"
      style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
      {/* Top gradient line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.5) 30%, rgba(217,70,239,0.5) 70%, transparent)' }}
      />

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)' }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-14 pb-8">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-5">
              <p className="text-2xl font-black text-white leading-tight">
                Abdur{' '}
                <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                  Razzak
                </span>
              </p>
              <p className="text-gray-500 text-xs font-semibold tracking-wide mt-1">Full-Stack Web Developer</p>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-xs">
              Transforming ideas into fast, beautiful web applications. Available for freelance projects and full-time roles.
            </p>
            {/* Social icons */}
            <div className="flex gap-2.5">
              {socialLinks.map(({ href, Icon, label, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-gray-500 transition-all duration-200"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
                  whileHover={{ scale: 1.12, color, borderColor: `${color}40`, backgroundColor: `${color}12` }}
                  whileTap={{ scale: 0.92 }}
                >
                  <Icon className="text-sm" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-5">Quick Links</p>
            <ul className="space-y-3">
              {navSections.map(({ label, id }) => (
                <li key={id}>
                  <a
                    href={`/#${id}`}
                    onClick={(e) => scrollTo(e, id)}
                    className="text-gray-500 hover:text-violet-400 text-sm transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-violet-600/0 group-hover:bg-violet-500 transition-all duration-200" />
                    {label}
                  </a>
                </li>
              ))}
              <li>
                <Link
                  href="/blog"
                  className="text-gray-500 hover:text-violet-400 text-sm transition-colors duration-200 flex items-center gap-1.5 group"
                >
                  <span className="w-1 h-1 rounded-full bg-violet-600/0 group-hover:bg-violet-500 transition-all duration-200" />
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-5">Services</p>
            <ul className="space-y-3">
              {[
                'React & Next.js Development',
                'Full-Stack MERN Applications',
                'WordPress Customization',
                'REST API Development',
                'UI/UX Implementation',
                'Performance Optimization',
              ].map((service) => (
                <li key={service}>
                  <span className="text-gray-500 text-sm flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-violet-600/50 flex-shrink-0" />
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA strip */}
        <motion.div
          className="rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 mb-10"
          style={{
            background: 'linear-gradient(135deg, rgba(124,58,237,0.15) 0%, rgba(217,70,239,0.08) 100%)',
            border: '1px solid rgba(139,92,246,0.2)',
          }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <p className="text-white font-bold text-base">Have a project in mind?</p>
            <p className="text-gray-400 text-sm mt-0.5">Let's build something amazing together.</p>
          </div>
          <motion.a
            href="#contact"
            onClick={(e) => scrollTo(e, 'contact')}
            className="flex-shrink-0 px-6 py-2.5 rounded-full text-sm font-semibold text-white"
            style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)', boxShadow: '0 0 20px rgba(139,92,246,0.3)' }}
            whileHover={{ scale: 1.04, boxShadow: '0 0 30px rgba(139,92,246,0.5)' }}
            whileTap={{ scale: 0.97 }}
          >
            Get in Touch →
          </motion.a>
        </motion.div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
        >
          <p className="text-gray-600 text-xs">
            © {year} Abdur Razzak. All rights reserved.
          </p>
          <p className="text-gray-700 text-xs flex items-center gap-1.5">
            Built with <FaHeart className="text-violet-500/70 text-[10px]" /> using
            <SiNextdotjs className="text-white/30 text-xs" /> Next.js & Tailwind CSS
          </p>
          <p className="text-gray-700 text-xs">
            <a href="mailto:abrazzak6980@gmail.com" className="hover:text-violet-400 transition-colors">abrazzak6980@gmail.com</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
