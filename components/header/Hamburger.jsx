'use client'
import Link from 'next/link';
import React, { useState } from 'react'
import { FaHeart } from 'react-icons/fa'
import { FaHamburger } from "react-icons/fa";

export default function Hamburger() {
    const [openMenuBar, setOpenMenuBar] = useState(false);
    return (
        <>
            <button onClick={() => setOpenMenuBar(true)} className=" bg-gray-800 border-0 py-2 px-3 focus:outline-none hover:bg-gray-700 md:hidden  rounded text-base md:mt-0">
                <FaHamburger size={24} />
            </button>

            {
                openMenuBar && <div onClick={() => setOpenMenuBar(false)} className="inset-0 fixed w-screen top-0 left-0 h-full bg-black/40" />
            }
            <div className={`fixed text-white  top-0 w-64 h-full md:hidden bg-gray-800 ${openMenuBar ? 'translate-x-0 right-0' : 'translate-x-[600px]'}  transition-all duration-300`}>
                <div className="w-full shadow-md shadow-gray-900 h-16 bg-gray-700 flex justify-between items-center p-4" >
                    <h3>Side Bar</h3>
                    <span className='p-2 cursor-pointer rounded-full text-sm' onClick={() => setOpenMenuBar(false)}>Close</span>
                </div>
                <div className="flex flex-col gap-5 p-4 mt-5">
                    <Link href='/animes' className="mr-5 mb-4 text-lg font-bold  hover:text-white" onClick={() => setOpenMenuBar(false)}>Animes</Link>
                    <Link href='/manga' className="mr-5 mb-4 text-lg font-bold  hover:text-white" onClick={() => setOpenMenuBar(false)}>Manga</Link>
                    <Link href='/trending' className="mr-5 text-lg font-bold  hover:text-white" onClick={() => setOpenMenuBar(false)}>Trending</Link>
                </div>
                <div className="absolute bottom-0 flex justify-center items-center w-full h-16 bg-gray-700">
                    <div className="text-sm text-gray-200 ">© 2024 Watch —
                        <p className="text-white ml-1">bulbulhero63@gmail.com</p>
                    </div>
                </div>
            </div>
        </>
    )
}
