'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useVersion } from '@/context/VersionContext'
import { FaChevronDown, FaCheck } from 'react-icons/fa'

const options = [
  { value: 'v1', label: 'Version 1', desc: 'Classic Cyan', dot: 'bg-cyan-400' },
  { value: 'v2', label: 'Version 2', desc: 'Modern Violet', dot: 'bg-violet-400' },
]

export default function VersionSwitcher() {
  const { version, switchVersion } = useVersion()
  const [open, setOpen] = useState(false)

  const current = options.find((o) => o.value === version)

  return (
    <div className="fixed top-[18px] left-3 z-[9999]">
      <motion.button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 bg-black/80 backdrop-blur-md border border-white/15 rounded-full text-white text-xs font-semibold shadow-lg select-none"
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
      >
        <span className={`w-1.5 h-1.5 rounded-full ${current.dot} flex-shrink-0`} />
        <span>{version === 'v1' ? 'V 1' : 'V 2'}</span>
        <FaChevronDown
          className={`text-[9px] text-gray-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </motion.button>

      <AnimatePresence>
        {open && (
          <>
            <div className="fixed inset-0 z-[-1]" onClick={() => setOpen(false)} />
            <motion.div
              initial={{ opacity: 0, y: -6, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -6, scale: 0.95 }}
              transition={{ duration: 0.15, ease: 'easeOut' }}
              className="absolute top-10 left-0 w-44 bg-[#0a0a12]/95 backdrop-blur-xl border border-white/12 rounded-2xl overflow-hidden shadow-2xl shadow-black/60"
            >
              {options.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => { switchVersion(opt.value); setOpen(false) }}
                  className={`w-full text-left px-4 py-3 flex items-center justify-between transition-colors duration-150 ${
                    version === opt.value
                      ? 'bg-white/8 text-white'
                      : 'text-gray-400 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className={`w-2 h-2 rounded-full ${opt.dot} flex-shrink-0`} />
                    <div>
                      <p className="text-sm font-medium leading-tight">{opt.label}</p>
                      <p className="text-[10px] text-gray-600 leading-tight mt-0.5">{opt.desc}</p>
                    </div>
                  </div>
                  {version === opt.value && (
                    <FaCheck className={`text-[10px] flex-shrink-0 ${opt.value === 'v1' ? 'text-cyan-400' : 'text-violet-400'}`} />
                  )}
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
