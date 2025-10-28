import BlackLogo from '../assets/Logo/black.png'
import GreenLogo from '../assets/Logo/blue-green.png'

const NavigationBar = () => {
  return (
      <nav className="flex justify-center items-center bg-primary p-3 text-black shadow-md fixed w-full top-0 left-0 z-50 rounded-bl-lg rounded-br-lg">
        <div className="container">
            <div className="grid grid-cols-12 items-center">

                <div className="col-span-3 pl-14">
                  <a href="#" class="relative group w-[72px] h-auto">
                      <img src={BlackLogo} class="w-[72px] block group-hover:hidden" alt="default logo"/>
                      <img src={GreenLogo} class="w-[72px] hidden group-hover:block"  alt=""/>
                  </a>
                </div>


                <div className="col-span-6">
                  <ul className="flex justify-evenly text-lg font-semibold">
                    <li className="Inter font-medium text-[15px] block hover:text-[#028090] rounded px-4 py-2 transition-all cursor-pointer">ABOUT ME</li>
                    <li className="Inter font-medium text-[15px] block hover:text-[#028090] rounded px-4 py-2 transition-all cursor-pointer">PROJECT | PORTFOLIO</li>
                    <li className="Inter font-medium text-[15px] block hover:text-[#028090] rounded px-4 py-2 transition-all cursor-pointer">SKILLS</li>
                    <li className="Inter font-medium text-[15px] block hover:text-[#028090] rounded px-4 py-2 transition-all cursor-pointer">CONTACT ME</li>
                  </ul>
                </div>


                <div className="col-span-3 flex justify-end pr-14">
                  <button className="Inter bg-transparent px-6 py-2 text-[15px] border border-[#028090] font-semibold text-[#028090] rounded-lg hover:bg-[#028090] hover:text-[#FFFFEF] transition duration-300 cursor-pointer">Download CV</button>
                </div>
            </div>

        </div>
      </nav>

  )
}

export default NavigationBar
