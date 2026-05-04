'use client'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { FaExternalLinkAlt, FaTimes, FaGithub } from 'react-icons/fa'
import { BsArrowUpRight } from 'react-icons/bs'
import {
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt,
} from 'react-icons/fa'
import {
  SiMongodb, SiTailwindcss, SiNextdotjs, SiWordpress, SiTypescript, SiMysql,
  SiExpress, SiRadixui, SiFramer, SiGreensock,
} from 'react-icons/si'
import { projectsData } from '@/components/Projects'

const techConfig = {
  ReactJs: { icon: <FaReact className="text-[#61DAFB]" />, name: 'React' },
  NodeJS: { icon: <FaNodeJs className="text-[#339933]" />, name: 'Node.js' },
  MongoDB: { icon: <SiMongodb className="text-[#47A248]" />, name: 'MongoDB' },
  Tailwind: { icon: <SiTailwindcss className="text-[#06B6D4]" />, name: 'Tailwind' },
  HTML: { icon: <FaHtml5 className="text-[#E34F26]" />, name: 'HTML' },
  CSS: { icon: <FaCss3Alt className="text-[#1572B6]" />, name: 'CSS' },
  JavaScript: { icon: null, name: 'JavaScript' },
  'Next.js': { icon: <SiNextdotjs className="text-white" />, name: 'Next.js' },
  WordPress: { icon: <SiWordpress className="text-[#21759B]" />, name: 'WordPress' },
  TypeScript: { icon: <SiTypescript className="text-[#3178C6]" />, name: 'TypeScript' },
  MySQL: { icon: <SiMysql className="text-[#4479A1]" />, name: 'MySQL' },
  Express: { icon: <SiExpress className="text-gray-300" />, name: 'Express.js' },
  'shadcn/ui': { icon: <SiRadixui className="text-white" />, name: 'shadcn/ui' },
  'Framer Motion': { icon: <SiFramer className="text-[#0055FF]" />, name: 'Framer Motion' },
  GSAP: { icon: <SiGreensock className="text-[#88CE02]" />, name: 'GSAP' },
}

function ProjectCardV2({ project, onClick }) {
  return (
    <motion.div
      className="group relative flex flex-col rounded-2xl overflow-hidden border border-white/8 bg-white/[0.03] hover:border-violet-500/35 transition-all duration-300 cursor-pointer"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      onClick={onClick}
    >
      {/* Image */}
      <div className="relative h-44 overflow-hidden flex-shrink-0">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          quality={85}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060610] via-[#060610]/30 to-transparent" />
        <div className="absolute top-3 right-3 flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-sm text-[10px] text-violet-300 border border-violet-500/20 font-medium">
            {project.makeFor}
          </span>
        </div>
        <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <div className="w-7 h-7 rounded-full bg-violet-600/80 backdrop-blur-sm flex items-center justify-center">
            <BsArrowUpRight className="text-white text-xs" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-sm font-bold text-white mb-1.5">{project.title}</h3>
        <p className="text-gray-500 text-xs mb-4 line-clamp-2 flex-1">{project.description}</p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-violet-500/8 border border-violet-500/18 text-violet-300 text-[10px] font-medium"
            >
              <span className="text-[10px]">{techConfig[tech]?.icon}</span>
              {techConfig[tech]?.name || tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-0.5 rounded-full bg-white/5 text-gray-600 text-[10px] font-medium">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        {/* Live link */}
        <motion.a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs text-violet-400 hover:text-violet-300 font-semibold self-start"
          onClick={(e) => e.stopPropagation()}
          whileHover={{ x: 3 }}
          transition={{ duration: 0.15 }}
        >
          Live Preview <FaExternalLinkAlt size={8} />
        </motion.a>
      </div>
    </motion.div>
  )
}

function ProjectModalV2({ project, onClose }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative bg-[#0a0a14] rounded-2xl w-full max-w-3xl border border-violet-500/20 shadow-2xl shadow-violet-900/30 overflow-hidden max-h-[92vh] flex flex-col"
        initial={{ scale: 0.96, opacity: 0, y: 16 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.96, opacity: 0, y: 16 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 z-10 p-1.5 rounded-full bg-white/6 hover:bg-white/12 text-gray-400 hover:text-white transition-colors"
          onClick={onClose}
        >
          <FaTimes size={14} />
        </button>

        {/* Header image */}
        <div className="relative h-48 w-full overflow-hidden flex-shrink-0">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            quality={100}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a14] via-[#0a0a14]/50 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6">
            <h3 className="text-2xl font-black text-white">{project.title}</h3>
            <span className="inline-block mt-1 px-2.5 py-0.5 rounded-full bg-violet-600/30 border border-violet-500/30 text-violet-300 text-xs font-medium">
              {project.category}
            </span>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h4 className="text-xs font-bold text-violet-400 uppercase tracking-[0.15em] mb-3">Description</h4>
                <p className="text-gray-400 leading-relaxed text-sm">{project.longDescription}</p>
              </div>
              <div>
                <h4 className="text-xs font-bold text-violet-400 uppercase tracking-[0.15em] mb-3">Key Features</h4>
                <ul className="space-y-2">
                  {project.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-gray-400 text-sm">
                      <span className="text-violet-400 mt-0.5 flex-shrink-0">▸</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right */}
            <div className="space-y-5">
              <div>
                <h4 className="text-xs font-bold text-violet-400 uppercase tracking-[0.15em] mb-3">Links</h4>
                <div className="space-y-2">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-2 px-4 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold transition-colors"
                  >
                    Live Demo <FaExternalLinkAlt size={11} />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 text-sm font-medium transition-colors border border-white/8"
                  >
                    View Code <FaGithub size={13} />
                  </a>
                </div>
              </div>
              <div>
                <h4 className="text-xs font-bold text-violet-400 uppercase tracking-[0.15em] mb-3">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-medium"
                    >
                      <span className="text-xs">{techConfig[tech]?.icon}</span>
                      {techConfig[tech]?.name || tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function ProjectsV2() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [activeFilter, setActiveFilter] = useState('All')

  const categories = ['All', ...new Set(projectsData.map((p) => p.category))]
  const filtered = activeFilter === 'All' ? projectsData : projectsData.filter((p) => p.category === activeFilter)

  return (
    <section id="projects" className="relative py-24 px-6 bg-[#060610] scroll-mt-20">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 right-1/4 w-96 h-80 bg-violet-800/8 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-violet-400 text-xs font-bold uppercase tracking-[0.2em] mb-3">Portfolio</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white">
            My{' '}
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          className="flex flex-wrap gap-2 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFilter === cat
                  ? 'bg-violet-600 text-white shadow-lg shadow-violet-600/25'
                  : 'bg-white/4 text-gray-400 hover:bg-white/8 hover:text-white border border-white/8'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4" layout>
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: i * 0.04, duration: 0.35 }}
                layout
              >
                <ProjectCardV2 project={project} onClick={() => setSelectedProject(project)} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <AnimatePresence>
          {selectedProject && (
            <ProjectModalV2 project={selectedProject} onClose={() => setSelectedProject(null)} />
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
