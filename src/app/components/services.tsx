"use client"
import { ChevronLeft, ChevronRight, Clock, Scissors} from 'lucide-react'
import useEmblaCarousel from 'embla-carousel-react'
import { Drone, WhatsappLogo } from '@phosphor-icons/react/dist/ssr'

const services =[
    {
        title:"Voo de drone de FPV",
        description: 'Transforme seu evento com nossos shows de drones FPV Mini Avatar! Equipados com tecnologia de ponta, nossos drones oferecem uma perspectiva imersiva, permitindo que o público vivencie o espetáculo de maneira inovadora. Com manobras acrobáticas e imagens de alta definição transmitidas em tempo real, nossos shows elevam o nível da sua apresentação, encantando a todos os espectadores. Entre em contato e leve seu evento a novas alturas!',
        duration:'2h',
        prince:'R$350',
        icon: <Drone />,
        linkText:'Olá! vi no site sobre filmagens e gostaria de mais informações',
    },
    {
        title: 'drone mavic 2 pro',
        description: 'Leve sua experiência de filmagem a um novo patamar com o Mavic 2 Pro! Equipado com uma câmera Hasselblad de 20 MP e sensor de 1 polegada, este drone oferece imagens de alta qualidade e vídeos em 4K com detalhes impressionantes. Seu design compacto e fácil manuseio permitem que você capture cenas deslumbrantes em qualquer ambiente, desde paisagens naturais até eventos especiais. Com recursos avançados, como detecção de obstáculos em todas as direções e modos de voo inteligentes, o Mavic 2 Pro é a escolha perfeita para cinegrafistas e entusiastas da fotografia aérea. Eleve sua criatividade e registre momentos inesquecíveis nas alturas!',
        duration: '1h',
        prince: 'R$500',
        icon: <Drone />,
        linkText: 'Olá! vi no site sobre filmagens e gostaria de mais informações',
    },
    {title: 'Show, Casamento, Cooporativos',
        description: 'Oferecemos gravações aéreas para diversos tipos de eventos, incluindo shows, casamentos, eventos corporativos e muito mais. O FPV Mini Avatar proporciona uma perspectiva dinâmica e imersiva, ideal para capturar a energia de shows. Já o Mavic 2 Pro, com sua câmera Hasselblad de 20 MP, garante vídeos em 4K e imagens deslumbrantes para eventos como casamentos e eventos corporativos.',
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
                                            <a href="#" className='flex items-center justify-center gap-2 hover:bg-[#FEDBA3] hover:text-black px-4 py-1 rounded-md duration-300'>
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