'use client'
import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { FaUpwork } from 'react-icons/fa6'
import Link from 'next/link'

const testimonials = [
  {
    id: 1,
    name: 'Jake Covington',
    role: 'Web Development Manager',
    content:
      'I hired Abdur for a Next.js project where I needed a website built from a Figma design. As a developer myself, I can confidently say he did a great job. Clean code, accurate implementation, and solid communication throughout. Highly recommend.',
    rating: 5,
    image: '/jake.jpeg',
    project: 'Next.js Web App',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Product Manager at InnovateX',
    content:
      "Abdur's expertise in the MERN stack transformed our web application. His ability to understand complex requirements and translate them into elegant solutions is remarkable. Highly recommended for any full-stack project!",
    rating: 5,
    image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/35af6a41332353.57a1ce913e889.jpg',
    project: 'MERN Stack Platform',
  },
  {
    id: 3,
    name: 'Arnaud Kuhlein',
    role: 'Founder & CEO — seoocean.ai',
    content:
      'It was great working with Abdur. He took an advanced class on CSS during our projects and is very qualified to do frontend work. Will definitely hire again.',
    rating: 5,
    image: '/arnad.jpeg',
    project: 'Frontend Development',
  },
  {
    id: 4,
    name: 'Khurram Yaqoob',
    role: 'CCTV Focus — Website Owner',
    content:
      'Abdur was a great guy to work with. He was very helpful, patient and understanding and always available no matter what time. I am currently on another job with him. Much recommended.',
    rating: 5,
    image: 'khurram.jpeg',
    project: 'WordPress Customization',
  },
  {
    id: 5,
    name: 'Lisa Thompson',
    role: 'Director at DigitalAgency',
    content:
      "Abdur's work on our React application was outstanding. He implemented complex features with clean, maintainable code and helped improve our overall architecture. A true professional.",
    rating: 5,
    image: '/karthik.jpeg',
    project: 'React Application',
  },
]

export default function TestimonialV2() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const [paused, setPaused] = useState(false)
  const intervalRef = useRef(null)

  const go = useCallback((idx) => {
    setDirection(idx > current ? 1 : -1)
    setCurrent(idx)
  }, [current])

  const prev = () => go((current - 1 + testimonials.length) % testimonials.length)
  const next = useCallback(() => {
    const nxt = (current + 1) % testimonials.length
    setDirection(1)
    setCurrent(nxt)
  }, [current])

  useEffect(() => {
    if (paused) return
    intervalRef.current = setInterval(next, 5000)
    return () => clearInterval(intervalRef.current)
  }, [paused, next])

  const t = testimonials[current]

  const variants = {
    enter: (dir) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
    exit: (dir) => ({ opacity: 0, x: dir > 0 ? -60 : 60, transition: { duration: 0.3 } }),
  }

  return (
    <section id="testimonial" className="relative py-28 bg-[#050510] scroll-mt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 70%)' }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <p className="text-violet-400 text-xs font-bold uppercase tracking-[0.22em] mb-3">Testimonials</p>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="text-4xl sm:text-5xl font-black text-white">
              Client{' '}
              <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                Reviews
              </span>
            </h2>
            <p className="text-gray-500 text-sm max-w-sm leading-relaxed">
              Don't just take my word for it — here's what clients say about working with me on Upwork.
            </p>
          </div>
        </motion.div>

        {/* Main carousel */}
        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            className="rounded-3xl p-8 sm:p-12 overflow-hidden relative"
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
              minHeight: '340px',
            }}
          >
            {/* Gradient accent */}
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.5) 50%, transparent)' }}
            />

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={t.id}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center"
              >
                {/* Avatar + info */}
                <div className="lg:col-span-2 flex flex-col items-start gap-5">
                  {/* Profile */}
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div
                        className="w-16 h-16 rounded-2xl overflow-hidden"
                        style={{ border: '2px solid rgba(139,92,246,0.35)', boxShadow: '0 0 20px rgba(139,92,246,0.2)' }}
                      >
                        <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                      </div>
                      {/* Verified badge */}
                      <div
                        className="absolute -bottom-1.5 -right-1.5 w-5 h-5 rounded-full flex items-center justify-center"
                        style={{ background: 'linear-gradient(135deg, #14a800, #0f8600)', boxShadow: '0 0 8px rgba(20,168,0,0.5)' }}
                      >
                        <FaUpwork className="text-white text-[7px]" />
                      </div>
                    </div>
                    <div>
                      <p className="text-white font-bold text-base leading-tight">{t.name}</p>
                      <p className="text-gray-500 text-xs mt-0.5">{t.role}</p>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={`text-sm ${i < t.rating ? 'text-yellow-400' : 'text-gray-700'}`} />
                    ))}
                  </div>

                  {/* Project tag */}
                  <div
                    className="px-3 py-1.5 rounded-full text-xs font-semibold"
                    style={{
                      background: 'rgba(124,58,237,0.12)',
                      border: '1px solid rgba(139,92,246,0.25)',
                      color: '#c4b5fd',
                    }}
                  >
                    {t.project}
                  </div>

                  {/* Upwork link */}
                  <Link
                    href="https://www.upwork.com/freelancers/~01cbcc4bb65e1d54ef"
                    target="_blank"
                    className="flex items-center gap-1.5 text-xs text-gray-600 hover:text-green-400 transition-colors"
                  >
                    <FaUpwork className="text-sm" />
                    View on Upwork
                  </Link>
                </div>

                {/* Quote */}
                <div className="lg:col-span-3">
                  <FaQuoteLeft className="text-violet-500/20 text-5xl mb-6" />
                  <p className="text-gray-200 text-lg leading-relaxed font-light italic">
                    "{t.content}"
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Nav arrows */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-3">
              <motion.button
                onClick={prev}
                className="w-11 h-11 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
                whileHover={{ scale: 1.08, borderColor: 'rgba(139,92,246,0.5)' }}
                whileTap={{ scale: 0.94 }}
              >
                <FaChevronLeft size={13} />
              </motion.button>
              <motion.button
                onClick={next}
                className="w-11 h-11 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
                whileHover={{ scale: 1.08, borderColor: 'rgba(139,92,246,0.5)' }}
                whileTap={{ scale: 0.94 }}
              >
                <FaChevronRight size={13} />
              </motion.button>
            </div>

            {/* Dot indicators */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  className="transition-all duration-300 rounded-full"
                  style={{
                    width: current === i ? '24px' : '8px',
                    height: '8px',
                    background: current === i ? 'linear-gradient(90deg, #7c3aed, #a855f7)' : 'rgba(255,255,255,0.15)',
                    boxShadow: current === i ? '0 0 10px rgba(139,92,246,0.5)' : 'none',
                  }}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            {/* Auto-play indicator */}
            <div className="flex items-center gap-2">
              <div
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: paused ? 'rgba(255,255,255,0.2)' : '#a78bfa', boxShadow: paused ? 'none' : '0 0 6px rgba(167,139,250,0.6)' }}
              />
              <span className="text-xs text-gray-600">{paused ? 'Paused' : 'Auto-playing'}</span>
            </div>
          </div>
        </div>

        {/* Thumbnail strip */}
        <div className="flex gap-3 mt-8 overflow-x-auto no-scrollbar pb-1">
          {testimonials.map((item, i) => (
            <motion.button
              key={item.id}
              onClick={() => go(i)}
              className="flex-shrink-0 flex items-center gap-2.5 px-4 py-2.5 rounded-2xl transition-all duration-200"
              style={
                current === i
                  ? { background: 'rgba(124,58,237,0.15)', border: '1px solid rgba(139,92,246,0.4)' }
                  : { background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }
              }
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <div className="w-7 h-7 rounded-full overflow-hidden flex-shrink-0"
                style={{ border: '1px solid rgba(139,92,246,0.3)' }}>
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <span className="text-xs font-medium whitespace-nowrap"
                style={{ color: current === i ? '#c4b5fd' : '#6b7280' }}>
                {item.name.split(' ')[0]}
              </span>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  )
}
