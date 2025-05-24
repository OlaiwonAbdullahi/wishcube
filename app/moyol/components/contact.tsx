import React from "react";
import ContactForm from "./contactForm";
import ContactDetails from "./contactDetails";

const Contact = () => {
  return (
    <div className=" flex flex-col md:flex-row  p-6 ">
      <div className=" w-1/2">
        <ContactForm />
      </div>
      <div className=" w-1/2">
        <ContactDetails />
      </div>
    </div>
  );
};

export default Contact;
