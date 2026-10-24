'use client'

import React from 'react'
import { GitHubLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons'
import { socialLinks as socialData } from '@/data/links'
import { Terminal, Activity, ShieldCheck } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const getSocialIcon = (linkId: string) => {
    if (linkId === 'github') {
      return <GitHubLogoIcon className="w-4 h-4" />
    }
    if (linkId === 'linkedin') {
      return <LinkedInLogoIcon className="w-4 h-4" />
    }
    return <TwitterLogoIcon className="w-4 h-4" />
  }

  const socialLinks = socialData.map(link => ({
    icon: getSocialIcon(link.id),
    url: link.href,
    label: link.label,
  }))

  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 font-mono text-xs py-8">
      <div className="container mx-auto px-4 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left: Terminal status indicator */}
        <div className="flex items-center gap-2.5">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-slate-300 font-semibold">cluster: node-asia-south1 [ONLINE]</span>
          <span className="text-slate-600">|</span>
          <span className="text-slate-500">PING: 18ms</span>
        </div>

        {/* Center: Copyright */}
        <div className="text-center text-slate-500 text-[11px]">
          &copy; {currentYear} Harsh Kesharwani. Production Backend &amp; Distributed Systems.
        </div>

        {/* Right: Social Profiles */}
        <div className="flex items-center space-x-3">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>

      </div>
    </footer>
  )
}

export default Footer