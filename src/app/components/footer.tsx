'use client'
import React from "react";
import { InstagramLogo } from "@phosphor-icons/react/dist/ssr";


const Footer = () => {
        const current_year = new Date().getFullYear()
        return (
            <footer className="footer text-center py-6 border-t border-gray-300">
            <div className=" container mx-auto px-4">
                <nav className="mb-4 flex justify-center items-center space-x-4">
              
                <a href="https://www.instagram.com/ferdrone_imagens_aereas" target="_blank" aria-label="Visite nosso Instagram" className=" text-[#363636] flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md">
                <InstagramLogo className='w-5 h-5 text-[#363636]' />
                </a>
                </nav>
                <p className="text-sm text-gray-500">Copyright &copy; {current_year}, Ferdrone Imagens Aéreas. Todos os direitos reservados.</p>
                
            </div>
            </footer>
        );
    }
    
    export default Footer;
