import React from "react";
import Swal from "sweetalert2"

import { SubmitIcon, MessengerIcon, TelegramIcon, 
    InstagramIcon, FacebookIcon, EmailIcon, 
    GithubIcon, DiscordIcon } from "../elements/Icons"

const ContactMe = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "093ec20d-d8fd-4d70-93af-74271525ed0d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success"
    });
      event.target.reset();
    } else {

      console.log("Error", data);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong, please try again..",
    });
    }
  };

  return (
    <div className="py-15 md:mt-5 px-7 md:px-40">
        <h1 className="Inter font-extrabold text-4xl md:text-6xl text-third pb-10">| Get <span className="text-secondary">In Touch.</span></h1>
        
        <h5 className="Inter text-[#003459] text-xl md:text-2xl">Have a vision in mind? Drop me a message — let’s bring it to life together. </h5>
    
        <div className="grid grid-cols-12 md:gap-10 mt-3 Inter">
            <div className="col-span-12 md:col-span-6">
                <h2 className="text-lg text-[#003459]/70 font-bold py-5">Let’s connect</h2>

                <form className="flex flex-col gap-3" onSubmit={onSubmit}>
                    <input type="text" name="name" placeholder="Enter your full name" className="input input-lg w-full transition-all rounded-lg p-5" required/>
                    <input type="email" name="email" placeholder="you@example.com" className="input input-lg w-full transition-all rounded-lg p-5" required/>
                    <input type="text" name="inquiry" placeholder="Project inquiry, collaboration, etc." className="input input-lg w-full transition-all rounded-lg p-5" required/>
                    <textarea rows="5" name="message" placeholder="Discuss about your project, timeline, and how I can help..." className="textarea textarea-lg w-full rounded-lg p-5 transition-all resize-none" required></textarea>

                    <button type="submit" className="btn bg-[#003459] hover:bg-[#003459]/90 rounded-lg text-white font-bold mt-4">
                        <SubmitIcon className="mr-1"/> 
                        <span className="text-xs">Send Message</span>
                    </button>

                    <span>{result}</span>
                </form>
                
            </div>



            <div className="col-span-12 md:mt-5 md:col-span-6">
                <h2 className="text-lg text-[#003459]/70 font-bold py-5">Other ways to communicate</h2>

                <div className="flex flex-col gap-2">

                    <a href="https://m.me/emmanlibardovilleta" target="_blank" rel="noopener noreferrer" className="flex pl-10 justify-start items-center bg-[#003459] hover:bg-[#003459]/90 shadow-sm hover:shadow-md rounded-lg text-white font-semibold p-3 cursor-pointer"> 
                        <MessengerIcon className="mr-5 text-xl"/> 
                        <span className="text-sm"> Messenger</span> 
                    </a>

                    <a href="https://www.instagram.com/emmaaaaaaaannnn/" target="_blank" rel="noopener noreferrer" className="flex border border-black/15 bg-[#f7f7f7] hover:bg-[#f0f0f0] shadow-sm hover:shadow-md pl-10 justify-start items-center rounded-lg font-semibold p-3 cursor-pointer">
                        <InstagramIcon className="mr-5 text-xl"/> 
                        <span className="text-sm"> Instagram</span>
                    </a>

                    <a href="https://t.me/ionedot" target="_blank" rel="noopener noreferrer" className="flex border border-black/15 bg-[#f7f7f7] hover:bg-[#f0f0f0] shadow-sm hover:shadow-md pl-10 justify-start items-center rounded-lg font-semibold p-3 cursor-pointer">
                        <TelegramIcon className="mr-5 text-xl"/> 
                        <span className="text-sm"> Telegram</span>
                    </a>

                </div>


                <h2 className="text-lg text-[#003459]/70 font-bold mt-10">Stay connected</h2>

                <div className="grid grid-cols-12 mt-3 gap-2">
                    <div className="col-span-6 flex flex-col gap-2">
                        <a href="https://www.facebook.com/HateDis.Layf24" target="_blank" rel="noopener noreferrer" className="flex border border-black/15 w-full bg-[#f7f7f7] hover:bg-[#f0f0f0] shadow-sm hover:shadow-md justify-start items-center rounded-lg font-semibold p-3 cursor-pointer">
                            <FacebookIcon className="mr-5 text-xl"/> 
                            <span className="text-sm"> Facebook</span>
                        </a>

                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=emmanvilleta@gmail.com" target="_blank" rel="noopener noreferrer" className="flex border border-black/15 bg-[#f7f7f7] hover:bg-[#f0f0f0] shadow-sm hover:shadow-md justify-start items-center rounded-lg font-semibold p-3 cursor-pointer">
                            <EmailIcon className="mr-5 text-xl"/> 
                            <span className="text-sm"> Email</span>
                        </a>
                    </div>

                    <div className="col-span-6 flex flex-col gap-2">
                        <a href="https://github.com/Emmaannnn" target="_blank" rel="noopener noreferrer" className="flex border border-black/15 bg-[#f7f7f7] hover:bg-[#f0f0f0] shadow-sm hover:shadow-md justify-start items-center rounded-lg font-semibold p-3 cursor-pointer">
                            <GithubIcon className="mr-5 text-xl"/> 
                            <span className="text-sm"> GitHub</span>
                        </a>

                        <button onClick={() => {
                            navigator.clipboard.writeText("emman#8495");
                            alert("Copied your Discord tag: emman#8495"); }}
                            className="flex border border-black/15 bg-[#f7f7f7] hover:bg-[#f0f0f0] shadow-sm hover:shadow-md justify-start items-center rounded-lg font-semibold p-3 cursor-pointer">
                            
                            <DiscordIcon className="mr-5 text-xl"/> 
                            <span className="text-sm"> Discord</span>
                        </button>
                    </div>
                </div>


            </div>

        </div>
    
    </div>
  )
}

export default ContactMe
