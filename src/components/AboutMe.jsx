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
      <div className="col-span-12 md:col-span-6 md:p-20">
        <div className="relative md:left-10 hidden md:block">
          <img ref={BorderRightMove} src={BorderRight} alt="Second Profile" className="absolute h-155 hidden md:block -left-6 rounded-xl object-cover -mt-5" />
          <img src={MySecondProfile} alt="Second Profile" className=" h-145 rounded-t-full object-cover" />
        </div>
      </div>

      <div className="col-span-12 md:col-span-6 text-black py-10 md:pt-15 md:px-7 md:pb-13 ">
        <div className="flex flex-col">
          <div className="card-title flex flex-col">
            <h2 className="Inter text-4xl md:text-6xl font-bold text-third w-full px-7 md:px-0 md:mb-3">| About <span className='text-secondary'>Me.</span></h2>
          </div>

          <div className="card-body Varela">
            <div className="bg-primary rounded-2xl shadow-lg md:shadow-md border border-slate-200 p-5 hover:shadow-lg transition-all duration-300 text-black/70">

              <p className="text-md mb-5">I'm <span className="font-bold"> Lawrence Emman L. Villeta</span></p>

              <p className="text-md">Graduated in Batch 2024 with a <span className="font-semibold">Bachelor of Science in Information Technology</span> from <span className='font-semibold'>Dalubhasaan ng Lungsod ng Lucena</span>.</p>



              <p className="text-md mb-5">I'm <span className="font-bold"> Lawrence Emman L. Villeta</span></p>

              <p className="text-md">Graduated in Batch 2024 with a <span className="font-semibold">Bachelor of Science in Information Technology</span> from <span className='font-semibold'>Dalubhasaan ng Lungsod ng Lucena</span>.</p>




              <p className="text-md mb-5">I'm <span className="font-bold"> Lawrence Emman L. Villeta</span></p>

              <p className="text-md">Graduated in Batch 2024 with a <span className="font-semibold">Bachelor of Science in Information Technology</span> from <span className='font-semibold'>Dalubhasaan ng Lungsod ng Lucena</span>.</p>



              <p className="text-md mb-5">I'm <span className="font-bold"> Lawrence Emman L. Villeta</span></p>

              <p className="text-md">Graduated in Batch 2024 with a <span className="font-semibold">Bachelor of Science in Information Technology</span> from <span className='font-semibold'>Dalubhasaan ng Lungsod ng Lucena</span>.</p>

            </div>
            
          </div>
          

        </div>
      
      </div>
    </section>


  )
}

export default AboutMe
