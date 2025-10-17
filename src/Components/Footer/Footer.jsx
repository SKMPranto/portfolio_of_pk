import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://www.linkedin.com/in/pranto-kumar-/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={40} />
          </a>
          <a
            href="https://github.com/SKMPranto"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={40} />
          </a>
          <a
            href="https://www.facebook.com/skpranto.skpranto.71"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={40} />
          </a>
          <a
            href="https://www.instagram.com/s_pranto_kumar/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GrInstagram size={40} />
          </a>
        </div>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved Pranto
          Kumar jr.MERN Stack Developer
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
