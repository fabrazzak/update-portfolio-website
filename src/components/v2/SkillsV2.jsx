'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import {
  FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaWordpress, FaBootstrap, FaFigma,
} from 'react-icons/fa'
import {
  SiTypescript, SiMongodb, SiRedux, SiTailwindcss, SiNextdotjs, SiFirebase,
  SiAntdesign, SiShadcnui, SiFramer, SiGreensock, SiExpress, SiPostman,
} from 'react-icons/si'
import { FaLock } from 'react-icons/fa'

const technologies = [
  { name: 'React', Icon: FaReact, color: '#61DAFB' },
  { name: 'JavaScript', Icon: FaJs, color: '#F7DF1E' },
  { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
  { name: 'Next.js', Icon: SiNextdotjs, color: '#ffffff' },
  { name: 'Node.js', Icon: FaNodeJs, color: '#339933' },
  { name: 'MongoDB', Icon: SiMongodb, color: '#47A248' },
  { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Express.js', Icon: SiExpress, color: '#eeeeee' },
  { name: 'HTML5', Icon: FaHtml5, color: '#E34F26' },
  { name: 'CSS3', Icon: FaCss3Alt, color: '#1572B6' },
  { name: 'Redux', Icon: SiRedux, color: '#764ABC' },
  { name: 'ShadCN', Icon: SiShadcnui, color: '#ffffff' },
  { name: 'Ant Design', Icon: SiAntdesign, color: '#0170FE' },
  { name: 'Bootstrap', Icon: FaBootstrap, color: '#7952B3' },
  { name: 'WordPress', Icon: FaWordpress, color: '#21759B' },
  { name: 'Firebase', Icon: SiFirebase, color: '#FFCA28' },
  { name: 'Framer Motion', Icon: SiFramer, color: '#0055FF' },
  { name: 'GSAP', Icon: SiGreensock, color: '#88CE02' },
  { name: 'Git', Icon: FaGitAlt, color: '#F05032' },
  { name: 'Figma', Icon: FaFigma, color: '#F24E1E' },
  { name: 'NextAuth', Icon: FaLock, color: '#a78bfa' },
  { name: 'Postman', Icon: SiPostman, color: '#FF6C37' },
]

const skillCategories = [
  {
    id: 'frontend',
    label: 'Frontend',
    color: '#a78bfa',
    skills: [
      { name: 'React.js', level: 95 },
      { name: 'Next.js', level: 92 },
      { name: 'TypeScript', level: 88 },
      { name: 'Tailwind CSS', level: 96 },
      { name: 'Framer Motion', level: 85 },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    color: '#34d399',
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Express.js', level: 88 },
      { name: 'MongoDB', level: 88 },
      { name: 'REST APIs', level: 92 },
      { name: 'Firebase', level: 78 },
    ],
  },
  {
    id: 'wordpress',
    label: 'WordPress',
    color: '#60a5fa',
    skills: [
      { name: 'Theme Development', level: 90 },
      { name: 'Plugin Customization', level: 85 },
      { name: 'WooCommerce', level: 82 },
      { name: 'ACF & Custom Fields', level: 88 },
      { name: 'Elementor / Bricks', level: 90 },
    ],
  },
  {
    id: 'tools',
    label: 'Tools',
    color: '#fb923c',
    skills: [
      { name: 'Git & GitHub', level: 92 },
      { name: 'Figma', level: 80 },
      { name: 'Postman', level: 85 },
      { name: 'Vercel / Netlify', level: 88 },
      { name: 'GSAP', level: 80 },
    ],
  },
]

function SkillPill({ name, Icon, color }) {
  return (
    <div
      className="flex items-center gap-2.5 px-4 py-2.5 rounded-full flex-shrink-0 cursor-default transition-all duration-200"
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.07)',
      }}
    >
      <Icon style={{ color }} className="text-base flex-shrink-0" />
      <span className="text-sm text-gray-300 font-medium whitespace-nowrap">{name}</span>
    </div>
  )
}

function MarqueeRow({ items, reverse = false, duration = 38 }) {
  const doubled = [...items, ...items, ...items]
  return (
    <div
      className="overflow-hidden"
      style={{ maskImage: 'linear-gradient(to right, transparent, black 6%, black 94%, transparent)' }}
    >
      <motion.div
        className="flex gap-3 w-max"
        animate={{ x: reverse ? [0, -(items.length * 162)] : [-(items.length * 162), 0] }}
        transition={{ duration, repeat: Infinity, ease: 'linear' }}
      >
        {doubled.map((tech, i) => (
          <SkillPill key={`${tech.name}-${i}`} name={tech.name} Icon={tech.Icon} color={tech.color} />
        ))}
      </motion.div>
    </div>
  )
}

function SkillBar({ name, level, color, delay = 0 }) {
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-gray-300 font-medium">{name}</span>
        <span className="text-xs font-bold" style={{ color }}>{level}%</span>
      </div>
      <div className="h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.06)' }}>
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}88, ${color})` }}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: 'easeOut', delay }}
        />
      </div>
    </div>
  )
}

export default function SkillsV2() {
  const [activeTab, setActiveTab] = useState('frontend')
  const row1 = technologies.slice(0, 11)
  const row2 = technologies.slice(11)
  const active = skillCategories.find((c) => c.id === activeTab)

  return (
    <section
      id="skills"
      className="relative min-h-screen flex flex-col items-center justify-center py-28 bg-[#050510] scroll-mt-20 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 70%)' }}
        />
      </div>

      {/* Header */}
      <div className="relative z-10 w-full max-w-6xl px-6 mb-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <p className="text-violet-400 text-xs font-bold uppercase tracking-[0.22em] mb-3">Technologies</p>
          <div className="flex flex-col sm:flex-row sm:items-end gap-4 justify-between">
            <h2 className="text-4xl sm:text-5xl font-black text-white">
              Tech{' '}
              <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                Stack
              </span>
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
              A curated set of modern tools I use to ship production-ready applications.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Marquee rows */}
      <motion.div
        className="w-full space-y-4 mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <MarqueeRow items={row1} duration={42} />
        <MarqueeRow items={row2} reverse duration={36} />
      </motion.div>

      {/* Skill proficiency section */}
      <div className="relative z-10 w-full max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.15 }}
          className="rounded-3xl p-8"
          style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
        >
          <div className="flex flex-col sm:flex-row gap-6">
            {/* Tabs */}
            <div className="flex sm:flex-col gap-2 flex-shrink-0">
              {skillCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-250 text-left whitespace-nowrap ${
                    activeTab === cat.id ? 'text-white' : 'text-gray-500 hover:text-gray-300'
                  }`}
                  style={
                    activeTab === cat.id
                      ? { background: `${cat.color}18`, border: `1px solid ${cat.color}35`, color: cat.color }
                      : { background: 'transparent', border: '1px solid transparent' }
                  }
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <div className="w-px bg-white/6 hidden sm:block" />

            {/* Skill bars */}
            <div className="flex-1 space-y-5">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35 }}
                className="space-y-5"
              >
                {active?.skills.map((skill, i) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    color={active.color}
                    delay={i * 0.08}
                  />
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Summary chips */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          {[
            { label: 'Frontend', count: '8+', color: '#a78bfa', bg: 'rgba(167,139,250,0.1)', border: 'rgba(167,139,250,0.2)' },
            { label: 'Backend', count: '4+', color: '#c084fc', bg: 'rgba(192,132,252,0.1)', border: 'rgba(192,132,252,0.2)' },
            { label: 'Databases', count: '3+', color: '#60a5fa', bg: 'rgba(96,165,250,0.1)', border: 'rgba(96,165,250,0.2)' },
            { label: 'Tools & Libs', count: '6+', color: '#f472b6', bg: 'rgba(244,114,182,0.1)', border: 'rgba(244,114,182,0.2)' },
          ].map(({ label, count, color, bg, border }) => (
            <div
              key={label}
              className="flex flex-col items-center justify-center p-5 rounded-2xl"
              style={{ background: bg, border: `1px solid ${border}` }}
            >
              <p className="text-2xl font-black" style={{ color }}>{count}</p>
              <p className="text-xs text-gray-500 mt-1 font-medium">{label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
