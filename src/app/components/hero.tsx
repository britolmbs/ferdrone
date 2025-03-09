import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr"

export function Hero() {
  return (
    <section className="bg-[#E51310] text-white relative overflow-hidden">
      <div className='container mx-auto py-16 px-4 relative'>
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl leading-10">Ferdrone imagens Aereas</h1>
            <p className="lg:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <a href="#"
            className="bg-black px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2">
                <WhatsappLogo className="w-5 h-5" />
            Contato via Whatsapp</a>
          </div>

          <div className="mt-8">
            <p className="text-sm mb-4">
              <b className="bg-black text-white px-2 py-1 rounded-md">Venha fazer sua imagens aereas</b>
            </p>
          </div>

          <div>
            <h1>imagens do Fernando</h1>
          </div>
        </article>
      </div>
    </section>
  )
}
