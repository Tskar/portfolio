export default function Contact() {

    return (
        <div className="h-screen flex flex-col justify-center items-center"> 
            <h3 className="py-4 text-2xl">
                Contact section
            </h3>

            <div className="flex flex-col">
                <h4 className="py-2">
                    I believe I have got what you need. Please shoot me a message.
                </h4>
                <form className="flex flex-col gap-3">
                    <input type="text" placeholder="Name" className="" />
                    <input type="email" placeholder="Email" className="" />
                    <textarea type="message" placeholder="Message.." className="" />

                    <button className="bg-green-500 py-5 text-black font-bold text-lg">Send</button>
                </form>
            </div>
        </div>
    );
}