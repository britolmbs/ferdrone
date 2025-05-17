import Image from "next/image"
import { Check } from 'lucide-react'
import { InstagramLogo, WhatsappLogo } from "@phosphor-icons/react/dist/ssr"
import Fernando from '../../../public/fernando.jpg'

export function About() {
    return (
        <section className="bg-white py-16">
            <div className="container px-4 mx-auto ">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="reative" data-aos='fade-up-right' data-aos-delay='300'>
                    <div className="relative w-full h-[400px] rounded-3x1 overflow-hidden">
                        <Image
                        src={Fernando}
                        alt='Foto Fernando'
                        fill
                        quality={100}
                        priority
                        className='object-cover hover:scale-110 duration-300' />
                    </div>
                </div>
                <div className="space-y-6" data-aos='fade-up-left' data-aos-delay='300'>
                <h2 className="text-4x1 font-bold">Sobre</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut efficitur risus. In hac habitasse platea dictumst. 
                Duis at mollis est. Donec volutpat ornare risus, ut mollis magna feugiat in. Vivamus ac sodales purus.
                 Sed urna justo</p>
                 <ul className="space-y-4 mt-10">
                    <li className="flex items-center gap-2">
                        <Check className='text-[#5B021E]' />
                        Casamentos e empresas.
                    </li>
                    <li className='flex items-center gap-2'>
                        <Check className='text-[#5B021E]' />
                        Filmagens Profissionais.
                    </li>
                    <li className="flex items-center gap-2">
                        <Check className='text-[#5B021E]' />
                       Shows.
                    </li>
                    <a href="https://www.instagram.com/ferdrone_imagens_aereas" target="_blank" className="bg-[#FEDBA3] text-[#black] flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md">
                        <InstagramLogo className='w-5 h-5 text-[#black]' />
                        Visite o Instagram
                    </a>
                    <a href="#" target="_blank" className=" bg-[#FEDBA3] text-black flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md">
                        <WhatsappLogo className='w-5 h-5 text-black' />
                        Contato Via WhatsApp
                    </a>
                 </ul>
                </div>
            </div>
            </div>
            
        </section>
    )
}