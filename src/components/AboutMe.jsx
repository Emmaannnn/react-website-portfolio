import {useRef , useEffect} from 'react'
import MySecondProfile from '../assets/img/dddppp.jpg'
import BorderRight from '../assets/img/rightborder.png'


const AboutMe = () => {

  const BorderRightMove = useRef(null);


  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (BorderRightMove.current) {
        // 👇 Move to the right as user scrolls down
        BorderRightMove.current.style.transform = `translateX(${scrollY * 0.1}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (

    <section className="grid grid-cols-12 gap-auto bg-primary border-b border-black/15">
      <div className="col-span-6 flex p-20">
        <div className="relative left-20">
          <img ref={BorderRightMove} src={BorderRight} alt="Second Profile" className="absolute w-auto h-155 -left-6 rounded-xl object-cover -mt-5" />
          <img src={MySecondProfile} alt="Second Profile" className="w-auto h-145 rounded-xl object-cover" />
        </div>
      </div>

      <div className="col-span-6 text-black p-13 ">
        <div className="flex flex-col">
          <div className="card-title">
            <h2 className="Inter text-6xl font-bold text-secondary w-full mb-3">| About me.</h2>
          </div>

          <div className="card-body Varela">
            <div className="bg-primary rounded-2xl shadow-sm border border-slate-200 p-5 hover:shadow-lg transition-all duration-300 text-black/70">

              <p className="text-md mb-5">I'm <span class="font-bold"> Lawrence Emman L. Villeta</span></p>

              <p className="text-md">Graduated in Batch 2024 with a <span className="font-semibold">Bachelor of Science in Information Technology</span> from <span className='font-semibold'>Dalubhasaan ng Lungsod ng Lucena</span>.</p>

            </div>
            
          </div>
          

        </div>
      
      </div>
    </section>


  )
}

export default AboutMe
