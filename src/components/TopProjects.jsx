'use client'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import {
  FaReact, FaNodeJs, FaGithub, FaExternalLinkAlt,
  FaHtml5, FaCss3Alt, FaTimes
} from 'react-icons/fa'
import {
  SiMongodb, SiTailwindcss, SiJavascript,
  SiNextdotjs, SiWordpress
} from 'react-icons/si'
import {
  SiTypescript,
  SiMysql,
  SiExpress,
  SiRadixui,
  SiFramer,
  SiGreensock
} from 'react-icons/si'
import { BsArrowUpRight } from 'react-icons/bs'
import { projectsData } from './Projects'

// Tech icons configuration (same as in your Projects component)
const techConfig = {
  ReactJs: { icon: <FaReact className="text-[#61DAFB]" />, name: 'React' },
  NodeJS: { icon: <FaNodeJs className="text-[#339933]" />, name: 'Node.js' },
  MongoDB: { icon: <SiMongodb className="text-[#47A248]" />, name: 'MongoDB' },
  Tailwind: { icon: <SiTailwindcss className="text-[#06B6D4]" />, name: 'Tailwind' },
  HTML: { icon: <FaHtml5 className="text-[#E34F26]" />, name: 'HTML' },
  CSS: { icon: <FaCss3Alt className="text-[#1572B6]" />, name: 'CSS' },
  JavaScript: { icon: <SiJavascript className="text-[#F7DF1E]" />, name: 'JavaScript' },
  'Next.js': { icon: <SiNextdotjs className="text-white" />, name: 'Next.js' },
  WordPress: { icon: <SiWordpress className="text-[#21759B]" />, name: 'WordPress' },
  TypeScript: { icon: <SiTypescript className="text-[#3178C6]" />, name: 'TypeScript' },
  MySQL: { icon: <SiMysql className="text-[#4479A1]" />, name: 'MySQL' },
  Express: { icon: <SiExpress className="text-white" />, name: 'Express.js' },
  'shadcn/ui': { icon: <SiRadixui className="text-white" />, name: 'shadcn/ui' },
  'Framer Motion': { 
    icon: <SiFramer className="text-[#0055FF]" />, 
    name: 'Framer Motion' 
  },
  GSAP: { 
    icon: <SiGreensock className="text-[#88CE02]" />, 
    name: 'GSAP' 
  }
}

export default function TopProjects() {
  const [selectedProject, setSelectedProject] = useState(null)
  // Select top 3 projects (you can customize the selection criteria)
  const topProjects = projectsData.slice(0, 3)

  return (
    <section id="projects" className="py-16 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2 
            className="text-4xl sm:text-5xl font-extrabold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Featured Projects
            </span>
          </motion.h2>
          <motion.p
            className="mt-4 max-w-2xl text-xl text-gray-300 mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Here are some of my best projects that showcase my skills and experience
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topProjects.map((project, index) => (
            <motion.div
              key={project.title}
              className="w-full group relative flex-shrink-0 bg-[#000000]/90 border-2 border-cyan-400 rounded-xl overflow-hidden shadow-[0_0_15px_rgba(6,182,212,0.15)] backdrop-blur-sm group transition-all duration-300 hover:scale-105 hover:border-cyan-400"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <motion.span
                    className="text-cyan-400 mt-1 text-[12px] font-semibold"
                    animate={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
                  >
                    {project.makeFor}
                  </motion.span>
                </div>

                <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map(tech => (
                    <div
                      key={tech}
                      className="flex items-center gap-1 bg-gray-800/50 px-2.5 py-1 rounded-full text-xs"
                    >
                      <span>{techConfig[tech].icon}</span>
                      <span className="text-gray-300">{techConfig[tech].name}</span>
                    </div>
                  ))}
                  {project.technologies.length > 3 && (
                    <div className="flex items-center gap-1 bg-gray-800/50 px-2.5 py-1 rounded-full text-xs">
                      <span className="text-gray-300">+{project.technologies.length - 3}</span>
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-3">
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener"
                    className="flex-1 flex items-center justify-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white px-3 py-2 rounded-lg text-sm font-medium"
                    whileTap={{ scale: 0.95 }}
                  >
                    Live
                    <FaExternalLinkAlt size={12} />
                  </motion.a>

                  <motion.button
                    onClick={() => setSelectedProject(project)}
                    className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center gap-2 px-4"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="View details"
                  >
                    View Details <BsArrowUpRight className="text-cyan-400" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <ProjectModal
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

function ProjectModal({ project, onClose }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 top-10 flex items-start justify-center p-4 bg-black/90 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative bg-gray-900 rounded-xl w-full max-w-4xl my-8 border border-cyan-500/20 shadow-2xl"
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        onClick={e => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-white z-10 p-1 rounded-full bg-gray-800/80 hover:bg-gray-700/80 transition-colors"
          onClick={onClose}
          aria-label="Close modal"
        >
          <FaTimes size={20} />
        </button>

        {/* Image Header */}
        <div className="relative h-48 sm:h-64 w-full overflow-hidden rounded-t-xl">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            quality={100}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">{project.title}</h3>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-18rem)]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column (Description & Features) */}
            <div className="lg:col-span-2 space-y-8">
              <Section title="Description">
                <p className="text-gray-300 leading-relaxed">
                  {project.longDescription}
                </p>
              </Section>

              <Section title="Key Features">
                <ul className="space-y-3">
                  {project.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start text-gray-300"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <span className="text-cyan-400 mr-3 mt-0.5">•</span>
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </Section>
            </div>

            {/* Right Column (Links & Tech) */}
            <div className="space-y-6">
              <Section title="Project Links">
                <div className="space-y-3">
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-3 bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-3 rounded-lg font-medium transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Live Demo</span>
                    <FaExternalLinkAlt />
                  </motion.a>

                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-3 bg-gray-800 hover:bg-gray-700 text-white px-4 py-3 rounded-lg font-medium transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>View Code</span>
                    <FaGithub />
                  </motion.a>
                </div>
              </Section>

              <Section title="Technologies">
                <div className="grid grid-cols-2 gap-3">
                  {project.technologies.map(tech => (
                    <div
                      key={tech}
                      className="flex items-center gap-3 bg-gray-800/50 px-3 py-2 rounded-lg border border-gray-700"
                    >
                      <span className="text-lg">
                        {techConfig[tech].icon}
                      </span>
                      <span className="text-sm font-medium text-gray-300">
                        {techConfig[tech].name}
                      </span>
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="Category">
                <div className="flex items-center gap-3 bg-gray-800/50 px-3 py-2 rounded-lg border border-gray-700">
                  <span className="text-lg">
                    {techConfig[project.category]?.icon || <BsArrowUpRight />}
                  </span>
                  <span className="text-sm font-medium text-gray-300">
                    {project.category}
                  </span>
                </div>
              </Section>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

function Section({ title, children, className = '' }) {
  return (
    <div className={className}>
      <h4 className="text-xl font-semibold text-white mb-4">{title}</h4>
      {children}
    </div>
  )
}