import React from "react";
import img from "../../images/_con.jpeg";
import ContactUs from "../../components/landingPage/content/contactUs";
import { Fade } from "react-awesome-reveal";
const ContactUsPage = () => {
  return (
    <>
      <div className=" my-5 container">
        <div className="relative ">
          <img
            src={img}
            alt="contactUs"
            className="w-full h-[338px]"
            property="lazy"
          ></img>
          <div className="w-full h-full bg-gray-600 absolute top-0 opacity-70"></div>
          <div className="heart-Number text-center">
            <h1 className=" font-semibold text-2xl">
              <Fade triggerOnce={true} direction="down">
                Better Call Home
              </Fade>
            </h1>
            <p className=" font-medium">
              <Fade triggerOnce={true} direction="up">
                If you need an expert advice over one of our property or a
                question of any kind about us consultants will contact you
              </Fade>
            </p>
          </div>
        </div>
      </div>
      <div>
        <ContactUs></ContactUs>
      </div>
    </>
  );
};

export default ContactUsPage;
