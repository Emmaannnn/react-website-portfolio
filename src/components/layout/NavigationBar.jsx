import NavyLogo from '../../assets/Logo/navy.png'
import GreenLogo from '../../assets/Logo/blue-green.png'
import { HamburgerIcon } from '../elements/Icons'
const NavigationBar = () => {
  return (
      <nav className="flex justify-center items-center bg-primary p-3 text-black shadow-md fixed w-full top-0 left-0 z-50 rounded-bl-lg rounded-br-lg">
        <div className="container">
            
            {/*PHONE RESOLUTION */}
            <div className="md:hidden">
              <div className="grid grid-cols-12 px-5 py-2">
                
                <div className="col-span-3 flex justify-start items-center">
                  <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
                  <div className="drawer-content">
                    <label htmlFor="my-drawer-1" className="drawer-button"><HamburgerIcon/></label>
                  </div>
                  <div className="drawer-side">
                    <label htmlFor="my-drawer-1" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-200 min-h-full w-80 p-5">
                      <div className="flex justify-center items-center py-5 border-b border-black/15">
                        <a href="#" className="relative group w-[72px] h-auto">
                          <img src={NavyLogo} className="w-[72px] block group-hover:hidden" alt="default logo"/>
                          <img src={GreenLogo} className="w-[72px] hidden group-hover:block"  alt=""/>
                        </a>
                      </div>

                      {/* Sidebar content here */}
                      <li><a>Home</a></li>
                      <li><a href='#about-me'>About Me</a></li>
                      <li><a>Portfolio</a></li>
                      <li><a>Skills</a></li>
                      <li><a>Contact Me</a></li>
                      <li className='mt-3'>
                        <button className="Inter bg-[#003459] px-3 py-2 text-xs font-semibold rounded-lg hover:bg-[#003459]/90 text-[#f7f7f7] transition duration-300 cursor-pointer">
                          Download CV
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-span-6 flex justify-center items-center">
                  <a href="#" className="relative group h-auto">
                      <img src={NavyLogo} className="w-[72px] block group-hover:hidden" alt="default logo"/>
                      <img src={GreenLogo} className="w-[72px] hidden group-hover:block"  alt=""/>
                  </a>
                </div>


                <div className="col-span-3 flex justify-end items-center invisible">
                </div>
              </div>

            </div>




            {/* MEDIUM TO LARGE RESOLUTION */}
            <div className="hidden md:grid grid-cols-12 items-center">
                <div className="col-span-3 pl-14">
                  <a href="#" className="relative group w-[72px] h-auto">
                      <img src={NavyLogo} className="w-[72px] block group-hover:hidden" alt="default logo"/>
                      <img src={GreenLogo} className="w-[72px] hidden group-hover:block"  alt=""/>
                  </a>
                </div>


                <div className="col-span-6">
                  <ul className="flex justify-evenly text-lg font-semibold text-third">
                    <li className="Inter font-medium text-sm block hover:text-[#028090] rounded px-4 py-2 transition-all cursor-pointer"><a href="#about-me">ABOUT ME</a></li>
                    <li className="Inter font-medium text-sm block hover:text-[#028090] rounded px-4 py-2 transition-all cursor-pointer">PORTFOLIO</li>
                    <li className="Inter font-medium text-sm block hover:text-[#028090] rounded px-4 py-2 transition-all cursor-pointer">SKILLS</li>
                    <li className="Inter font-medium text-sm block hover:text-[#028090] rounded px-4 py-2 transition-all cursor-pointer">CONTACT ME</li>
                  </ul>
                </div>


                <div className="col-span-3 flex justify-end pr-14">
                  <button className="Inter bg-transparent px-6 py-2 text-[15px] border border-[#003459] font-semibold text-[#003459] rounded-lg hover:bg-[#003459] hover:text-[#f7f7f7] transition duration-300 cursor-pointer">Download CV</button>
                </div>
            </div>

        </div>
      </nav>

  )
}

export default NavigationBar
