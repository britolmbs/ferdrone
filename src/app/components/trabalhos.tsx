"use client"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from "lucide-react";

const trabalhos = [
    {
        title:'Video 1',
        local: '',
        video: 'https://www.youtube.com/watch?v=CnnxXVyVD_s&pp=ygUNbHVjYXMgbW9udGFubw%3D%3D',

    },
    {
        title: 'video2',
        local: '',
        video: '',
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
       <section className="bg-[#E51310] py-16">
        <div className="container mx-auto px-4">
            <h2 className="text-4xl text-center font-bold mb-12">Trabalhos Realizados</h2>
            <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                    {trabalhos.map((item, index) => (
                        <div key={index} className="flex-[0_0_100%] min-w-0 px-3">
                            <article className="bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                            <div className=" flex flex-col items-center text-center space-y-4">
                                <div className="relative">
                                    <p className="text-gray-200">{item.title}</p>
                                    <video src={item.video} 
                                    className="w-full rounded-md"
                                    autoPlay
                                    loop
                                    muted
                                    controls />

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