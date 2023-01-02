import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';



export default function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_1s0f84y", "template_ah2n5ui", form.current, "7uGUxY5wVeNEmFFqM")
          .then((result) => {
              console.log(result.text);
              console.log("message sent");
              
              alert("Success!" + result.status)
              
              
          }, (error) => {
              console.log(error.text);
              console.log("message error");
          });
          form.current.reset();
      };

    return (
        <div className="h-screen flex flex-col justify-evenly items-center"> 
            <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl">
                Contact
            </h3>

            <div className="flex flex-col space-y-10">
                <h4 className="4xl font-semibold text-center">
                    I believe I have got what you need. Please shoot me a message.
                </h4>
                <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-2">
                    <input type="text" placeholder="Name" className="contactInput mb-2" name="user_name" />
                    <input type="email" placeholder="Email" className="contactInput mb-2" name="user_email" />
                    <textarea type="message" placeholder="Message.." className="contactInput mb-2" name="message" />
                    <button type='submit' className="bg-[#e7a923] py-5 px-10 rounded-lg text-black hover:text-white font-bold text-lg">Send</button>
                </form>
            </div>
        </div>
    );
}