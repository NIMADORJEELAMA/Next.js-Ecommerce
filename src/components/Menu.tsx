"use client";

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'

const Menu = () => {


const [open, setOpen] = useState(false);
  return (
    <div>
        <Image src='/menu.png' alt='menu' width={28} height={28} className='cursor-pointer' onClick={() => setOpen((prev) =>!prev ) } />

        {
            open&& (
                <div className='absolute bg-black text-white top-20 w-full h-[calc(100vh-80px)] left-0 flex flex-col items-center justify-center gap-8 tetx-xl z-10'>
                    <Link href='/'>HomePage</Link>
                    <Link href='/'>Shop</Link>
                    <Link    href='/'>Deals</Link>
                    <Link href='/'>About</Link>
                    <Link href='/'>Contact</Link>
                    <Link href='/'>Logout</Link>
                    <Link href='/'>Cart(1)</Link>
                   

                </div>
            )
        }
    </div>
  )
}

export default Menu;