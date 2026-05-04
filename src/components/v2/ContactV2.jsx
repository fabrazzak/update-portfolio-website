'use client'
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { SiUpwork } from 'react-icons/si'
import emailjs from 'emailjs-com'
import { useState } from 'react'

const contactItems = [
  { icon: FaEnvelope, title: 'Email', value: 'abrazzak6980@gmail.com', link: 'mailto:abrazzak6980@gmail.com', color: '#a78bfa' },
  { icon: FaPhoneAlt, title: 'Phone', value: '+880 170 390 6980', link: 'tel:+8801703906980', color: '#c084fc' },
  { icon: FaWhatsapp, title: 'WhatsApp', value: '+880 170 390 6980', link: 'https://wa.me/8801703906980', color: '#25D366' },
  { icon: FaMapMarkerAlt, title: 'Location', value: 'Dhaka, Bangladesh', link: 'https://maps.google.com/?q=Dhaka,Bangladesh', color: '#f472b6' },
]

const socialLinks = [
  { Icon: FaLinkedin, href: 'https://www.linkedin.com/in/abdur--razzak/', label: 'LinkedIn', color: '#0A66C2' },
  { Icon: FaGithub, href: 'https://github.com/fabrazzak', label: 'GitHub', color: '#e6e6e6' },
  { Icon: SiUpwork, href: 'https://www.upwork.com/freelancers/~01cbcc4bb65e1d54ef', label: 'Upwork', color: '#14a800' },
]

const EMPTY = { name: '', email: '', phone: '', message: '' }

export default function ContactV2() {
  const [formData, setFormData] = useState(EMPTY)
  const [status, setStatus] = useState('')
  const [sending, setSending] = useState(false)
  const [focused, setFocused] = useState('')

  const handleChange = (e) => setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setSending(true)
    emailjs.send('service_5ijc6xb', 'template_2y62zgf', formData, 'dyl-jB27h7SABJ_RX')
      .then(() => {
        setStatus('success')
        setFormData(EMPTY)
      })
      .catch(() => setStatus('error'))
      .finally(() => {
        setSending(false)
        setTimeout(() => setStatus(''), 4000)
      })
  }

  const inputClass = (name) =>
    `w-full px-4 py-3.5 rounded-xl text-white text-sm outline-none transition-all duration-250 bg-white/4 placeholder-gray-600 ${
      focused === name ? '' : ''
    }`

  const inputStyle = (name) => ({
    background: focused === name ? 'rgba(124,58,237,0.08)' : 'rgba(255,255,255,0.04)',
    border: `1px solid ${focused === name ? 'rgba(139,92,246,0.5)' : 'rgba(255,255,255,0.08)'}`,
    boxShadow: focused === name ? '0 0 0 3px rgba(139,92,246,0.08)' : 'none',
  })

  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-28 scroll-mt-20 bg-[#050510]"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)' }}
        />
        <div
          className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(217,70,239,0.08) 0%, transparent 70%)' }}
        />
      </div>

      <div className="relative z-10 w-full max-w-6xl">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <p className="text-violet-400 text-xs font-bold uppercase tracking-[0.22em] mb-3">Contact</p>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="text-4xl sm:text-5xl font-black text-white">
              Let's{' '}
              <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                Work Together
              </span>
            </h2>
            <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
              Have a project? I'd love to hear about it. Send me a message and let's make something great.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left: Info panel */}
          <motion.div
            className="lg:col-span-2 space-y-4"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            {/* CTA card */}
            <div
              className="p-7 rounded-3xl relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(124,58,237,0.2) 0%, rgba(217,70,239,0.12) 100%)',
                border: '1px solid rgba(139,92,246,0.25)',
              }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.6) 50%, transparent)' }}
              />
              <p className="text-white font-black text-xl mb-2">Available for projects</p>
              <p className="text-gray-400 text-sm leading-relaxed mb-5">
                I'm currently open to new freelance opportunities and full-time roles. Response time: under 24h.
              </p>
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
                </span>
                <span className="text-emerald-400 text-sm font-semibold">Online now</span>
              </div>
            </div>

            {/* Contact items */}
            {contactItems.map(({ icon: Icon, title, value, link, color }, i) => (
              <motion.a
                key={title}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl transition-all duration-250 group"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ borderColor: `${color}35`, boxShadow: `0 0 24px ${color}12`, x: 4 }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${color}15`, border: `1px solid ${color}25` }}
                >
                  <Icon style={{ color }} className="text-sm" />
                </div>
                <div>
                  <p className="text-xs text-gray-600 font-semibold uppercase tracking-wide">{title}</p>
                  <p className="text-gray-300 text-sm font-medium mt-0.5">{value}</p>
                </div>
              </motion.a>
            ))}

            {/* Social links */}
            <div
              className="p-5 rounded-2xl"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <p className="text-xs text-gray-600 font-bold uppercase tracking-widest mb-4">Find me on</p>
              <div className="flex gap-3">
                {socialLinks.map(({ Icon, href, label, color }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-gray-500 transition-all duration-200"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                    whileHover={{ scale: 1.12, color, borderColor: `${color}40`, backgroundColor: `${color}10` }}
                    whileTap={{ scale: 0.94 }}
                  >
                    <Icon className="text-base" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <div
              className="p-8 sm:p-10 rounded-3xl relative overflow-hidden"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.4) 50%, transparent)' }}
              />
              <h3 className="text-white font-bold text-xl mb-7">Send a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs text-gray-500 font-semibold mb-2 uppercase tracking-wide">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocused('name')}
                      onBlur={() => setFocused('')}
                      placeholder="Abdur Razzak"
                      className={inputClass('name')}
                      style={inputStyle('name')}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 font-semibold mb-2 uppercase tracking-wide">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocused('email')}
                      onBlur={() => setFocused('')}
                      placeholder="you@example.com"
                      className={inputClass('email')}
                      style={inputStyle('email')}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-gray-500 font-semibold mb-2 uppercase tracking-wide">Phone (optional)</label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={() => setFocused('phone')}
                    onBlur={() => setFocused('')}
                    placeholder="+1 234 567 890"
                    className={inputClass('phone')}
                    style={inputStyle('phone')}
                  />
                </div>

                <div>
                  <label className="block text-xs text-gray-500 font-semibold mb-2 uppercase tracking-wide">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused('')}
                    placeholder="Tell me about your project..."
                    rows={5}
                    className={inputClass('message')}
                    style={{ ...inputStyle('message'), resize: 'none' }}
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={sending}
                  className="w-full flex items-center justify-center gap-2.5 py-4 rounded-xl text-white font-semibold text-sm relative overflow-hidden"
                  style={{
                    background: sending ? 'rgba(124,58,237,0.5)' : 'linear-gradient(135deg, #7c3aed, #a855f7)',
                    boxShadow: '0 0 28px rgba(139,92,246,0.3)',
                  }}
                  whileHover={!sending ? { scale: 1.02, boxShadow: '0 0 40px rgba(139,92,246,0.5)' } : {}}
                  whileTap={!sending ? { scale: 0.98 } : {}}
                >
                  {sending ? (
                    <>
                      <motion.div
                        className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="text-sm" />
                      Send Message
                    </>
                  )}
                </motion.button>

                {status && (
                  <motion.div
                    className="text-center p-3.5 rounded-xl text-sm font-medium"
                    style={
                      status === 'success'
                        ? { background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(16,185,129,0.3)', color: '#34d399' }
                        : { background: 'rgba(239,68,68,0.12)', border: '1px solid rgba(239,68,68,0.3)', color: '#f87171' }
                    }
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                  >
                    {status === 'success' ? '✓ Message sent! I\'ll get back to you soon.' : '✗ Failed to send. Please try again.'}
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
