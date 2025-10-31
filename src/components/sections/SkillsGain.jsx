import {HTMLIcon, CSSIcon, JSIcon, 
    ReactIcon, TailwindIcon, DaisyIcon, 
    BootstrapIcon, PHPIcon, MySQLIcon, 
    PhotoshopIcon, FigmaIcon, CanvaIcon} from '../elements/Icons'


const SkillsGain = () => {
  return (

    <section className="border-b border-black/15 py-15">
    <div className="Inter bg-white rounded-2xl shadow-xl border px-5 border-slate-200 py-15 hover:shadow-2xl transition-all duration-300 mx-5 md:mx-30 ">
        <h1 className="text-center font-extrabold text-4xl md:text-6xl text-third pb-10 -mx-7">Behind <span className='text-secondary'>Creations.</span></h1>
        <div className="Varela text-sm md:text-xl font-extrabold text-[#003459] w-full text-center mb-10 italic -mt-7 md:-mt-5">"These are the tools and technologies I use to <span className="text-secondary">design</span>, <span className="text-secondary">build</span>, and <span className="text-secondary">deliver</span>."</div>
        
        <div className="grid grid-cols-12 Inter border-t md:border-t-0 border-black/15 pt-4 font-medium text-[#003459]/80">
            <div className="col-span-12 md:col-span-4">
                <h3 className="font-bold text-center text-lg">Frontend</h3>

                <div className="Inter text-sm flex gap-x-2 gap-y-3 flex-wrap md:justify-center px-5 md:px-2 py-4 text-md">
                    <div className="gap-2 flex flex-col justify-center items-center Inter">
                        <HTMLIcon className="w-20 h-15"/>
                        <h6>HTML</h6>
                    </div>
                    
                    <div className="gap-2 flex flex-col justify-center items-center Inter">
                        <CSSIcon className="w-20 h-15"/>
                        <h6 className="">CSS</h6>
                    </div>

                    <div className="gap-2 flex flex-col justify-center items-center Inter">
                        <JSIcon className="w-20 h-15"/>
                        <h6 className="">JavaScript</h6>
                    </div>

                    <div className="gap-2 flex flex-col justify-center items-center Inter">
                        <ReactIcon className="w-20 h-15"/>
                        <h6 className="">React</h6>
                    </div>

                    <div className="gap-2 flex flex-col justify-center items-center Inter">
                        <TailwindIcon className="w-20 h-15"/>
                        <h6 className="">Tailwind</h6>
                    </div>
                    
                    <div className="gap-2 flex flex-col justify-center items-center Inter">
                        <DaisyIcon className="w-20 h-15"/>
                        <h6 className="">daisyUI</h6>
                    </div>

                    <div className="gap-2 flex flex-col justify-center items-center Inter">
                        <BootstrapIcon className="w-20 h-15"/>
                        <h6 className="">Bootstrap 5</h6>
                    </div>

                </div>

            </div>


            <div className="col-span-12 md:col-span-4 text-center border-t md:border-t-0 py-4 md:border-x border-black/20 text-[#003459]/80">
                <h3 className="font-bold text-center text-lg">Backend</h3>

                <div className="Inter text-sm flex gap-x-2 gap-y-3 flex-wrap justify-center px-5 md:px-2 py-4 text-md">
                    <div className="gap-2 flex flex-col justify-center items-center Inter">
                        <PHPIcon className="w-20 h-15"/>
                        <h6 className="">PHP</h6>
                    </div>
                    
                    <div className="gap-2 flex flex-col justify-center items-center Inter">
                        <MySQLIcon className="w-20 h-15"/>
                        <h6 className="">MySQL</h6>
                    </div>

                </div>
            </div>


            <div className="col-span-12 md:col-span-4 border-t md:border-t-0 border-black/15 pt-4 text-center text-[#003459]/80">
                <h3 className="font-bold text-center text-lg">Design Tool</h3>

                <div className="Inter text-sm flex gap-x-2 gap-y-3 flex-wrap justify-center px-3 md:px-2 py-4 text-md">
                    <div className="gap-2 flex flex-col justify-center items-center Inter">
                        <PhotoshopIcon className="w-20 h-15"/>
                        <h6 className="">Photoshop</h6>
                    </div>

                    <div className="gap-2 flex flex-col justify-center items-center Inter">
                        <FigmaIcon className="w-20 h-15"/>
                        <h6 className="">Figma</h6>
                    </div>

                    <div className="gap-2 flex flex-col justify-center items-center Inter">
                        <CanvaIcon className="w-20 h-15"/>
                        <h6 className="">Canva</h6>
                    </div>


                </div>
            </div>

        </div>
    </div>
    </section>

  )
}

export default SkillsGain
