import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { getNavLinks } from '../services'
import {useTheme} from 'next-themes'
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'


const Header = () => {
    const [navLinks, setNavLinks] = useState([]);
    const {theme, setTheme} = useTheme();
    
    useEffect(() => {
      getNavLinks().then((newLinks) => setNavLinks(newLinks))
    }, [])
  return (
    <>
    <div className='container mx-auto px-10 mb-8'>
            <div className='border-b w-full inline-block border-white-400 py-8'>
                <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} className='mx-2'>
                {theme === 'light' ? <BsFillMoonFill /> : <BsFillSunFill />}
                </button>
                <Link href='/'>
                    <span className='p-2 hover:bg-black hover:text-white dark:hover:bg-slate-50 dark:hover:text-black rounded-full text-lg font-semibold cursor-pointer'>
                        Home
                    </span>
                </Link>
                {navLinks.map((navLink) => (
                    <Link key={navLink.attributes.slug} href={`/${navLink.attributes.slug}`}>
                        <span className='p-2 hover:bg-black hover:text-white dark:hover:bg-slate-50 dark:hover:text-black md:float-right rounded-full text-lg font-semibold cursor-pointer'>
                        {navLink.attributes.Name}
                        </span>
                    </Link>
                    ))}
            </div>
    </div>
    </>
  )
}

export default Header
       