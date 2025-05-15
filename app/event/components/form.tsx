import React from "react";

const Form = () => {
  return (
    <div>
      <div className="">
        <form action="">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            className=" border border-gray-300 rounded-md p-2"
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            className=" border border-gray-300 rounded-md p-2"
          />
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="Enter your phone"
            className=" border border-gray-300 rounded-md p-2"
          />
        </form>
      </div>
    </div>
  );
};

export default Form;
