import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';



export default function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        form.current.reset();
        emailjs.sendForm("service_1s0f84y", "template_ah2n5ui", form.current, "7uGUxY5wVeNEmFFqM")
          .then((result) => {
              console.log(result.text);
              console.log("message sent");
              
              alert("Success!" + result.status)
              
              
          }, (error) => {
              console.log(error.text);
              console.log("message error");
          });
      };

    return (
        <div className="h-screen flex flex-col justify-center items-center"> 
            <h3 className="py-4 text-2xl">
                Contact section
            </h3>

            <div className="flex flex-col">
                <h4 className="py-2">
                    I believe I have got what you need. Please shoot me a message.
                </h4>
                <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-3">
                    <input type="text" placeholder="Name" name="user_name" />
                    <input type="email" placeholder="Email" name="user_email" />
                    <textarea type="message" placeholder="Message.." name="message" />
                    <button type='submit' className="bg-green-500 py-5 text-black font-bold text-lg">Send</button>
                </form>
            </div>
        </div>
    );
}