import Image from "next/image"
import { Check } from 'lucide-react'

export function About() {
    return (
        <section className="bg-[#FDF6ec] py-16">
            <div className="container mx-auto grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="reative">
                    <div className="relative w-full h-[400px] rounded-3x1 overflow-hidden">
                        <Image
                        src=''
                        alt='Foto Fernando'
                        fill
                        quality={100}
                        priority
                        className='object-cover hover:scale-110 duration-300' />
                    </div>
                </div>
                <div className="space-y-6">
                <h2 className="text-4x1 font-bold">Sobre</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut efficitur risus. In hac habitasse platea dictumst. 
                Duis at mollis est. Donec volutpat ornare risus, ut mollis magna feugiat in. Vivamus ac sodales purus.
                 Sed urna justo</p>
                 <ul className="space-y-4">
                    <li className="flex items-center gap-2">
                        <Check className='text-red-500' />
                        Casamentos, Show, Eventos
                    </li>
                 </ul>
                </div>
            </div>
            
        </section>
    )
}