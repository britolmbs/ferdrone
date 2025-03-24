"use client"
import useEmblaCarousel from "embla-carousel-react"

const trabalhos = [
    {
        title:'',
        local: '',
        video: '',

    },
    {
        title: '',
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
       <section className="bg-[#FFD449] py-16">
        <div className="container mx-auto px-4">
            <h2 className="text-4xl text-center font-bold mb-12">Trabalhos Realizados</h2>
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                    {trabalhos.map((item, index) => (
                        <div key={index} className="flex-[0_0_100%] min-w-0 px-3">
                            
                        </div>
                    ))}
                </div>
            </div>
        </div>
       </section>
    )
}