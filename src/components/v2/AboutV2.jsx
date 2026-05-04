'use client'
import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FaCode, FaDatabase, FaWordpress, FaRocket, FaUsers, FaTrophy } from 'react-icons/fa'
import { SiUpwork } from 'react-icons/si'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  }),
}

function AnimatedNumber({ end, suffix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const animated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !animated.current) {
        animated.current = true
        let start = 0
        const step = (end / 1200) * 16
        const timer = setInterval(() => {
          start += step
          if (start >= end) { setCount(end); clearInterval(timer) }
          else setCount(Math.floor(start))
        }, 16)
      }
    }, { threshold: 0.6 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [end])

  return <span ref={ref}>{count}{suffix}</span>
}

const timeline = [
  { year: '2022', event: 'Started freelancing on Upwork' },
  { year: '2023', event: 'Achieved Top Rated badge' },
  { year: '2024', event: '50+ projects delivered across MERN & WordPress' },
  { year: '2025', event: 'Expanding into SaaS & product development' },
]

export default function AboutV2() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-28 bg-[#050510] scroll-mt-20"
    >
      {/* Background accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-48 w-96 h-96 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.14) 0%, transparent 70%)' }} />
        <div className="absolute bottom-1/4 -left-48 w-96 h-96 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(217,70,239,0.1) 0%, transparent 70%)' }} />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(139,92,246,0.8) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-6xl">
        {/* Section header */}
        <motion.div
          className="mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-violet-400 text-xs font-bold uppercase tracking-[0.22em] mb-3">Who I Am</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white">
            About{' '}
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Bio card — 2 cols */}
          <motion.div
            className="sm:col-span-2 p-8 rounded-3xl relative overflow-hidden group cursor-default"
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.07)',
            }}
            variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }}
            whileHover={{ borderColor: 'rgba(139,92,246,0.3)', boxShadow: '0 0 40px rgba(139,92,246,0.08)' }}
            transition={{ duration: 0.3 }}
          >
            {/* Shimmer on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
              style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.04) 0%, transparent 50%, rgba(217,70,239,0.04) 100%)' }} />
            <div className="w-11 h-11 rounded-2xl flex items-center justify-center mb-6"
              style={{ background: 'rgba(124,58,237,0.18)', border: '1px solid rgba(139,92,246,0.25)' }}>
              <FaRocket className="text-violet-400 text-base" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Full-Stack Web Developer</h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              I'm Abdur Razzak — a passionate Full-Stack Web Developer and Top Rated Freelancer at Upwork who
              transforms complex business requirements into user-centric digital solutions. I specialize in
              React.js, Next.js, TypeScript, Tailwind CSS, Node.js, Express.js and MongoDB, while also
              offering deep expertise in WordPress Customization. My mission: build secure, fast, and
              impactful web applications that drive growth and delight users.
            </p>
          </motion.div>

          {/* Years stat */}
          <motion.div
            className="p-8 rounded-3xl relative overflow-hidden group cursor-default"
            style={{
              background: 'linear-gradient(135deg, rgba(124,58,237,0.14) 0%, rgba(217,70,239,0.06) 100%)',
              border: '1px solid rgba(139,92,246,0.2)',
            }}
            variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}
            whileHover={{ borderColor: 'rgba(139,92,246,0.45)', boxShadow: '0 0 40px rgba(139,92,246,0.12)' }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-gray-600 text-xs font-bold uppercase tracking-widest mb-auto">Experience</p>
            <div className="mt-6">
              <p className="text-7xl font-black text-white leading-none tracking-tight">
                <AnimatedNumber end={3} suffix="+" />
              </p>
              <p className="text-gray-500 text-sm mt-3 font-medium">Years building for the web</p>
            </div>
          </motion.div>

          {/* Projects stat */}
          <motion.div
            className="p-8 rounded-3xl relative overflow-hidden group cursor-default"
            style={{
              background: 'linear-gradient(135deg, rgba(217,70,239,0.14) 0%, rgba(244,114,182,0.06) 100%)',
              border: '1px solid rgba(217,70,239,0.2)',
            }}
            variants={fadeUp} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }}
            whileHover={{ borderColor: 'rgba(217,70,239,0.45)', boxShadow: '0 0 40px rgba(217,70,239,0.12)' }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-gray-600 text-xs font-bold uppercase tracking-widest">Projects</p>
            <div className="mt-6">
              <p className="text-7xl font-black text-white leading-none tracking-tight">
                <AnimatedNumber end={50} suffix="+" />
              </p>
              <p className="text-gray-500 text-sm mt-3 font-medium">Delivered across all categories</p>
            </div>
          </motion.div>

          {/* Upwork rating */}
          <motion.div
            className="p-8 rounded-3xl relative overflow-hidden group cursor-default"
            style={{
              background: 'linear-gradient(135deg, rgba(20,168,0,0.1) 0%, rgba(20,168,0,0.03) 100%)',
              border: '1px solid rgba(20,168,0,0.2)',
            }}
            variants={fadeUp} custom={3} initial="hidden" whileInView="visible" viewport={{ once: true }}
            whileHover={{ borderColor: 'rgba(20,168,0,0.45)', boxShadow: '0 0 40px rgba(20,168,0,0.1)' }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <SiUpwork className="text-green-400 text-lg" />
              <p className="text-gray-600 text-xs font-bold uppercase tracking-widest">Upwork</p>
            </div>
            <p className="text-5xl font-black text-white leading-none">5.0 ★</p>
            <p className="text-gray-500 text-sm mt-3 font-medium">Top Rated — All-time perfect score</p>
          </motion.div>

          {/* Clean code card */}
          <motion.div
            className="p-8 rounded-3xl relative overflow-hidden group cursor-default"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
            variants={fadeUp} custom={4} initial="hidden" whileInView="visible" viewport={{ once: true }}
            whileHover={{ borderColor: 'rgba(139,92,246,0.3)', boxShadow: '0 0 30px rgba(139,92,246,0.08)' }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-11 h-11 rounded-2xl flex items-center justify-center mb-5"
              style={{ background: 'rgba(217,70,239,0.15)', border: '1px solid rgba(217,70,239,0.25)' }}>
              <FaCode className="text-fuchsia-400 text-base" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">Clean Code</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              I value clean code, efficient design patterns, and seamless experiences from backend logic to frontend polish.
            </p>
          </motion.div>

          {/* Collaboration card */}
          <motion.div
            className="p-8 rounded-3xl relative overflow-hidden group cursor-default"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
            variants={fadeUp} custom={5} initial="hidden" whileInView="visible" viewport={{ once: true }}
            whileHover={{ borderColor: 'rgba(139,92,246,0.3)', boxShadow: '0 0 30px rgba(139,92,246,0.08)' }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-11 h-11 rounded-2xl flex items-center justify-center mb-5"
              style={{ background: 'rgba(124,58,237,0.15)', border: '1px solid rgba(139,92,246,0.25)' }}>
              <FaUsers className="text-violet-400 text-base" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">Collaboration</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Clear communication, agile development, and long-term partnerships — whether startup or scaling business.
            </p>
          </motion.div>

          {/* Journey / Timeline — full width */}
          <motion.div
            className="sm:col-span-2 lg:col-span-3 p-8 rounded-3xl relative overflow-hidden"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
            variants={fadeUp} custom={6} initial="hidden" whileInView="visible" viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 rounded-xl flex items-center justify-center"
                style={{ background: 'rgba(124,58,237,0.2)', border: '1px solid rgba(139,92,246,0.3)' }}>
                <FaTrophy className="text-violet-400 text-xs" />
              </div>
              <h3 className="text-base font-bold text-white">Career Journey</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {timeline.map(({ year, event }, i) => (
                <motion.div
                  key={year}
                  className="relative"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-violet-500 flex-shrink-0" />
                    <span className="text-violet-400 text-xs font-black tracking-wide">{year}</span>
                  </div>
                  <p className="text-gray-400 text-sm leading-snug pl-4"
                    style={{ borderLeft: '1px solid rgba(139,92,246,0.2)' }}>
                    {event}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Specializations — full width */}
          <motion.div
            className="sm:col-span-2 lg:col-span-3 p-8 rounded-3xl relative overflow-hidden"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
            variants={fadeUp} custom={7} initial="hidden" whileInView="visible" viewport={{ once: true }}
          >
            <h3 className="text-base font-bold text-white mb-6">Core Specializations</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { icon: FaCode, title: 'Modern Web Dev', sub: 'Next.js · TypeScript · React · Tailwind', color: 'text-violet-400', bg: 'rgba(124,58,237,0.12)', border: 'rgba(139,92,246,0.2)' },
                { icon: FaDatabase, title: 'Backend & APIs', sub: 'MongoDB · REST · Node.js · Express', color: 'text-fuchsia-400', bg: 'rgba(217,70,239,0.12)', border: 'rgba(217,70,239,0.2)' },
                { icon: FaWordpress, title: 'WordPress', sub: 'Theme & Plugin Customization · WooCommerce', color: 'text-blue-400', bg: 'rgba(59,130,246,0.12)', border: 'rgba(59,130,246,0.2)' },
              ].map(({ icon: Icon, title, sub, color, bg, border }) => (
                <motion.div
                  key={title}
                  className="flex items-start gap-4 p-5 rounded-2xl transition-all duration-300"
                  style={{ background: bg, border: `1px solid ${border}` }}
                  whileHover={{ scale: 1.02, borderColor: border.replace('0.2', '0.45') }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: 'rgba(255,255,255,0.06)' }}>
                    <Icon className={`${color} text-base`} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white mb-1">{title}</p>
                    <p className="text-xs text-gray-500 leading-snug">{sub}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
