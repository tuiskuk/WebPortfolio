import React from "react";
import { BsGithub, BsTwitter, BsLinkedin } from "react-icons/bs";
import "./SocialMedia.scss";
const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://twitter.com/deads17_HS" target="_blank">
          <BsTwitter />
        </a>
      </div>
      <div>
        <a href="https://github.com/tuiskuk" target="_blank">
          <BsGithub />
        </a>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/tuisku-kaikuvuo-7b9016163/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
