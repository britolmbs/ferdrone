import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr"
import Image from "next/image"
import Drone from '../../../public/drone.png'
import Ferdrone from '../../../public/ferdrone.png'

export function Hero() {
  return (
    <section className="bg-[#E51310] text-white relative overflow-hidden">
      <div>
      <Image src={Ferdrone}
        alt='Ferdrone'
        sizes='80vw'
        fill
        priority
        className=' opacity-60 object-cover lg:hidden' />
        <div className="obsolute inset-0 bg-black opacity-40 md:hidden"></div>
      </div>

      <div className='container mx-auto pt-16 pb-16 md:pb-0 px-4 relative'>
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl leading-10" data-aos='fade-down'>Ferdrone imagens Aereas</h1>
            <p className="lg:text-lg" data-aos='fade-right'>Melhores imagens para você</p>

            <a href="#" data-aos='fade-up' data-aos-delay='500' target="_blank"
            className="bg-black px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2">
                <WhatsappLogo className="w-5 h-5" />
            Contato via Whatsapp</a>
          

          <div className="mt-8">
            <p className="text-sm mb-4">
              <b className="bg-black text-white px-2 py-1 rounded-md">Venha fazer sua imagens aereas</b>
            </p>
         

          <div className='flex mt-4'>
            <div className="w-32 hidden lg:block">
            <Image src={Drone} alt='drone'
            quality={100} className='object-fill' />
            </div>
          </div>
          </div>
          </div>

          <div className="hidden md:block w-full relative h-96">
            <Image src={Ferdrone}
            alt='Ferdrones'
            className="object-contain"
            fill sizes="(max-width: 768px) 0vw, 50vw"
            quality={100} priority />
          </div>
        </article>
      </div>
    </section>
  )
}
