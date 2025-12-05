'use client'

import { useState, useEffect } from 'react'
import { Download, Linkedin, Mail, ArrowDown } from 'lucide-react'
import { GitHubLogoIcon } from '@radix-ui/react-icons'

import { socialLinks } from '@/data/links'

const Hero = () => {
  const [text, setText] = useState('')
  const fullText = 'Full-Stack Python Developer'

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      setText(fullText.slice(0, index))
      index++
      if (index > fullText.length) {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="particles"></div>

      <div className="container section-padding text-center z-10">
        <div className="animate-fade-in">
          {/* Profile Image */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full bg-linear-to-r from-primary-500 to-purple-600 p-1">
              <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center text-4xl font-bold text-primary-600">
                H
              </div>
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {/* `'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;` */}
            Hi, I&apos;m <span className="gradient-text">Harsh</span>
          </h1>

          <h2 className="text-xl md:text-3xl text-gray-600 mb-6 h-8">
            <span className="border-r-2 border-primary-500 pr-2">
              {text}
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Passionate about creating scalable web applications and elegant solutions.
            I specialize in Python backends, React frontends, and bringing ideas to life
            through clean, efficient code.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={() => scrollToSection('projects')}
              className="btn-primary flex items-center gap-2"
            >
              <GitHubLogoIcon className="w-5 h-5" />
              View My Work
            </button>

            <button className="btn-secondary flex items-center gap-2">
              <Download size={20} />
              Download Resume
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-16">
            {socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="p-3 rounded-full bg-gray-100 hover:bg-primary-500 hover:text-white transition-colors duration-300"
                aria-label={link.label}
              >
                {link.id === 'github' && <GitHubLogoIcon className="w-5 h-5" />}
                {link.id === 'linkedin' && <Linkedin size={20} />}
                {link.id === 'email' && <Mail size={20} />}
              </a>
            ))}
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce-slow text-primary-500 hover:text-primary-700 transition-colors"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero