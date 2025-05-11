import React from 'react'
import { footerLinks } from '../constants'

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
        <div>
        <p className="font-semibold text-gray text-xs flex flex-wrap items-center gap-1">
          More ways to find us:{' '}
          <a href="https://www.youtube.com/@PrestigeProductionAgency" target="_blank" rel="noopener noreferrer" className="underline text-blue">YouTube</a> |
          <a href="https://www.instagram.com/prestige_production_ch/" target="_blank" rel="noopener noreferrer" className="underline text-blue">Instagram</a> |
          <a href="https://www.tiktok.com/@prestige.production" target="_blank" rel="noopener noreferrer" className="underline text-blue">TikTok</a> |
          <a href="https://www.linkedin.com/company/prestige-production-agency/" target="_blank" rel="noopener noreferrer" className="underline text-blue">LinkedIn</a> |
        </p>
          <p className="font-semibold text-gray text-xs">
            Or call +41 76 202 19 59
          </p>
        </div>

        <div className="bg-neutral-700 my-5 h-[1px] w-full" />

        <div className="flex md:flex-row flex-col md:items-center justify-between">
          <p className="font-semibold text-gray text-xs">Copright @ 2025 Prestige Production Snc. All rights reserved.</p>
          <div className="flex">
            {footerLinks.map((link, i) => (
              <p key={link} className="font-semibold text-gray text-xs">
                {link}{' '}
                {i !== footerLinks.length - 1 && (
                  <span className="mx-2"> | </span>
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer