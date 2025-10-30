import {useEffect , useRef} from 'react'
import MyProfile from '../assets/img/dpdpdpdpdp.jpg'
import BorderTopLeft from '../assets/img/topleftborder.png'
import BorderBottomRight from '../assets/img/rightbottomborder.png'
import { TypeAnimation } from 'react-type-animation';


const GreetingsWithImage = () => {
  const BorderTopLeftMove = useRef(null);
  const BorderBottomRightMove = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (BorderTopLeftMove.current) {
        BorderTopLeftMove.current.style.transform = `translateX(-${scrollY * 0.15}px)`;
      }
      if (BorderBottomRightMove.current) {
        BorderBottomRightMove.current.style.transform = `translateX(${scrollY * 0.35}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);  
  }, []);

  return (
    <section className="grid grid-cols-12 gap-auto bg-primary mt-14 h-[640px] border-b border-black/15">
        <div className="col-span-7 flex flex-col mt-40 pl-20 text-third">
            <h1 className="Inter text-7xl font-bold mb-4">Hi, I'm 
              <span className="text-[#028090] ml-3"><TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  'Emman.',
                  1500, // wait 1s before replacing "Mice" with "Hamsters"
                  'a Designer.',
                  1500,
                  'a Web Dev.',
                  1500,
                ]}
                wrapper="span"
                speed={20}
                style={{ fontSize: '1em', display: 'inline-block' }}
                repeat={Infinity}
              />
              </span>
            </h1>
            <h3 className="Varela text-xl font-semibold mb-4 -mt-2 text-[#028090]">Web Developer <span className='text-third'>&</span> Graphic Designer</h3>
            <p className="Varela text-lg mb-6 mr-12 text-black/70">I’m an aspiring web developer and graphic designer. A passionate developer specializing in web applications and user experience design. I enjoy creating experiences that are both useful and beautiful.</p>
        
        </div>

        <div className="relative col-span-5 flex items-start justify-center overflow-x-hidden">
            <img ref={BorderTopLeftMove} src={BorderTopLeft} alt="Top Left Border" className="absolute h-145 z-5"/>
            <img ref={BorderBottomRightMove} src={BorderBottomRight} alt="Top Left Border" className="absolute h-145 z-5"/>
            <img src={MyProfile} alt="My Profile" className="absolute z-1 h-145 object-cover object-center "/>

        </div>

        
    </section>

  )
}


export default GreetingsWithImage
