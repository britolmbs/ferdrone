"use client"
import { ChevronLeft, ChevronRight, Clock, Scissors} from 'lucide-react'
import useEmblaCarousel from 'embla-carousel-react'
import { Drone, WhatsappLogo } from '@phosphor-icons/react/dist/ssr'

const services =[
    {
        title:"titulo",
        description: 'Descrição',
        duration:'2h',
        prince:'R$350',
        icon: <Scissors />,
        linkText:'Olá! vi no site sobre filmagens e gostaria de mais informações',
    },
    {title: 'Voo de drones',
        description: 'voo de drone fpv',
        duration: '30min',
        prince: 'R$500',
        icon: <Drone />,
        linkText: 'Olá! vi no site sobre filmagens e gostaria de mais informações',
    },
    {title: 'shows',
        description: 'voo de drone em shows',
        duration: '3h',
        prince: 'R$700',
        icon: <Drone />,
        linkText: 'Olá! vi no site sobre filmagens e gostaria de mais informações',
    },
]
export function Services() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: 'start',
        slidesToScroll: 1,
        breakpoints:{
            "(min-whidth: 768)": {slidesToScroll: 3}
        }

    })

    function scrollPrev (){
        emblaApi?.scrollPrev();
    }
    function scrollNext(){
        emblaApi?.scrollNext();
    }

    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-4">
                <div>
                    <h2 className="font-bold mb-12 text-4xl font-4xl">Serviços</h2>
                </div>
                <div className="relative">
                    <div className='overflow-hidden' ref={emblaRef}>
                        <div className='flex'>
                            {services.map((item, index) => (
                                <div key={index} className='flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3'>
                                    <article className='bg-[#262626] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col'>
                                       <div className='flex-1 flex items-start justify-between'>

                                        <div className='flex gap-3'>
                                            <span className='text-3xl'>{item.icon}</span>
                                            <div>
                                                <h3 className='font-bold text-x1 my-1'>{item.title}</h3>
                                                <p className='text-gray-400 text-sm select-none '>{item.description}</p>
                                            </div>
                                        </div>
                                        </div> 
                                        <div className='border-t  border-gray-700 pt-4 flex items-center justify-between'>
                                            <div className='flex items-center gap-2 text-sm'>
                                                <Clock className='w-4 h-4' />
                                                <span>{item.duration}</span>
                                            </div>
                                            <a href="#" className='flex items-center justify-center gap-2 hover:bg-[#d1661b] px-4 py-1 rounded-md duration-300'>
                                                Entrar em Contato
                                                <WhatsappLogo className='w-5 h-5' />
                                            </a>
                                        </div>
                                    </article>
                                </div>
                            ))}
                        </div>

                    </div>
                    <button onClick={scrollPrev} className='bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10'>
                        <ChevronLeft className='w-6 h-6 text-gray-600' />
                    </button>
                    <button onClick={scrollNext} className='bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-6 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10'>
                        <ChevronRight className='w-6 h-6 text-gray-600' />
                    </button>
                </div>

            </div>

        </section>
    )
}