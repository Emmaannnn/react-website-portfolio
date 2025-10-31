import NavyLogo from '../../assets/Logo/navy.png'
import GreenLogo from '../../assets/Logo/blue-green.png'
import { FacebookIcon, EmailIcon, 
    GithubIcon, DiscordIcon, LocationIcon, PhoneIcon } from "../elements/Icons"


const Footer = () => {
  return (
    <section className="flex flex-col justify-center items-center border-t border-black/15 bg-base-300 text-base-content">
        <div className="container">
            <div className="grid grid-cols-12 px-7 md:px-20 md:gap-10 pt-20 pb-10">

                <div className="col-span-12 md:col-span-3 flex items-center">
                    <a href="#" className="relative group h-auto">
                         <img src={NavyLogo} className=" w-full block group-hover:hidden" alt="default logo"/>
                         <img src={GreenLogo} className=" w-full hidden group-hover:block"  alt=""/>
                    </a>
                </div>

                <div className="col-span-5 md:col-span-3 flex mt-10 md:mt-0 flex-col md:pl-20 Inter">
                    <h1 className='text-[#003459] font-bold text-lg mb-4'>Navigation</h1>

                    <div className="flex flex-col text-black/70 gap-2">
                        <h1 className="text-sm">Home</h1>
                        <h1 className="text-sm">About Me</h1>
                        <h1 className="text-sm">Portfolio</h1>
                        <h1 className="text-sm">Skills</h1>
                        <h1 className="text-sm">Contact Me</h1>
                    </div>

                </div>


                <div className="col-span-7 md:col-span-3 flex mt-10 md:mt-0 flex-col md:pl-10 Inter">
                    <h1 className='text-[#003459] font-bold text-center text-lg mb-4'>Personal Info</h1>

                    <div className="flex flex-col text-black/70 gap-2">
                        <h1 className="flex ">
                            <PhoneIcon className="mr-3"/> 
                            <span className="text-sm">+63 966 224 5295</span>
                        </h1>
                        
                        <h1 className="flex">
                            <EmailIcon className="mr-3"/> 
                            <span className="text-sm">emmanvilleta@gmail.com</span>
                        </h1>
                    
                        <h1 className="flex">
                            <LocationIcon className="mr-3"/> 
                            <span className="text-sm">Lucena City, Quezon</span>
                        </h1>



                    </div>

                </div>


                <div className="col-span-12 md:col-span-3 flex mt-10 md:mt-0 flex-col justify-center md:justify-start text-center md:text-start md:pl-20 Inter">
                    <h1 className='text-[#003459] font-bold text-center md:text-start text-lg mb-4'>Social Links</h1>

                    <div className="flex text-black/70 gap-2 justify-center md:justify-start">
                        <button className="flex border border-black/15 bg-[#f7f7f7] hover:bg-[#f0f0f0] shadow-sm hover:shadow-md justify-start items-center rounded-full p-3 cursor-pointer">
                            <FacebookIcon className="text-xl"/> 
                        </button>

                        <button className="flex border border-black/15 bg-[#f7f7f7] hover:bg-[#f0f0f0] shadow-sm hover:shadow-md justify-start items-center rounded-full p-3 cursor-pointer">
                            <GithubIcon className="text-xl"/> 
                        </button>

                        <button className="flex border border-black/15 bg-[#f7f7f7] hover:bg-[#f0f0f0] shadow-sm hover:shadow-md justify-start items-center rounded-full p-3 cursor-pointer">
                            <DiscordIcon className="text-xl"/> 
                        </button>
                    </div>

                </div>

            </div>
        </div>
        

        <footer className="footer container sm:footer-horizontal footer-start bg-base-300 text-base-content px-5 md:px-14 py-5 border-t border-black/15">
            <aside className="flex flex-col justify-center text-center text-xs md:text-start md:flex-row md:justify-between items-center w-full text-black/70 md:text-lg">
                <h6>© {new Date().getFullYear()} Lawrence Emman L. Villeta - All right reserved.</h6>
                <h6>Built with React.</h6>
            </aside>
        </footer>
    </section>
  )
}

export default Footer
