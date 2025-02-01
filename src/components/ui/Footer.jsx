import React, { useEffect } from "react";
import { FaLinkedin, FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <footer className="text-center p-4 bg-gray-900 text-white mt-10">
    <p>© 2025 &lt;करो/&gt; DSA. All rights reserved.</p>
  </footer>
  );
};

export default Footer;
