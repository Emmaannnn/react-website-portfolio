import {useRef , useEffect} from 'react'
import BatoBatoPickImg from '../../assets/img/batobatopick-logo.png'
import BatoBatoPickGamePlay from '../../assets/img/batobatopick-gameplay.png'
import BatoBatoPickGamePlay2 from '../../assets/img/batobatopick-gameplay2.png'
import UnavailableImg from '../../assets/img/unavailable.jpg'
import Image1 from '../../assets/img/Image Portfolio/1.jpg'
import Image2 from '../../assets/img/Image Portfolio/2.jpg'
import Image3 from '../../assets/img/Image Portfolio/3.jpg'
import Image4 from '../../assets/img/Image Portfolio/4.jpg'
import Image5 from '../../assets/img/Image Portfolio/5.jpg'
import Image6 from '../../assets/img/Image Portfolio/6.jpg'
import Image7 from '../../assets/img/Image Portfolio/7.jpg'
import Image8 from '../../assets/img/Image Portfolio/8.jpg'
import Image9 from '../../assets/img/Image Portfolio/9.jpg'
import Image10 from '../../assets/img/Image Portfolio/10.jpg'
import Image11 from '../../assets/img/Image Portfolio/11.jpg'
import Image12 from '../../assets/img/Image Portfolio/12.jpg'
import Image13 from '../../assets/img/Image Portfolio/13.jpg'
import Image14 from '../../assets/img/Image Portfolio/14.jpg'
import BorderRight from '../../assets/img/rightborder.png'
import BorderLeft from '../../assets/img/leftborder.png'



const ProjectPortfolio = () => {
  const scrollRef = useRef(null);
  const images = [
    Image2, Image13, Image14, Image5, Image4, Image6, Image7,
    Image8, Image9, Image10, Image11, Image12, Image3, Image1,
  ];

  useEffect(() => {
    const sc = scrollRef.current;
    if (!sc) return;

    // pause flag
    let paused = false;
    const onEnter = () => (paused = true);
    const onLeave = () => (paused = false);
    sc.addEventListener("mouseenter", onEnter);
    sc.addEventListener("mouseleave", onLeave);

    // make sure we only start scrolling after images have loaded and layout is stable
    let imgs = Array.from(sc.querySelectorAll("img"));
    let remaining = imgs.length;
    let intervalId = null;

    const tryStart = () => {
      // clear any existing interval
      if (intervalId) return;

      // start scrolling
      intervalId = setInterval(() => {
        if (paused) return;
        // step
        sc.scrollLeft += 1;

        // read dynamic scrollWidth each tick to avoid mismatch
        const half = sc.scrollWidth / 2;

        // when we've scrolled past the first copy, move back by half
        if (sc.scrollLeft >= half) {
          // subtract half so the visual position remains continuous
          sc.scrollLeft -= half;
        }
      }, 16); // ~60fps (16ms) - adjust for speed
    };

    // if some images are not loaded, wait
    imgs.forEach((img) => {
      if (img.complete) {
        remaining -= 1;
      } else {
        const onLoad = () => {
          img.removeEventListener("load", onLoad);
          remaining -= 1;
          if (remaining <= 0) tryStart();
        };
        img.addEventListener("load", onLoad);
        img.addEventListener("error", onLoad); // treat error as loaded to avoid hang
      }
    });

    // if all images already complete, start immediately
    if (remaining <= 0) tryStart();

    // cleanup
    return () => {
      sc.removeEventListener("mouseenter", onEnter);
      sc.removeEventListener("mouseleave", onLeave);
      if (intervalId) clearInterval(intervalId);
    };
  }, []); // run once

  // Duplicate images to achieve seamless loop
  const loopImages = [...images, ...images];


  return (
    <section className="pt-10 md:pt-20 pb-10 border-b border-black/15">

      <h2 className="Inter text-4xl md:text-6xl font-bold text-third w-full mb-3 text-center">| Website <span className='text-secondary'>Project.</span></h2>
      <div className="Varela text-sm md:text-3xl font-extrabold text-third w-full text-center mb-7 md:mb-15 italic">"Striving for <span className='text-secondary'>Progress</span>, <span className='text-secondary'>Not Perfection</span>"</div>

      {/* WEBSITE PROJECTS */}
      <div className="bg-primary rounded-2xl shadow-md border border-slate-200 p-3 md:p-4 hover:shadow-lg hover:scale-105 transition-all duration-300 mx-5 md:mx-40 mb-6">
        <div className="flex flex-col md:grid md:grid-cols-12 gap-4 md:gap-8">
          <div className="md:col-span-5 flex justify-center ">
            <div className="hover-gallery w-full">
              <img src={BatoBatoPickImg} alt="BatoBatoPick Logo" className="w-auto h-60 rounded-xl object-cover"/>
              <img src={BatoBatoPickGamePlay} alt="BatoBatoPickGamePlay" className="w-full h-60 rounded-xl object-cover"/>
              <img src={BatoBatoPickGamePlay2} alt="BatoBatoPickGamePlay2" className="w-full h-60 rounded-xl object-cover"/>
            </div>

          </div>

          <div className="md:col-span-7 md:mt-4 Inter flex flex-col justify-between">
            <div className="title">
              <h1 className="text-xl md:text-2xl font-bold mb-1 text-[#003459]/90">Web-Based: <span className="text-secondary">BatoBatoPick Game</span></h1>
              <div className="badge badge-xs md:badge-sm badge-outline badge-success italic">Available</div>
            </div>
              <p className="py-5 Inter text-black/70">
                Enjoy a fun Bato Bato Pick game where you challenge your luck with rock, paper, or scissors! Play single player now — PvP mode coming soon!
              </p>
              
              <a href="https://emmaannnn.github.io/Rock-Paper-Scissors/" target='_blank' >
                <button className="btn w-full">Live Demo <svg className="pl-1 h-4 w-4 cursor-pointer" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 256 256" height="256px" id="Layer_1" version="1.1" viewBox="0 0 256 256" width="256px" xml:space="preserve"><path d="M164.525,222.138l89.6-89.6c2.5-2.5,2.5-6.551,0-9.051l-89.6-89.6c-2.5-2.5-6.551-2.5-9.051,0s-2.5,6.743,0,9.243  L234.15,122H6.4c-3.535,0-6.4,2.466-6.4,6s2.865,6,6.4,6h227.75l-78.676,78.881c-1.25,1.25-1.875,2.992-1.875,4.629  s0.625,3.326,1.875,4.576C157.975,224.586,162.025,224.638,164.525,222.138z"></path></svg></button>
              </a>
              
              
          </div>
        </div>
      </div>

      <div className="bg-primary rounded-2xl shadow-md border border-slate-200 p-4 hover:shadow-lg hover:scale-105 transition-all duration-300 mx-5 md:mx-40">
        <div className="flex flex-col md:grid md:grid-cols-12 gap-4 md:gap-8">
          <div className="md:col-span-5 flex justify-center">
            <img src={UnavailableImg} alt="BatoBatoPick Logo" className="w-auto h-60 rounded-xl object-cover"/>
          </div>

          <div className="md:col-span-7 mt-4 Inter flex flex-col justify-between">
            <div className="title">
              <h1 className="text-2xl font-bold mb-1 text-[black]/80">Title</h1>
              <div className="badge badge-sm badge-outline badge-error italic">Unavailable</div>
            </div>
              <p className="py-5 Inter text-black/70">
                Coming soon!
              </p>
              <a href="#" >
                <button className="btn w-full">View Details <svg className="pl-1 h-4 w-4 cursor-pointer" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 256 256" height="256px" id="Layer_1" version="1.1" viewBox="0 0 256 256" width="256px" xml:space="preserve"><path d="M164.525,222.138l89.6-89.6c2.5-2.5,2.5-6.551,0-9.051l-89.6-89.6c-2.5-2.5-6.551-2.5-9.051,0s-2.5,6.743,0,9.243  L234.15,122H6.4c-3.535,0-6.4,2.466-6.4,6s2.865,6,6.4,6h227.75l-78.676,78.881c-1.25,1.25-1.875,2.992-1.875,4.629  s0.625,3.326,1.875,4.576C157.975,224.586,162.025,224.638,164.525,222.138z"></path></svg></button>
              </a>
              
          </div>
        </div>
      </div>

            
      {/* GRAPHIC DESIGN */}
      <h2 className="Inter text-4xl md:text-6xl font-bold text-third w-full mb-3 text-center mt-30">| Graphic <span className='text-secondary'>Design.</span></h2>
      <div className="Varela text-sm md:text-3xl font-extrabold text-[#003459] w-full text-center mb-3 italic ">"Making <span className='text-secondary'>creativity visible.</span>"</div>
      
      <div className="group relative overflow-hidden">
        <img src={BorderRight} alt="" className='absolute h-125 -right-20 md:right-0' />
        <img src={BorderLeft} alt="" className='absolute h-125 -left-20 md:left-0' />
        <div ref={scrollRef} className="col-span-12 flex flex-nowrap h-125 gap-4 py-10 px-4 overflow-hidden">
          {loopImages.map((img, index) => (
            <img key={index} src={img} alt="" className='object-cover rounded-lg shadow-lg h-auto hover:scale-105 transition duration-300'/>

          ))}
        </div>
      </div>


    </section>


  )
}

export default ProjectPortfolio
