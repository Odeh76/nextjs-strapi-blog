import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { getFooterLinks } from '../services'


const Footer = () => {

  const [footerLinks, setFooterLinks] = useState([]);
    
  useEffect(() => {
    getFooterLinks().then((newLinks) => setFooterLinks(newLinks))
  }, [])


  return (
    <div className='flex justify-center items-center text-black dark:text-white text-2xl h-24 overflow-hidden wrap'>
      {footerLinks.map((footerLink) => (
        <a key={footerLink.attributes.slug} rel={"noreferrer"} target="_blank" href={`${footerLink.attributes.SocialMediaUrl}`}>
          <span className='hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black rounded-full mx-3 py-2 px-2 font-semibold cursor-pointer'>
            {footerLink.attributes.Name}
          </span>
        </a>
      ))}
    </div>
  )
}

export default Footer