import { SubmitIcon, MessengerIcon, TelegramIcon, 
    InstagramIcon, FacebookIcon, EmailIcon, 
    GithubIcon, DiscordIcon } from "./Icons"

const ContactMe = () => {
  return (
    <section className="py-15 md:mt-5 px-7 md:px-40">
        <h1 className="Inter font-extrabold text-4xl md:text-6xl text-third pb-10">| Get <span className="text-secondary">In Touch.</span></h1>
        
        <h5 className="Inter text-[#003459] text-xl md:text-2xl">Have a vision in mind? Drop me a message — let’s bring it to life together. </h5>
    
        <div className="grid grid-cols-12 md:gap-10 mt-3 Inter">
            <div className="col-span-12 md:col-span-6">
                <h2 className="text-lg text-[#003459]/70 font-bold py-5">Let’s connect</h2>

                <form action="#" className="flex flex-col gap-3">
                    <input type="text" placeholder="Enter your full name" className="input input-lg w-full transition-all rounded-lg p-5" />
                    <input type="email" placeholder="you@example.com" className="input input-lg w-full transition-all rounded-lg p-5" />
                    <input type="text" placeholder="Project inquiry, collaboration, etc." className="input input-lg w-full transition-all rounded-lg p-5" />
                    <textarea rows="5" placeholder="Discuss about your project, timeline, and how I can help..." className="textarea textarea-lg w-full rounded-lg p-5 transition-all resize-none"></textarea>

                    <button className="btn bg-[#003459] hover:bg-[#003459]/90 rounded-lg text-white font-bold mt-4">
                        <SubmitIcon className="mr-1"/> 
                        <span className="text-xs">Send Message</span>
                    </button>
                </form>
                
            </div>



            <div className="col-span-12 md:mt-5 md:col-span-6">
                <h2 className="text-lg text-[#003459]/70 font-bold py-5">Other ways to communicate</h2>

                <div className="flex flex-col gap-2">
                    <button className="flex pl-10 justify-start items-center bg-[#003459] hover:bg-[#003459]/90 shadow-sm hover:shadow-md rounded-lg text-white font-semibold p-3 cursor-pointer">
                        <MessengerIcon className="mr-5 text-xl"/> 
                        <span className="text-sm"> Messenger</span>
                    </button>

                    <button className="flex border border-black/15 bg-[#f7f7f7] hover:bg-[#f0f0f0] shadow-sm hover:shadow-md pl-10 justify-start items-center rounded-lg font-semibold p-3 cursor-pointer">
                        <InstagramIcon className="mr-5 text-xl"/> 
                        <span className="text-sm"> Instagram</span>
                    </button>

                    <button className="flex border border-black/15 bg-[#f7f7f7] hover:bg-[#f0f0f0] shadow-sm hover:shadow-md pl-10 justify-start items-center rounded-lg font-semibold p-3 cursor-pointer">
                        <TelegramIcon className="mr-5 text-xl"/> 
                        <span className="text-sm"> Telegram</span>
                    </button>

                </div>


                <h2 className="text-lg text-[#003459]/70 font-bold mt-10">Stay connected</h2>

                <div className="grid grid-cols-12 mt-3 gap-2">
                    <div className="col-span-6 flex flex-col gap-2">
                        <button className="flex border border-black/15 w-full bg-[#f7f7f7] hover:bg-[#f0f0f0] shadow-sm hover:shadow-md justify-start items-center rounded-lg font-semibold p-3 cursor-pointer">
                            <FacebookIcon className="mr-5 text-xl"/> 
                            <span className="text-sm"> Facebook</span>
                        </button>

                        <button className="flex border border-black/15 bg-[#f7f7f7] hover:bg-[#f0f0f0] shadow-sm hover:shadow-md justify-start items-center rounded-lg font-semibold p-3 cursor-pointer">
                            <EmailIcon className="mr-5 text-xl"/> 
                            <span className="text-sm"> Email</span>
                        </button>
                    </div>

                    <div className="col-span-6 flex flex-col gap-2">
                        <button className="flex border border-black/15 bg-[#f7f7f7] hover:bg-[#f0f0f0] shadow-sm hover:shadow-md justify-start items-center rounded-lg font-semibold p-3 cursor-pointer">
                            <GithubIcon className="mr-5 text-xl"/> 
                            <span className="text-sm"> GitHub</span>
                        </button>

                        <button className="flex border border-black/15 bg-[#f7f7f7] hover:bg-[#f0f0f0] shadow-sm hover:shadow-md justify-start items-center rounded-lg font-semibold p-3 cursor-pointer">
                            <DiscordIcon className="mr-5 text-xl"/> 
                            <span className="text-sm"> Discord</span>
                        </button>
                    </div>
                </div>


            </div>

        </div>
    
    </section>
  )
}

export default ContactMe
