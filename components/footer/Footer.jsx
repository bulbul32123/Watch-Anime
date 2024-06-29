import Image from 'next/image';
import Link from 'next/link'
import React from 'react';
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { SiFiverr } from "react-icons/si";

export default function Footer() {
    return (
        <>
            <footer className="text-gray-400 body-font">
                <div className="container px-5 py-8 mx-auto flex items-center max-sm:justify-between sm:flex-row">
                    <Link href='/' className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                        <Image height={100} width={100} src="/logo.png" className='h-14 select-none object-cover object-center' alt="LOGO" />
                        <span className="text-xl pt-3">Watch</span>
                    </Link>
                    <div className="text-sm max-sm:hidden text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:pt-4 sm:mt-0 mt-4">© 2024 watch —
                        <p className="text-gray-500 ml-1">bulbulhero63@gmail.com</p>
                    </div>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 items-center justify-start">
                        <a href='https://www.facebook.com/profile.php?id=61550563621219' className="text-gray-400" target='_blank'>
                            <FaFacebookF size={17} />
                        </a>
                        <a href='https://www.linkedin.com/in/webdevwithbulbul/' className="ml-3 text-gray-400" target='_blank'>
                            <FaLinkedinIn size={17} />
                        </a>
                        <a href='https://github.com/bulbul32123' target='_blank' className="ml-3 text-gray-400">
                            <FaGithub size={17} />
                        </a>
                        <a className="ml-3 text-gray-400" target='_blank'>
                            <SiFiverr size={24} />
                        </a>
                    </span>
                </div>
            </footer>
        </>
    )
}
