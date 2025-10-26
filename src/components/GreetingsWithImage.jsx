import MyProfile from '../assets/img/dpdpdp.jpg'
import BorderTopLeft from '../assets/img/topleftborder.png'
import BorderBottomRight from '../assets/img/rightbottomborder.png'


const GreetingsWithImage = () => {
  return (
    <div className="grid grid-cols-12 gap-4 bg-primary h-[720px]">
        <div className="col-span-6 flex flex-col mt-40 pl-20">
            <h1 className="Varela text-5xl font-bold mb-4">Hello, I'm <span className="text-[#028090]">Emman</span></h1>
            <h2 className="Varela text-xl font-semibold mb-4 -mt-2 text-[#028090]">Web Developer & Graphic Designer</h2>
            <p className="Lora text-lg mb-6">I’m an aspiring web developer and graphic designer. A passionate developer specializing in web applications and user experience design. I enjoy creating experiences that are both useful and beautiful.</p>
        </div>

        <div className="relative col-span-6 flex items-start justify-center">
            <img src={BorderTopLeft} alt="Top Left Border" className="absolute h-130 z-5"/>
            <img src={BorderBottomRight} alt="Top Left Border" className="absolute h-130 z-5"/>
            <img src={MyProfile} alt="My Profile" className="absolute z-1 h-130 object-contain object-center bg-[#eaeaea]"/>
        </div>
    
    </div>

  )
}


export default GreetingsWithImage
