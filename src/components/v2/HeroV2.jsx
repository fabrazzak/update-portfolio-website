'use client'
import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiUpwork } from 'react-icons/si'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import { HiArrowDown } from 'react-icons/hi'

const techChips = [
  { label: 'React', color: '#61DAFB', bg: 'rgba(97,218,251,0.12)', x: -100, y: -110 },
  { label: 'Next.js', color: '#ffffff', bg: 'rgba(255,255,255,0.07)', x: 115, y: -70 },
  { label: 'Node.js', color: '#6dba5f', bg: 'rgba(51,153,51,0.12)', x: 125, y: 75 },
  { label: 'MongoDB', color: '#47A248', bg: 'rgba(71,162,72,0.12)', x: -105, y: 95 },
  { label: 'TypeScript', color: '#5b9bd5', bg: 'rgba(49,120,198,0.12)', x: -130, y: 10 },
]

const roles = ['Full-Stack Developer', 'MERN Stack Expert', 'WordPress Specialist', 'Top Rated Freelancer']

function Typewriter({ roles }) {
  const [text, setText] = useState('')
  const [roleIdx, setRoleIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const role = roles[roleIdx]
    let timeout
    if (!deleting) {
      timeout = setTimeout(() => {
        setText(role.substring(0, text.length + 1))
        if (text.length + 1 === role.length) setTimeout(() => setDeleting(true), 1800)
      }, 80)
    } else {
      timeout = setTimeout(() => {
        setText(role.substring(0, text.length - 1))
        if (text.length === 0) {
          setDeleting(false)
          setRoleIdx((prev) => (prev + 1) % roles.length)
        }
      }, 40)
    }
    return () => clearTimeout(timeout)
  }, [text, deleting, roleIdx, roles])

  return (
    <span className="text-violet-400 font-semibold">
      {text}
      <motion.span
        className="inline-block w-[2px] h-6 bg-violet-400 ml-0.5 align-middle"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.6, repeat: Infinity }}
      />
    </span>
  )
}

function Counter({ end, suffix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          let start = 0
          const step = (end / 1400) * 16
          const timer = setInterval(() => {
            start += step
            if (start >= end) { setCount(end); clearInterval(timer) }
            else setCount(Math.floor(start))
          }, 16)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [end])

  return <span ref={ref}>{count}{suffix}</span>
}

export default function HeroV2() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 lg:px-12 overflow-hidden bg-[#050510]"
    >
      {/* ── Background ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-80 -left-40 w-[700px] h-[700px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.22) 0%, transparent 70%)' }}
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/3 -right-40 w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(217,70,239,0.16) 0%, transparent 70%)' }}
          animate={{ x: [0, -40, 0], y: [0, -50, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
        <motion.div
          className="absolute -bottom-40 left-1/3 w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.16) 0%, transparent 70%)' }}
          animate={{ x: [0, 25, 0], y: [0, -30, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />

        {/* Grid overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(139,92,246,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.06) 1px, transparent 1px)`,
            backgroundSize: '64px 64px',
          }}
        />

        {/* Radial fade to dark at edges */}
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, #050510 100%)' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center pt-28 pb-16 lg:pt-0 lg:pb-0">
        {/* ── Left: Text ── */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Available badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8"
            style={{ background: 'rgba(124,58,237,0.12)', border: '1px solid rgba(139,92,246,0.28)' }}
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="text-violet-300 text-xs font-semibold tracking-wide">Open to Work · Full-time & Freelance</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.04] mb-4"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.75, ease: 'easeOut' }}
          >
            Hi, I'm
            <br />
            <span
              className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent"
              style={{ filter: 'drop-shadow(0 0 40px rgba(167,139,250,0.45))' }}
            >
              Abdur Razzak
            </span>
          </motion.h1>

          {/* Typewriter */}
          <motion.div
            className="text-xl sm:text-2xl text-gray-300 mb-7 h-9"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <Typewriter roles={roles} />
          </motion.div>

          {/* Bio */}
          <motion.p
            className="text-gray-400 max-w-lg mb-10 leading-relaxed text-[15px]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Transforming complex ideas into fast, beautiful, and scalable web applications. Specialized in React, Next.js, Node.js &amp; WordPress — delivering pixel-perfect results on time, every time.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            className="flex flex-wrap gap-3 mb-10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <motion.a
              href="/resume.pdf"
              download="Abdur_Razzak_Resume.pdf"
              className="relative px-7 py-3.5 text-white font-semibold rounded-full text-sm overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7, #ec4899)', boxShadow: '0 0 24px rgba(139,92,246,0.35)' }}
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(167,139,250,0.55)' }}
              whileTap={{ scale: 0.97 }}
            >
              <motion.span
                className="absolute inset-0 bg-white/20"
                style={{ skewX: '-15deg' }}
                initial={{ x: '-120%' }}
                whileHover={{ x: '220%' }}
                transition={{ duration: 0.5 }}
              />
              <span className="relative z-10">Download CV</span>
            </motion.a>
            <motion.a
              href="#projects"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="px-7 py-3.5 font-semibold rounded-full text-sm text-violet-300 transition-all duration-300"
              style={{ border: '1px solid rgba(139,92,246,0.35)' }}
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(139,92,246,0.1)', color: '#fff', borderColor: 'rgba(139,92,246,0.6)' }}
              whileTap={{ scale: 0.97 }}
            >
              View Projects ↗
            </motion.a>
          </motion.div>

          {/* Social icons */}
          <motion.div
            className="flex items-center gap-2.5 mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            {[
              { href: 'https://www.linkedin.com/in/abdur--razzak/', Icon: FaLinkedin, label: 'LinkedIn', color: '#0A66C2' },
              { href: 'https://github.com/fabrazzak', Icon: FaGithub, label: 'GitHub', color: '#e6e6e6' },
              { href: 'https://www.upwork.com/freelancers/~01cbcc4bb65e1d54ef', Icon: SiUpwork, label: 'Upwork', color: '#14a800' },
              { href: 'https://wa.me/8801703906980', Icon: AiOutlineWhatsApp, label: 'WhatsApp', color: '#25D366' },
            ].map(({ href, Icon, label, color }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-full flex items-center justify-center text-gray-400 transition-all duration-200"
                style={{ border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)' }}
                whileHover={{ scale: 1.15, color, borderColor: `${color}55`, backgroundColor: `${color}12` }}
                whileTap={{ scale: 0.92 }}
              >
                <Icon className="text-sm" />
              </motion.a>
            ))}
            <div className="w-px h-4 bg-white/10 mx-1" />
            <span className="text-gray-600 text-xs font-medium">Find me online</span>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="flex gap-8 pt-8"
            style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            {[
              { end: 50, suffix: '+', label: 'Projects Done' },
              { end: 5, suffix: ' ★', label: 'Upwork Rating' },
              { end: 3, suffix: '+', label: 'Years Exp.' },
            ].map(({ end, suffix, label }) => (
              <div key={label}>
                <p className="text-3xl font-black text-white leading-tight">
                  <Counter end={end} suffix={suffix} />
                </p>
                <p className="text-xs text-gray-500 mt-1 font-medium">{label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* ── Right: Profile ── */}
        <motion.div
          className="hidden lg:flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative w-[380px] h-[380px]">
            {/* Outer conic ring */}
            <motion.div
              className="absolute inset-[-36px] rounded-full"
              style={{
                background: 'conic-gradient(from 0deg, transparent 0%, rgba(139,92,246,0.7) 20%, transparent 40%, rgba(217,70,239,0.6) 65%, transparent 80%, rgba(99,102,241,0.5) 90%, transparent 100%)',
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 9, repeat: Infinity, ease: 'linear' }}
            />
            <div className="absolute inset-[-34px] rounded-full bg-[#050510]" />

            {/* Middle ring */}
            <motion.div
              className="absolute inset-[-18px] rounded-full"
              style={{
                background: 'conic-gradient(from 180deg, transparent 0%, rgba(99,102,241,0.6) 30%, transparent 55%, rgba(167,139,250,0.5) 80%, transparent 100%)',
              }}
              animate={{ rotate: -360 }}
              transition={{ duration: 7, repeat: Infinity, ease: 'linear' }}
            />
            <div className="absolute inset-[-16px] rounded-full bg-[#050510]" />

            {/* Inner glow ring */}
            <div
              className="absolute inset-[-6px] rounded-full"
              style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.4), rgba(217,70,239,0.3))' }}
            />
            <div className="absolute inset-[-4px] rounded-full bg-[#050510]" />

            {/* Profile image */}
            <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl">
              <img
                src="/my-profile.jpg"
                alt="Abdur Razzak"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-violet-900/35 to-transparent" />
            </div>

            {/* Floating tech chips */}
            {techChips.map((chip, i) => (
              <motion.div
                key={chip.label}
                className="absolute px-3 py-1.5 rounded-full text-xs font-semibold pointer-events-none"
                style={{
                  left: `calc(50% + ${chip.x}px)`,
                  top: `calc(50% + ${chip.y}px)`,
                  transform: 'translate(-50%, -50%)',
                  background: chip.bg,
                  border: `1px solid ${chip.color}35`,
                  color: chip.color,
                  backdropFilter: 'blur(10px)',
                  boxShadow: `0 0 12px ${chip.color}20`,
                }}
                animate={{ y: [0, -9, 0], rotate: [-1.5, 1.5, -1.5] }}
                transition={{ duration: 3 + i * 0.6, repeat: Infinity, ease: 'easeInOut', delay: i * 0.35 }}
              >
                {chip.label}
              </motion.div>
            ))}

            {/* Badge: Upwork */}
            <motion.div
              className="absolute -bottom-4 -right-10 rounded-2xl px-4 py-2.5"
              style={{
                background: 'rgba(8,8,22,0.95)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(139,92,246,0.3)',
                boxShadow: '0 0 24px rgba(139,92,246,0.18), inset 0 1px 0 rgba(255,255,255,0.05)',
              }}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <p className="text-[10px] text-gray-500 font-medium">Upwork Status</p>
              <p className="text-sm font-bold text-violet-300">Top Rated ⭐</p>
            </motion.div>

            {/* Badge: Stack */}
            <motion.div
              className="absolute -top-2 -left-10 rounded-2xl px-4 py-2.5"
              style={{
                background: 'rgba(8,8,22,0.95)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(217,70,239,0.3)',
                boxShadow: '0 0 24px rgba(217,70,239,0.15), inset 0 1px 0 rgba(255,255,255,0.05)',
              }}
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }}
            >
              <p className="text-[10px] text-gray-500 font-medium">Expert in</p>
              <p className="text-sm font-bold text-fuchsia-300">MERN Stack 🚀</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <motion.div
          animate={{ y: [0, 9, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-1.5"
        >
          <span className="text-[10px] text-gray-600 font-medium tracking-[0.2em] uppercase">Scroll</span>
          <HiArrowDown className="text-violet-500 text-sm" />
        </motion.div>
      </motion.div>
    </section>
  )
}
