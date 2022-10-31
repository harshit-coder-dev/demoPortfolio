import React from "react";
import "./responsive.css";
const Contact = () => {
  return (
    <div
      id="contact"
      name="contact"
      className="w-full  bg-gradient-to-b from-black to-gray-500 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full pt-32">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>
        <div className="flex justify-center items-center">
          <form action="https://getform.io/f/4c235d8d-34ca-44da-95a6-60567066a902" method="POST" className="flex flex-col w-full md:w-1/2">
            <input
              type="text"
              name="name"
              placeholder="Enter your Name"
              className="p-2  bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your Email"
              className="p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your Message"
              rows="10"
              className="p-2  bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>
            <button className=" text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-400">
              Let's Talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
