"use client"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from "lucide-react";




const trabalhos = [
    {
        title:'Show Maria Pita Goiâna',
        local: 'Goiânia - GO',
        video: '/videos/DJI_0175.mp4'

    },
   
    {
        title: 'Show Goiâna Arena',
        local: 'Arena Goiâna',
        video: '/videos/DJI_0172.MOV'
    },
    {
        title: 'Maria Pita Goiânia Arena',
        local: 'Goiânia - GO',
        video: '/videos/DJI_0174.MOV'
    },
  
]

export function Trabalhos() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true
    })

    function scrollPrev () {
        emblaApi?.scrollPrev();
    }
    function scrollNext () {
        emblaApi?.scrollNext();
    }

    return(
       <section className="bg-[#5B021E] py-16">
        <div className="container mx-auto px-4">
            <h2 className="text-4xl text-center font-bold mb-12 text-[#F5F5F5]">Trabalhos Realizados</h2>
            <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                    {trabalhos.map((item, index) => (
                        <div key={index} className="flex-[0_0_100%] min-w-0 px-3">
                            <article className="bg-[#262626] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                            <div className=" flex flex-col items-center text-center space-y-4">
                                <div className="relative">
                                    <p className="text-[#F5F5F5] font-bold text-lg py-4">{item.title}</p>
                                    <video src={item.video} 
                                    className="w-full h-64 object-cover rounded-md shadow-md"
                                    autoPlay
                                    loop
                                    muted
                                    controls />

                                    <p className="font-bold text-sm py-1 text-[#F5F5F5]">{item.local}</p>

                                </div>
                            </div>
                            </article>
                            
                        </div>
                    ))}
                </div>
                </div>
                <button onClick={scrollPrev} className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10">
                <ChevronLeft className="w-6 h-6 text-gray-600" />
                </button>
                <button onClick={scrollNext} className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-6 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10">
                    <ChevronRight className="w-6 h-6 text-gray-600" />
                </button>


         </div>   
        </div>
       </section>
    )
}