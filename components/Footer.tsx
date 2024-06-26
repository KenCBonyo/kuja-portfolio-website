import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='text-white-800 flex-between body-text w-full gap-y-10 border-t border-black-400 bg-black-100 px-20 py-1 max-md:flex-col'>
        <p>Copyright @ 2024 Liz Foundation | All rights Reserved</p>
        <div className="flex gap-x-9">
            <Link href="/terms-of-use">Terms & conditons </Link>
            <Link href="/privacy">Privacy policy </Link>
        </div>
    </footer>
  )
}

export default Footer