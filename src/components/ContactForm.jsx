'use client'
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa'
import emailjs from 'emailjs-com'
import { useState } from 'react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    emailjs
      .send(
        'service_5ijc6xb',
        'template_2y62zgf',
        formData,
        'dyl-jB27h7SABJ_RX'
      )
      .then(
        () => {
          setStatus('Message sent successfully!')
          setFormData({
            name: '',
            email: '',
            phone: '',
            message: '',
          })
          setTimeout(() => setStatus(''), 3000)
        },
        () => {
          setStatus('Failed to send message. Please try again.')
          setTimeout(() => setStatus(''), 3000)
        }
      )
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const contactItems = [
    {
      icon: <FaEnvelope className="text-cyan-400 text-2xl" />,
      title: 'Email',
      value: 'abrazzak6980@gmail.com',
      link: 'mailto:abrazzak6980@gmail.com',
    },
    {
      icon: <FaPhoneAlt className="text-cyan-400 text-2xl" />,
      title: 'Phone',
      value: '+0880 170 390 6980',
      link: 'tel:+08801703906980',
    },
    {
      icon: <FaWhatsapp className="text-cyan-400 text-2xl" />,
      title: 'WhatsApp',
      value: '+08801703906980',
      link: 'https://wa.me/8801703906980',
    },
    {
      icon: <FaMapMarkerAlt className="text-cyan-400 text-2xl" />,
      title: 'Location',
      value: 'Dhaka, Bangladesh',
      link: 'https://maps.google.com/?q=Dhaka,Bangladesh',
    },
  ]

  return (
    <motion.section
      id="contact"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 sm:px-8 lg:px-12 pt-20 pb-24 scroll-mt-24 bg-gradient-to-br from-black via-gray-900 to-black"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h2
        className="text-4xl sm:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-8"
        variants={itemVariants}
      >
        Get In <span className="text-white">Touch</span>
      </motion.h2>

      <motion.p
        className="text-lg text-gray-400 text-center max-w-2xl mb-16"
        variants={itemVariants}
      >
        Have a project in mind or want to discuss potential opportunities? Feel free to reach out through any of these channels.
      </motion.p>

      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div
          className="flex flex-col gap-8"
          variants={itemVariants}
        >
          {contactItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-6 p-6 rounded-xl bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-xl border-2 border-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300"
              whileHover={{
                scale: 1.02,
                boxShadow: '0 0 25px rgba(6, 182, 212, 0.2)',
              }}
              variants={itemVariants}
            >
              <div className="p-3 rounded-full bg-cyan-500/10">
                {item.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-300">{item.title}</h3>
                <p className="text-cyan-400">{item.value}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          className="flex flex-col items-center justify-center"
          variants={itemVariants}
        >
          <form
            onSubmit={handleSubmit}
            className="w-full space-y-6 p-8 rounded-xl bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-xl border-2 border-cyan-500/10"
          >
            <motion.div variants={itemVariants}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full p-4 bg-gray-900/70 text-white border border-gray-700 rounded-lg focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/50 transition-all duration-300"
                required
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full p-4 bg-gray-900/70 text-white border border-gray-700 rounded-lg focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/50 transition-all duration-300"
                required
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your Phone Number"
                className="w-full p-4 bg-gray-900/70 text-white border border-gray-700 rounded-lg focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/50 transition-all duration-300"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="5"
                className="w-full p-4 bg-gray-900/70 text-white border border-gray-700 rounded-lg focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/50 transition-all duration-300"
                required
              />
            </motion.div>

            <motion.div
              className="pt-2"
              variants={itemVariants}
            >
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-bold text-lg rounded-lg hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </button>
            </motion.div>

            {status && (
              <motion.div
                className={`text-center mt-4 p-3 rounded-lg ${
                  status.includes('successfully')
                    ? 'bg-green-900/30 text-green-400'
                    : 'bg-red-900/30 text-red-400'
                }`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                {status}
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default ContactForm