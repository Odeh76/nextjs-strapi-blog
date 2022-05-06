import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { getNavLinks } from '../services'
import Footer from '../components/Footer'




const Header = () => {
    const [navLinks, setNavLinks] = useState([]);
    
    useEffect(() => {
      getNavLinks().then((newLinks) => setNavLinks(newLinks))
    }, [])
  return (
    <div className='container mx-auto px-10 mb-8'>
        <div className='border-b w-full inline-block border-white-400 py-8'>
            <div className='md:float-left block'>
                <Link href='/'>
                    <span className='cursor-pointer font-bold text-4xl text-white'>
                        AO
                    </span>
                </Link>
            </div>
            <div className='hidden md:float-left md:contents'>
                {navLinks.map((navLink) => (
                    <Link key={navLink.attributes.Slug} href={`/${navLink.attributes.Slug}`}>
                    <span className='md:float-right hover:bg-slate-50 hover:text-black rounded-full px-2 mt-2 align-middle text-white text-2xl ml-4 font-semibold cursor-pointer'>
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