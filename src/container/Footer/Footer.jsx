import React from "react";
import "./Footer.scss";
import { useState } from "react";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { AiOutlineMail } from "react-icons/ai";
import { client } from "../../client";
import { SocialMedia } from "../../components";
const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = formData;
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = () => {
    setLoading(true);
    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message,
    };
    client.create(contact).then((data) => {
      setLoading(false);
      setIsFormSubmitted(true);
    });
  };
  return (
    <>
      <h2 className="head-text">Interested? You can contact me here</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <AiOutlineMail />
          <a href="mailto:tuisku.kaikuvuo2@gmail.com" className="p-text">
            tuisku.kaikuvuo2@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel: +358 606 7555" className="p-text">
            +358 606 7555
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              value={name}
              name="name"
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Your Email"
              value={email}
              name="email"
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {loading ? "Loading" : "Send Message"}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
      <div className="copyright">
        <SocialMedia />
        <p className="p-text">@Tuisku Kaikuvuo</p>
        <p className="p-text">All rights reserved</p>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "Contact",
  "app__whitebg"
);
