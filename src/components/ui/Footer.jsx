import React, { useEffect } from "react";
import { FaLinkedin, FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <footer data-aos="fade-up" className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6 lg:px-12 grid gap-10 sm:grid-cols-2 md:grid-cols-4">
        
        {/* Contact Section */}
        <div className="flex flex-col items-center sm:items-start">
          <h3 className="text-2xl font-bold mb-3">Contact</h3>
          <p className="text-lg">
            Email:{" "}
            <a href="mailto:iete.spit.ac.in" className="text-yellow-400">
              iete.spit.ac.in
            </a>
          </p>
          <p className="text-md">
            <span className="font-semibold">Asmiya Sayyad:</span> +91 9820314021
          </p>
          <p className="text-md">
            <span className="font-semibold">Woodrow Gonsalves:</span> +91 9330997463
          </p>
        </div>

        {/* Social Media Section */}
        <div className="flex flex-col items-center sm:items-start">
          <h3 className="text-2xl font-bold mb-3">Follow Us</h3>
          <div className="flex gap-6">
            {[
              { href: "https://www.instagram.com/iete_spit/", icon: FaInstagram, color: "text-pink-500 bg-gray-900" },
              { href: "https://www.linkedin.com/company/spit-iete/", icon: FaLinkedin, color: "text-blue-700 bg-gray-900" },
              { href: "https://www.youtube.com/channel/UCvumRiXhsBVh3qzsOHis2kA", icon: FaYoutube, color: "text-red-600 bg-gray-900" },
              { href: "https://www.facebook.com/iete.spit/", icon: FaFacebook, color: "text-blue-800 bg-gray-900" },
            ].map(({ href, icon: Icon, color }, index) => (
              <a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group transition-transform transform hover:scale-110"
              >
                <span className={`absolute inset-0 rounded-full ${color} blur-md opacity-50 group-hover:opacity-100 group-hover:blur-lg transition duration-300`}></span>
                <Icon className={`h-10 w-10 relative ${color} rounded-full p-2`} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="flex flex-col items-center sm:items-start">
          <h3 className="text-2xl font-bold mb-3">Links</h3>
          <ul className="space-y-2 text-lg font-semibold">
            {["Home", "Teams", "Events", "Tech Talks"].map((item, index) => (
              <li key={index}>
                <a href={`#${item.toLowerCase()}`} className="hover:text-yellow-400">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Location Section */}
        <div className="flex flex-col items-center sm:items-start">
          <h3 className="text-2xl font-bold mb-3">Location</h3>
          <p className="text-md leading-relaxed text-center sm:text-left">
            Bhavan's Campus, Old D N Nagar, Munshi Nagar, Andheri West, Mumbai, Maharashtra 400058
          </p>
          <iframe
            title="SPIT Location"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7539.268673594539!2d72.836283!3d19.123691!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9d90e067ba9%3A0x16268e5d6bca2e6a!2sBharatiya%20Vidya%20Bhavan's%20Sardar%20Patel%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1732028409907!5m2!1sen!2sin"
            width="100%"
            height="180"
            className="rounded-lg shadow-md mt-3"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-8 border-t border-gray-800 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} IETE SPIT. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
