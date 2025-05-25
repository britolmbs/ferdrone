'use client'
import React from "react";
import { InstagramLogo } from "@phosphor-icons/react/dist/ssr";
import dji from '../../../public/dji.jpg'
import Image from "next/image";

const brands = [
    {name: "DJI", logo: dji}
]
const Footer = () => {
        const current_year = new Date().getFullYear()
        return (
            <section className="bg-[#F5F5F5] py-16 text-black">
                <div className="container mx-auto px-4">
                    <div className="border-b border-white/20 pb-20">
                    <h4 className="text-3xl font-semibold mb-8 text-center">Marca que trabalhamos</h4>
                    <div className="grid grid-cols-2 lg:grid-cols-6 gap-8">
                        {brands.map((item, index) => (
                            <div key={index} className="bg-white p-4 rounded-lg flex items-center justify-center">
                                <Image
                                src={item.logo}
                                alt={item.name}
                                className="object-contain"
                                width={100}
                                height={50}
                                quality={100}
                                style={{
                                    width: 'auto',
                                    height: 'auto', }}  />
                            </div>
                        ))}
                    </div>
                    </div>
               
                
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
             </div>
            </section>
           
        );
    }
    
    export default Footer;
