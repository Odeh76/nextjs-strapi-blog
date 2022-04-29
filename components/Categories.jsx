import Link from 'next/link';
import React, { useState, useEffect } from 'react'
import { getCategories } from '../services'
const Categories = () => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories))
  }, [])

  return (
    <div>
      Categories
      {categories.map((category) => (
        <Link key={category.attributes.Slug} href={`/category/${category.attributes.Slug}`}>
          <span className='font-bold cursor-pointer text-white block pb-3 mb-3'>{category.attributes.Name}</span>
        </Link>
      ))}
    </div>
  )
}

export default Categories