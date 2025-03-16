'use client'
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";


const NavBar = () => {

    const [navBar, setNavbar] = useState(false);

    const toogleNavBar = () => {
        setNavbar(!navBar);
    }
    return (
        <nav className="bg-gray-800 text-white">
      <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" >
        <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
                <div className="flex-shink-0">
                    <Link href="/" className="text-white font-bold text-lg" >Logo</Link>
                </div>
            </div>
            <div className="hidden md:block">
                <div className="ml-4 flex items-center space-x-4">
                    <Link href={'/'} className="text-white hover:bg-gray-900 hover:text-white rounded-lg p-2">Home</Link>
                    <Link href={'/About'} className="text-white hover:bg-gray-900 hover:text-white rounded-lg p-2">About</Link>
                    <Link href={'/contact'} className="text-white hover:bg-gray-900 hover:text-white rounded-lg p-2">Contato</Link>
                    <Link href="https://www.instagram.com/ferdrone_imagens_aereas" aria-label="Visite nosso Instagram" className=" text-white hover:text-pink-500">
                    <FontAwesomeIcon icon={faInstagram} size="lg" />
                    </Link>
                </div>
            </div>
            <div className="md:hidden flex items-center">
                <button className="inline-flex items-center justify-center p-2 rounded-md text-white md:text-white hidden:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" onClick={toogleNavBar}>
                {navBar ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
                    </svg>
                )}

                </button>
            </div>
        </div>
      </div>
      {navBar && (
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
             <Link href={'/'} className="text-white hover:bg-gray-900 block hover:text-white rounded-lg p-2">Home</Link>
                    <Link href={'/about'} className="text-white hover:bg-gray-900 block hover:text-white rounded-lg p-2">About</Link>
                    <Link href={'/contact'} className="text-white hover:bg-gray-900 block hover:text-white rounded-lg p-2">Contato</Link>
                    <Link href="https://www.instagram.com/ferdrone_imagens_aereas" aria-label="Visite nosso Instagram" className=" text-white hover:text-pink-500">
                    <FontAwesomeIcon icon={faInstagram} size="lg" />
                    </Link>
                    </div>
      )}
      </nav>
    )
}

export default NavBar;