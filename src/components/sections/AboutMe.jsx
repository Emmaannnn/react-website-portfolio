import {useRef , useEffect} from 'react'
import MySecondProfile from '../../assets/img/dddppp.jpg'
import MyThirdProfile from '../../assets/img/ddpppp.jpg'
import BorderRight from '../../assets/img/rightborder.png'


const AboutMe = () => {
  const softSkills = ['Problem Solving', 'Adaptability', 'Collaboration', 'Communication', 'Fast Learner', 'Trustworthiness']

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

    <div className="grid grid-cols-12 gap-auto bg-primary border-b border-black/15">
      <div className="col-span-12 md:col-span-6 md:p-20">
        <div className="relative md:left-10 block w-full md:mx-8 mt-5">
          <img ref={BorderRightMove} src={BorderRight} alt="Second Profile" className="absolute hidden md:block h-155 -left-6 rounded-xl object-cover -mt-5" />
          <img src={MySecondProfile} alt="Second Profile" className="md:h-145 object-contain md:rounded-t-full md:object-cover hidden md:block" />
          <img src={MyThirdProfile} alt="Third Profile" className="shadow-[0_-10px_15px_-3px_rgba(0,0,0,0.2)] object-contain md:rounded-t-full md:object-cover block md:hidden" />
        </div>
      </div>

      <div className="col-span-12 md:col-span-6 z-6 text-black py-10 md:pt-15 md:px-7 md:pb-13 ">
        <div className="flex flex-col">
          <div className="card-title flex flex-col">
            <h2 className="Inter text-4xl md:text-6xl font-bold text-third w-full px-7 md:px-0 md:mb-3">| About <span className='text-secondary'>Me.</span></h2>
          </div>

          <div className="card-body Inter">
            <div className="bg-primary rounded-2xl shadow-lg md:shadow-md border border-slate-200 p-5 hover:shadow-lg transition-all duration-300 text-black/70">

              <p className="text-md mb-5">I'm <span className="font-bold"> Lawrence Emman L. Villeta</span>,
               with a hands-on experience in Web Development and Photo Editing gained through hobbies, freelancing, and work responsibilities.</p>

              <p className="text-md mb-5">I graduated in Batch 2024 with a 
                <span className="font-semibold"> Bachelor of Science in Information Technology</span> from <span className='font-semibold'>Dalubhasaan ng Lungsod ng Lucena</span>.
              </p>

              <p className="text-md mb-5">Throughout my journey, I've always aspired to become a professional  
                <span className="font-semibold"> Web Developer</span> and <span className="font-semibold">Graphic Designer</span>. 
                My passion for technology and design inspires me to develop and design both creative and functional projects.
                I always take full responsibility for every task assigned to me, and strive to meet or exceed the client's expectation.
              </p>

              <p className="text-md mb-8">
                As I continue my journey, I always aim to keep learning, growing, and adapting.
                 I believe that continuous improvement is essential to becoming both a better creator and a better person.
                  With every experience, I strive to gain new knowledge and refine my skills to deliver meaningful and impactful work.
              </p>
      
              <div className="flex flex-col justify-center items-center md:justify-start md:items-start">
                <h1 className='text-lg font-bold p-2'>Soft Skills</h1>
                <div className="flex flex-wrap justify-center items-center gap-1 md:justify-start md:items-start">
                  {softSkills.map ((coreSkill, index) => (
                    <div key={index} className="badge badge-outline badge-xs md:badge-sm border text-black/60">{coreSkill}</div>
                  ))}
                </div>
              </div>

            </div>
            
          </div>
          

        </div>
      
      </div>
    </div>


  )
}

export default AboutMe
