import React from "react";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

function About() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <main className="container mx-auto px-4 md:px-6 lg:px-8 flex-1">
        <div className="py-16 md:py-24">
          <h1 className="text-4xl font-bold mb-6">About Us</h1>
          <p className="text-lg text-gray-700 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut
            odio non urna pulvinar sollicitudin.
          </p>
          <div className="flex items-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Company logo"
              className="rounded-full w-16 h-16 mr-6"
            />
            <div>
              <h2 className="text-xl font-bold">Our Company</h2>
              <p className="text-gray-700 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut
                odio non urna pulvinar sollicitudin. Donec eu nunc quis erat
                faucibus hendrerit. Morbi sed magna eget velit iaculis varius eu
                in sem.
              </p>
              <p className="text-gray-700 mb-4">
                Praesent ac libero vel felis luctus dictum nec in ipsum. Fusce
                viverra, nisi sit amet varius rhoncus, dolor mauris lacinia
                quam, vel efficitur ipsum magna ac nulla. Fusce mollis dolor
                eget sem luctus fringilla. Aliquam erat volutpat. Nulla
                facilisi.
              </p>
              <div className="flex items-center">
                <a href="#" className="text-gray-500 hover:text-gray-800 mr-4">
                  <FaTwitter />
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-800 mr-4">
                  <FaFacebook />
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-800 mr-4">
                  <FaLinkedin />
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-800">
                  <FiMail />
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      
    </div>
  );
}

export default About;
