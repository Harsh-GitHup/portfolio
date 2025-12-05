'use client'

import React from 'react'
import { GitHubLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons'
import { socialLinks as socialData } from '@/data/links'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const getSocialIcon = (linkId: string) => {
    if (linkId === 'github') {
      return <GitHubLogoIcon className="w-5 h-5" />
    }
    if (linkId === 'linkedin') {
      return <LinkedInLogoIcon className="w-5 h-5" />
    }
    return <TwitterLogoIcon className="w-5 h-5" />
  }

  const socialLinks = socialData.map(link => ({
    icon: getSocialIcon(link.id),
    url: link.href,
    label: link.label,
  }))

  return (
    <footer>
      {/* Footer content */}
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between border-t border-gray-300 dark:border-gray-700">
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 md:mb-0">
          &copy; {currentYear} Harsh Dev. All rights reserved.
        </p>
        <div className="flex space-x-6">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
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