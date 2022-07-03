import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { getNavLinks } from '../services'
import Footer from '../components/Footer'
import {useTheme} from 'next-themes'
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'


const Header = () => {
    const [navLinks, setNavLinks] = useState([]);
    const {theme, setTheme} = useTheme()
    
    useEffect(() => {
      getNavLinks().then((newLinks) => setNavLinks(newLinks))
    }, [])
  return (
    <div className='container mx-auto px-10 mb-8'>
        <div className='border-b w-full inline-block border-white-400 py-8'>
            <div className='md:float-left block'>
                <Link href='/'>
                    <span className='hidden md:float-left md:contents cursor-pointer font-bold text-4xl text-black dark:text-white'>
                        AO
                    </span>
                </Link>
            </div>
            <div>
                {navLinks.map((navLink) => (
                    <Link key={navLink.attributes.slug} href={`/${navLink.attributes.slug}`}>
                    <span className='hover:bg-black hover:text-white dark:hover:bg-slate-50 dark:hover:text-black md:float-right rounded-full px-2 mt-2 align-middle text-2xl ml-4 font-semibold cursor-pointer'>
                        {navLink.attributes.Name}
                    </span>
                    </Link>
                ))}
                    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                     className='float-right mt-2 px-2 md:py-2 text-black dark:text-white'>
                     {theme === 'light' ? <BsFillMoonFill /> : <BsFillSunFill />}
                    </button>
            </div>
        </div>
    </div>
  )
}

export default Header