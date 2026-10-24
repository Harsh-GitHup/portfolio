'use client'

import React, { useState } from 'react'
import { Mail, Phone, MapPin, Send, Terminal, CheckCircle2, ShieldCheck, ArrowUpRight } from 'lucide-react'
import { socialLinks as socialData } from '@/data/links'
import { contactInfo as contactData } from '@/data/contact'
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from '@radix-ui/react-icons'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<{
    fieldErrors: Record<string, string[] | undefined>
    formErrors: string[]
  }>({ fieldErrors: {}, formErrors: [] })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
    // Clear field error on change
    if (errors.fieldErrors[e.target.name]) {
      setErrors((prev) => ({
        ...prev,
        fieldErrors: { ...prev.fieldErrors, [e.target.name]: undefined },
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: `${formData.subject}\n\n${formData.message}`,
        }),
      })
      const json = await res.json()
      if (!res.ok || !json.ok) {
        if (json?.errors) {
          setErrors({
            fieldErrors: json.errors.fieldErrors ?? {},
            formErrors: json.errors.formErrors ?? [],
          })
        } else {
          alert('Please check your input and try again.')
        }
        setIsSubmitting(false)
        return
      }
      setSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
      setErrors({ fieldErrors: {}, formErrors: [] })
    } catch (err) {
      console.error('Contact form submission error:', err)
      alert('Something went wrong. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const getIconById = (id: string): JSX.Element => {
    if (id === 'email') return <Mail className="w-5 h-5 text-emerald-400" />
    if (id === 'phone') return <Phone className="w-5 h-5 text-cyan-400" />
    return <MapPin className="w-5 h-5 text-indigo-400" />
  }

  const contactInfo = contactData.map((item) => ({
    icon: getIconById(item.id),
    label: item.label,
    value: item.value,
    link: item.link ?? null,
  }))

  const getIcon = (linkId: string) => {
    if (linkId === 'github') return <GitHubLogoIcon className="w-5 h-5" />
    if (linkId === 'linkedin') return <LinkedInLogoIcon className="w-5 h-5" />
    if (linkId === 'email') return <Mail className="w-5 h-5" />
    return <TwitterLogoIcon className="w-5 h-5" />
  }

  const socialLinks = socialData.map((link) => {
    const icon = getIcon(link.id)
    return { icon, label: link.label, url: link.href }
  })

  return (
    <section id="contact" className="py-24 bg-slate-950 text-slate-100 relative overflow-hidden border-t border-slate-900">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-emerald-400 mb-3 shadow-inner">
            <Terminal className="w-3.5 h-3.5 animate-pulse text-emerald-400" />
            <span>// DIRECT_RPC_CHANNEL :: DISPATCH_SESSION</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 font-mono">Touch</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Open a direct asynchronous communication socket for backend engineering roles, system architecture design, and technical consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Connection Info & Node Endpoints */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-xl">
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-800 font-mono text-xs text-slate-400">
                <span className="text-slate-200 font-semibold flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>CHANNEL_SECURITY</span>
                </span>
                <span className="text-emerald-400">ENCRYPTED [TLS 1.3]</span>
              </div>

              <h3 className="text-xl font-bold text-white mb-3">
                Let&apos;s Connect &amp; Architect
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                I am actively considering high-impact backend and distributed systems engineering opportunities. Whether building high-concurrency event brokers or refactoring legacy relational models, I welcome your inquiry.
              </p>

              {/* Endpoint Details */}
              <div className="space-y-3 mb-6">
                {contactInfo.map((info) => (
                  <div
                    key={info.label}
                    className="p-3 bg-slate-950/80 border border-slate-800/80 rounded-xl flex items-center gap-3.5 group hover:border-emerald-500/30 transition-colors"
                  >
                    <div className="p-2 bg-slate-900 rounded-lg">
                      {info.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] font-mono uppercase tracking-wider text-slate-500">
                        {info.label}
                      </p>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-xs sm:text-sm font-mono text-slate-200 group-hover:text-emerald-400 transition-colors truncate block"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-xs sm:text-sm font-mono text-slate-200 truncate">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Response SLA */}
              <div className="p-3 bg-emerald-950/20 border border-emerald-900/40 rounded-xl flex items-center justify-between font-mono text-xs">
                <span className="text-slate-400">Response SLA:</span>
                <span className="text-emerald-400 font-bold">&lt; 24 Hours Guaranteed</span>
              </div>
            </div>

            {/* Social Nodes */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 backdrop-blur-md shadow-xl">
              <h4 className="font-mono text-xs uppercase tracking-wider text-slate-400 mb-3">
                External Developer Profiles
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 p-3 bg-slate-950 border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-900 text-slate-300 hover:text-emerald-400 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 font-mono text-xs"
                    aria-label={social.label}
                  >
                    {social.icon}
                    <span className="hidden sm:inline">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Secure Payload Transmission Form */}
          <div className="lg:col-span-7 bg-slate-900/90 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-md">
            {/* Terminal Window Header Bar */}
            <div className="bg-slate-950 px-5 py-3.5 border-b border-slate-800 flex items-center justify-between font-mono text-xs">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                <span className="ml-2 text-slate-300 font-semibold">
                  POST /api/v1/contact/dispatch
                </span>
              </div>
              <span className="text-emerald-400 text-[11px] font-mono">READY</span>
            </div>

            <div className="p-6 sm:p-8">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 rounded-2xl flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white">
                    200 OK — Payload Dispatched
                  </h4>
                  <p className="text-slate-400 text-xs sm:text-sm max-w-md mx-auto font-mono">
                    Message transmission acknowledged. Packet routed to inbox with priority flag. I will reply within 24 hours.
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-4 py-2 bg-slate-950 border border-slate-800 text-slate-300 hover:text-white rounded-lg font-mono text-xs hover:border-slate-700 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5"
                      >
                        Client / Sender Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 font-mono text-xs transition-colors"
                        placeholder="John Doe"
                      />
                      {errors.fieldErrors?.name?.length ? (
                        <p className="mt-1.5 text-xs font-mono text-red-400">{errors.fieldErrors.name[0]}</p>
                      ) : null}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5"
                      >
                        Reply Address (Email) *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 font-mono text-xs transition-colors"
                        placeholder="john@example.com"
                      />
                      {errors.fieldErrors?.email?.length ? (
                        <p className="mt-1.5 text-xs font-mono text-red-400">{errors.fieldErrors.email[0]}</p>
                      ) : null}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5"
                    >
                      Topic / Routing Header *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 font-mono text-xs transition-colors"
                      placeholder="Backend Architecture Contract / Job Inquiry"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5"
                    >
                      Message Payload *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 font-mono text-xs transition-colors resize-none leading-relaxed"
                      placeholder="Outline your systems engineering goals, technical stack, or project scope..."
                    />
                    {errors.fieldErrors?.message?.length ? (
                      <p className="mt-1.5 text-xs font-mono text-red-400">{errors.fieldErrors.message[0]}</p>
                    ) : null}
                  </div>

                  {errors.formErrors?.length ? (
                    <div className="p-3 bg-red-950/40 border border-red-900/50 rounded-xl text-xs font-mono text-red-400">
                      {errors.formErrors[0]}
                    </div>
                  ) : null}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-6 bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-mono font-bold text-xs rounded-xl transition-all duration-200 shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                        <span>DISPATCHING_PAYLOAD...</span>
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact
