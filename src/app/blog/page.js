'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { FaClock, FaArrowRight, FaSearch } from 'react-icons/fa'
import { HiSparkles } from 'react-icons/hi'

const blogPosts = [
  {
    id: 1,
    slug: 'nextjs-14-app-router-guide',
    title: 'Next.js 14 App Router: A Complete Developer Guide',
    excerpt: 'Explore the power of Next.js 14 App Router, server components, streaming, and how to build production-ready applications with the latest features.',
    category: 'Frontend',
    tags: ['Next.js', 'React', 'TypeScript'],
    readTime: '8 min',
    date: 'Apr 28, 2025',
    featured: true,
    gradient: 'from-violet-600/30 via-fuchsia-600/20 to-transparent',
    accentColor: '#a78bfa',
    icon: '⚡',
  },
  {
    id: 2,
    slug: 'building-scalable-rest-apis-nodejs',
    title: 'Building Scalable REST APIs with Node.js & Express',
    excerpt: 'Learn how to architect and implement production-grade REST APIs with authentication, rate limiting, caching, and performance optimization techniques.',
    category: 'Backend',
    tags: ['Node.js', 'Express', 'MongoDB'],
    readTime: '10 min',
    date: 'Apr 15, 2025',
    gradient: 'from-emerald-600/30 via-teal-600/20 to-transparent',
    accentColor: '#34d399',
    icon: '🛠️',
  },
  {
    id: 3,
    slug: 'wordpress-vs-custom-development',
    title: 'WordPress vs Custom Development: When to Choose What',
    excerpt: 'A deep dive into when WordPress is the right tool and when you need a fully custom-built solution — making the right call can save months of work.',
    category: 'WordPress',
    tags: ['WordPress', 'Web Dev', 'Strategy'],
    readTime: '6 min',
    date: 'Mar 30, 2025',
    gradient: 'from-blue-600/30 via-cyan-600/20 to-transparent',
    accentColor: '#60a5fa',
    icon: '🌐',
  },
  {
    id: 4,
    slug: 'mastering-tailwind-css',
    title: 'Mastering Tailwind CSS for Production Applications',
    excerpt: 'Advanced patterns, component architecture, and performance techniques for shipping great UIs with Tailwind CSS in real-world projects at scale.',
    category: 'Frontend',
    tags: ['Tailwind CSS', 'CSS', 'Design Systems'],
    readTime: '7 min',
    date: 'Mar 18, 2025',
    gradient: 'from-sky-600/30 via-indigo-600/20 to-transparent',
    accentColor: '#38bdf8',
    icon: '🎨',
  },
  {
    id: 5,
    slug: 'mongodb-performance-optimization',
    title: 'MongoDB Performance Optimization: 10 Expert Tips',
    excerpt: 'From indexing strategies to aggregation pipelines — practical techniques to make your MongoDB queries lightning fast at scale with real benchmarks.',
    category: 'Backend',
    tags: ['MongoDB', 'Database', 'Performance'],
    readTime: '9 min',
    date: 'Feb 28, 2025',
    gradient: 'from-green-600/30 via-emerald-600/20 to-transparent',
    accentColor: '#4ade80',
    icon: '🔥',
  },
  {
    id: 6,
    slug: 'typescript-best-practices-react',
    title: 'TypeScript Best Practices for React Projects in 2025',
    excerpt: 'Strict typing, generics, discriminated unions, and real-world patterns to write safer, more maintainable React applications with TypeScript.',
    category: 'Frontend',
    tags: ['TypeScript', 'React', 'Best Practices'],
    readTime: '11 min',
    date: 'Feb 10, 2025',
    gradient: 'from-blue-600/30 via-violet-600/20 to-transparent',
    accentColor: '#818cf8',
    icon: '🧩',
  },
  {
    id: 7,
    slug: 'freelancing-tips-upwork-developers',
    title: 'How I Became a Top Rated Developer on Upwork',
    excerpt: 'My personal journey from zero reviews to Top Rated on Upwork — practical strategies for developers looking to build a thriving freelance career.',
    category: 'Career',
    tags: ['Freelancing', 'Upwork', 'Career'],
    readTime: '6 min',
    date: 'Jan 20, 2025',
    gradient: 'from-amber-600/30 via-orange-600/20 to-transparent',
    accentColor: '#fbbf24',
    icon: '💼',
  },
  {
    id: 8,
    slug: 'framer-motion-advanced-animations',
    title: 'Advanced Animations with Framer Motion in Next.js',
    excerpt: 'Orchestrated animations, page transitions, shared layout animations, and scroll-driven effects to make your Next.js apps feel alive and delightful.',
    category: 'Frontend',
    tags: ['Framer Motion', 'Animation', 'UX'],
    readTime: '8 min',
    date: 'Jan 5, 2025',
    gradient: 'from-pink-600/30 via-rose-600/20 to-transparent',
    accentColor: '#f472b6',
    icon: '✨',
  },
]

const categories = ['All', 'Frontend', 'Backend', 'WordPress', 'Career']

const categoryColors = {
  Frontend: { color: '#a78bfa', bg: 'rgba(167,139,250,0.12)', border: 'rgba(167,139,250,0.25)' },
  Backend: { color: '#34d399', bg: 'rgba(52,211,153,0.12)', border: 'rgba(52,211,153,0.25)' },
  WordPress: { color: '#60a5fa', bg: 'rgba(96,165,250,0.12)', border: 'rgba(96,165,250,0.25)' },
  Career: { color: '#fbbf24', bg: 'rgba(251,191,36,0.12)', border: 'rgba(251,191,36,0.25)' },
}

function CategoryBadge({ category }) {
  const cfg = categoryColors[category] || { color: '#9ca3af', bg: 'rgba(255,255,255,0.06)', border: 'rgba(255,255,255,0.1)' }
  return (
    <span
      className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
      style={{ color: cfg.color, background: cfg.bg, border: `1px solid ${cfg.border}` }}
    >
      {category}
    </span>
  )
}

function FeaturedPost({ post }) {
  return (
    <motion.div
      className="relative rounded-3xl overflow-hidden group cursor-pointer mb-6"
      style={{
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.08)',
        minHeight: '320px',
      }}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ borderColor: 'rgba(139,92,246,0.4)' }}
    >
      {/* Gradient bg */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-60`}
      />
      <div className="absolute inset-0"
        style={{ background: 'radial-gradient(circle at 80% 50%, rgba(139,92,246,0.1) 0%, transparent 60%)' }} />

      {/* Content */}
      <div className="relative z-10 p-8 sm:p-12 flex flex-col justify-end h-full min-h-[320px]">
        <div className="flex items-center gap-3 mb-5">
          <span className="text-3xl">{post.icon}</span>
          <div
            className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold"
            style={{ background: 'rgba(139,92,246,0.2)', border: '1px solid rgba(139,92,246,0.4)', color: '#c4b5fd' }}
          >
            <HiSparkles className="text-[10px]" />
            Featured Post
          </div>
          <CategoryBadge category={post.category} />
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-4 leading-tight max-w-2xl">
          {post.title}
        </h2>
        <p className="text-gray-300 text-sm leading-relaxed max-w-xl mb-6">{post.excerpt}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-5 text-gray-500 text-xs">
            <span className="flex items-center gap-1.5">
              <FaClock className="text-[10px]" /> {post.readTime} read
            </span>
            <span>{post.date}</span>
          </div>
          <motion.div
            className="flex items-center gap-2 text-sm font-semibold"
            style={{ color: post.accentColor }}
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
          >
            Read Article <FaArrowRight className="text-xs" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

function PostCard({ post, index }) {
  return (
    <motion.div
      className="flex flex-col rounded-2xl overflow-hidden group cursor-pointer h-full"
      style={{
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.07)',
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ delay: index * 0.05, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, borderColor: 'rgba(139,92,246,0.3)', boxShadow: '0 16px 40px rgba(0,0,0,0.4)' }}
    >
      {/* Card header / color strip */}
      <div
        className={`relative h-36 flex items-center justify-center bg-gradient-to-br ${post.gradient}`}
        style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}
      >
        <span className="text-5xl">{post.icon}</span>
        <div className="absolute top-3 right-3">
          <CategoryBadge category={post.category} />
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-3 text-gray-600 text-xs">
          <span className="flex items-center gap-1"><FaClock className="text-[9px]" /> {post.readTime}</span>
          <span>·</span>
          <span>{post.date}</span>
        </div>

        <h3 className="text-white font-bold text-base leading-snug mb-3 group-hover:text-violet-300 transition-colors duration-200">
          {post.title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1 line-clamp-3">{post.excerpt}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-medium px-2 py-0.5 rounded-full text-gray-500"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              #{tag}
            </span>
          ))}
        </div>

        <motion.div
          className="flex items-center gap-1.5 text-xs font-semibold mt-auto"
          style={{ color: post.accentColor }}
          whileHover={{ x: 3 }}
          transition={{ duration: 0.18 }}
        >
          Read Article <FaArrowRight className="text-[9px]" />
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [search, setSearch] = useState('')
  const [searchFocused, setSearchFocused] = useState(false)

  const featured = blogPosts.find((p) => p.featured)
  const filtered = blogPosts.filter((p) => {
    const matchCat = activeCategory === 'All' || p.category === activeCategory
    const matchSearch = !search ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(search.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()))
    return matchCat && matchSearch
  })
  const regularPosts = filtered.filter((p) => !p.featured || activeCategory !== 'All' || search)
  const showFeatured = activeCategory === 'All' && !search && featured

  return (
    <div className="min-h-screen bg-[#050510]">
      {/* ── Hero ── */}
      <div className="relative overflow-hidden pt-32 pb-20 px-6">
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute -top-40 -left-20 w-[500px] h-[500px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 70%)' }}
            animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(217,70,239,0.12) 0%, transparent 70%)' }}
            animate={{ x: [0, -25, 0], y: [0, 30, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'linear-gradient(rgba(139,92,246,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.04) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />
          <div
            className="absolute inset-0"
            style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, transparent 40%, #050510 100%)' }}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div
                className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest"
                style={{ background: 'rgba(124,58,237,0.15)', border: '1px solid rgba(139,92,246,0.3)', color: '#c4b5fd' }}
              >
                Developer Blog
              </div>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-5 leading-[1.04]">
              Insights &{' '}
              <span
                className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent"
                style={{ filter: 'drop-shadow(0 0 30px rgba(167,139,250,0.4))' }}
              >
                Articles
              </span>
            </h1>
            <p className="text-gray-400 text-lg max-w-xl leading-relaxed mb-10">
              Deep dives into web development, freelancing lessons, and technical guides from my experience building 50+ projects.
            </p>

            {/* Search bar */}
            <div className="relative max-w-md">
              <FaSearch
                className="absolute left-4 top-1/2 -translate-y-1/2 text-xs"
                style={{ color: searchFocused ? '#a78bfa' : '#4b5563' }}
              />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-3.5 rounded-2xl text-white text-sm outline-none placeholder-gray-600"
                style={{
                  background: searchFocused ? 'rgba(124,58,237,0.08)' : 'rgba(255,255,255,0.04)',
                  border: `1px solid ${searchFocused ? 'rgba(139,92,246,0.5)' : 'rgba(255,255,255,0.08)'}`,
                  boxShadow: searchFocused ? '0 0 0 3px rgba(139,92,246,0.1)' : 'none',
                  transition: 'all 0.25s',
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="max-w-6xl mx-auto px-6 pb-28">
        {/* Stats + Category filter row */}
        <motion.div
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 mb-10"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Category tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const cfg = categoryColors[cat]
              const isActive = activeCategory === cat
              return (
                <motion.button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200"
                  style={
                    isActive
                      ? {
                          background: cfg ? cfg.bg : 'rgba(124,58,237,0.15)',
                          border: `1px solid ${cfg ? cfg.border : 'rgba(139,92,246,0.4)'}`,
                          color: cfg ? cfg.color : '#c4b5fd',
                        }
                      : {
                          background: 'rgba(255,255,255,0.04)',
                          border: '1px solid rgba(255,255,255,0.08)',
                          color: '#6b7280',
                        }
                  }
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {cat}
                </motion.button>
              )
            })}
          </div>

          <p className="text-gray-600 text-sm flex-shrink-0">
            {filtered.length} article{filtered.length !== 1 ? 's' : ''}
            {activeCategory !== 'All' ? ` in ${activeCategory}` : ''}
          </p>
        </motion.div>

        {/* Featured post */}
        <AnimatePresence mode="wait">
          {showFeatured && <FeaturedPost post={featured} key="featured" />}
        </AnimatePresence>

        {/* Posts grid */}
        <AnimatePresence mode="popLayout">
          {regularPosts.length > 0 ? (
            <motion.div
              key={activeCategory + search}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
              layout
            >
              {regularPosts.map((post, i) => (
                <PostCard key={post.id} post={post} index={i} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              className="flex flex-col items-center justify-center py-24 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <p className="text-5xl mb-4">🔍</p>
              <p className="text-white font-bold text-xl mb-2">No articles found</p>
              <p className="text-gray-500 text-sm">Try a different search or category.</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Newsletter CTA */}
        <motion.div
          className="mt-20 rounded-3xl p-8 sm:p-12 relative overflow-hidden text-center"
          style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.07)',
          }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          {/* Gradient decorations */}
          <div className="absolute top-0 left-0 right-0 h-px"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.5) 50%, transparent)' }} />
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 70%)' }} />
          </div>

          <div className="relative z-10">
            <p className="text-violet-400 text-xs font-bold uppercase tracking-[0.22em] mb-3">Stay Updated</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Want more{' '}
              <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                insights?
              </span>
            </h2>
            <p className="text-gray-400 text-base max-w-lg mx-auto mb-8 leading-relaxed">
              I write about React, Next.js, Node.js, WordPress, and freelancing. Connect with me to get notified when new articles go live.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
              <a
                href="https://www.linkedin.com/in/abdur--razzak/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <motion.button
                  className="w-full px-6 py-3.5 rounded-xl text-sm font-semibold text-white"
                  style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)', boxShadow: '0 0 24px rgba(139,92,246,0.3)' }}
                  whileHover={{ scale: 1.03, boxShadow: '0 0 36px rgba(139,92,246,0.5)' }}
                  whileTap={{ scale: 0.97 }}
                >
                  Follow on LinkedIn
                </motion.button>
              </a>
              <Link href="/#contact">
                <motion.button
                  className="w-full px-6 py-3.5 rounded-xl text-sm font-semibold text-violet-300"
                  style={{ border: '1px solid rgba(139,92,246,0.35)' }}
                  whileHover={{ scale: 1.03, backgroundColor: 'rgba(139,92,246,0.08)', color: '#fff' }}
                  whileTap={{ scale: 0.97 }}
                >
                  Get in Touch
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
