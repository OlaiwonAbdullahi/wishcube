import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col gap-4 p-6 w-full md:w-3/4 mx-auto">
      <div className="">
        <h2 className="text-3xl font-bold">Get In Touch</h2>
        <p className="text-gray-500 text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure iste
          consequuntur nesciunt saepe adipisci! Mollitia laborum asperiores
          facilis quia iusto!
        </p>
      </div>
      <div className="">
        <form action="" className="flex flex-col gap-4">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            <div className="flex flex-col">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className=" border border-gray-300 rounded-lg p-2 bg-gray-100/50 focus:outline-none backdrop-blur-2xl"
                placeholder="Name"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className=" border border-gray-300 rounded-lg p-2 bg-gray-100/50 focus:outline-none backdrop-blur-2xl"
                placeholder="Email Address"
                required
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="message">Message</label>
            <textarea
              className=" border border-gray-300 rounded-lg p-2 bg-gray-100/50 focus:outline-none backdrop-blur-2xl"
              placeholder="Type your message here..."
              required
              rows={4}
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-[#1C1C1C] bg-[url('/doodle.webp')] bg-cover bg-center bg-blend-overlay mx-auto w-full mt-3.5 rounded-lg  overflow-hidden backdrop-blur-sm p-2.5 text-white"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
