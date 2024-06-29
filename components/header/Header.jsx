import Link from 'next/link'
import { FaHeart } from "react-icons/fa";
import Hamburger from './Hamburger';
import Image from 'next/image';

export default function Header() {
    return (
        <>
            <header className={`text-gray-400 w-full body-font relative z-[14]`}>
                <div className="pl-4 pr-4 mx-auto flex flex-wrap py-5 justify-between items-center">
                    <Link href='/' className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                        <Image height={100} width={100} src="/logo.png" className='h-14 select-none object-cover object-center' alt="LOGO" />
                        <span className="text-xl">Watch</span>
                    </Link>
                    <nav className="md:mr-auto max-md:hidden md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
                        <Link href='/animes' className="mr-5 hover:text-white">Animes</Link>
                        <Link href='/best' className="mr-5 hover:text-white">Best</Link>
                        <Link href='/trending' className="mr-5 hover:text-white">Trending</Link>
                    </nav>
                    <div className="flex gap-3 items-center">
                        <Link href='/favorites' className=" mr-2 bg-gray-800 border-0 py-2 px-3 focus:outline-none hover:bg-gray-700 rounded text-base md:mt-0">
                            <FaHeart size={24} />
                        </Link>
                        <Hamburger />
                    </div>
                </div>
            </header>
        </>
    )
}
