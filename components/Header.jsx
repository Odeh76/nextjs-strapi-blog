import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { getNavLinks } from '../services'





const Header = () => {
    const [navLinks, setNavLinks] = useState([]);
    
    useEffect(() => {
      getNavLinks().then((newLinks) => setNavLinks(newLinks))
    }, [])
  return (
    <div className='container mx-auto px-10 mb-8'>
        <div className='border-b w-full inline-block border-blue-400 py-8'>
            <div className='md:float-left block'>
                <Link href='/'>
                    <span className='cursor-pointer font-bold text-4xl text-white'>
                        AO
                    </span>
                </Link>
            </div>
            <div className='hidden md:float-left md:contents'>
                {navLinks.map((navLink) => (
                    <Link key={navLink.attributes.Slug} href={`/nav-link/${navLink.attributes.Slug}`}>
                    <span className='md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer'>
                        {navLink.attributes.Name}
                    </span>
                    </Link>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Header