"use client"
import { Clock, Scissors} from 'lucide-react'
import useEmblaCarousel from 'embla-carousel-react'
import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr'

const services =[
    {
        title:"titulo",
        description: 'Descrição',
        duration:'2h',
        prince:'R$350',
        icon: <Scissors />,
        linkText:'Olá! vi no site sobre filmagens e gostaria de mais informações',
    },
]
export function Services() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: 'start',
        slidesToScroll: 1,
        breakpoints:{
            "(min-whidth: 768)": {slidesToScroll: 3},
        }
    })
    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-4">
                <h2 className="font-bold mb-12 text-4xl font-4xl">Serviços</h2>
            </div>
            <div className="relavite">
            <div className='overflow-hidden' ref={emblaRef}>
            <div className='flex'>
                {services.map((item, index) => (
                    <div key={index} className='flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3] px-3'>
                        <article className='bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 g-full flex flex-col'>
                           <div className='flex-1 flex items-start justify-between'>
                            <div className='flex gap-3'>
                                <span className='text-3xl'>{item.icon}</span>
                                <div>
                                    <h3 className='font-bold text-x1 my-1'>{item.title}</h3>
                                    <p className='text-gray-400 text-sm select-none'>{item.description}</p>
                                </div>
                            </div>
                            </div> 
                            <div className='boder-t border-gray-700 pt-4 flex items-center justify-between'>
                                <div className='flex items-center gap-3 text-sm'>
                                    <Clock className='w-4 h-4' />
                                    <span>{item.duration}</span>
                                </div>
                                <a href="#" className='flex items-center justify-center gap-2 hover:bg-red-500 px-4 py-1 rounded-md duration-300'>
                                    Entra em contato
                                    <WhatsappLogo className='w-5 h-5' />
                                </a>
                            </div>
                        </article>
                    </div>
                ))}
            </div>
            </div>
            </div>
        </section>
    )
}