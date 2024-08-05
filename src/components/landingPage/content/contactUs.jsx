import React from "react";
import img from "../../../images/contmessage.png";
import { Fade } from "react-awesome-reveal";
const ContactUs = () => {
  return (
    <div className=" grid grid-cols-12 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 mt-9 mb-20 gap-6">
      <div className=" col-span-12 sm:col-span-4">
        <Fade triggerOnce={true} direction="down">
          <h1 className="text-2xl font-semibold text-zinc-800">Contact Us</h1>
        </Fade>
        <Fade triggerOnce={true} direction="up">
          {" "}
          <div>
            <div className=" mx-auto text-center my-2">
              <input
                type="text"
                placeholder="Name"
                className="bg-gray-100 w-full p-2"
              ></input>
            </div>
            <div className=" mx-auto text-center my-2">
              <input
                type="number"
                placeholder="Phone Number"
                className="bg-gray-100 w-full p-2"
              ></input>
            </div>
            <div className=" mx-auto text-center my-2">
              <input
                type="email"
                placeholder="E-mail"
                className="bg-gray-100 w-full p-2"
              ></input>
            </div>
            <div className=" mx-auto text-center my-2">
              <input
                type="text"
                placeholder="Interested In"
                className="bg-gray-100 w-full p-2"
              ></input>
            </div>
            <div className=" mx-auto text-center my-2">
              <textarea
                placeholder="Message"
                rows={6}
                className="bg-gray-100 w-full p-2"
              ></textarea>
            </div>
            <div>
              <button className=" bg-zinc-800 text-white p-3 mt-3">
                Send message
              </button>
            </div>
          </div>
        </Fade>
      </div>

      <div className=" col-span-12 sm:col-span-8  ">
        <Fade triggerOnce={true} direction="up">
          <img
            src={img}
            alt="ContactUS"
            className="w-full max-h-96 object-cover"
            property="lazy"
          />
        </Fade>
      </div>
    </div>
  );
};

export default ContactUs;
