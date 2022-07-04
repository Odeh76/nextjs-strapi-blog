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
            <div className='flex justify-center items-center cursor-pointer font-bold text-xl text-black dark:text-white'>
                    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                     className='mx-2'>
                     {theme === 'light' ? <BsFillMoonFill /> : <BsFillSunFill />}
                    </button>
                <Link href='/'>
                    <span className='hover:bg-black hover:text-white dark:hover:bg-slate-50 dark:hover:text-black rounded-full px-2'>
                        Home
                    </span>
                </Link>
                <Link href='/about'>
                    <span className='hover:bg-black hover:text-white dark:hover:bg-slate-50 dark:hover:text-black rounded-full px-2'>
                        About
                    </span>
                </Link>
                <Link href='/projects'>
                    <span className='hover:bg-black hover:text-white dark:hover:bg-slate-50 dark:hover:text-black rounded-full px-2'>
                        Projects
                    </span>
                </Link>
                <Link href='/blog'>
                    <span className='hover:bg-black hover:text-white dark:hover:bg-slate-50 dark:hover:text-black rounded-full px-2'>
                        Blog
                    </span>
                </Link>
            {/* <div>
                {navLinks.map((navLink) => (
                    <Link key={navLink.attributes.slug} href={`/${navLink.attributes.slug}`}>
                    <span className='hover:bg-black hover:text-white dark:hover:bg-slate-50 dark:hover:text-black md:float-right rounded-full px-2 mt-2 align-middle text-2xl ml-4 font-semibold cursor-pointer'>
                    {navLink.attributes.Name}
                    </span>
                    </Link>
                    ))}
                </div> */}
            </div>
        </div>
    </div>
  )
}

export default Header