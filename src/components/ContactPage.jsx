import React from "react";


const Contact = () => {
  return (
    <div name='Contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4' style={{ fontFamily: "Raleway"}}>
        <form method='POST' action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8 text-center'>
                <p className='text-4xl  font-bold inline border-b-4 border-green-600 text-white'>Contact</p>
                <p className='text-white text-xl py-4'>Submit the form below or shoot me an email- mhsid99@gmail.com</p>
            </div>
            <input className='focus:bg-green-300 w-full md:w-1/2 mx-auto rounded-md text-gray-900' type="text" placeholder='Name' name='name' />
            <input className='focus:bg-green-300 my-4 p-2 bg-[#ccd6f6] w-full md:w-1/2 mx-auto rounded-md text-gray-900' type="email" placeholder='Email' name='email' />
            <textarea className='focus:bg-green-300 bg-[#ccd6f6] p-2 w-full md:w-1/2 mx-auto rounded-md text-gray-900' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-green-600 hover:border-green-600 px-4 py-3 my-8 mx-auto flex items-center'>Submit</button>
        </form>
    </div>
  )
}

export default Contact