import { FaFacebookSquare, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer class="bg-gray-600 text-center text-white">
  <div class="container px-6 pt-6">
    <div class="mb-6 flex justify-center space-x-6">
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
          <FaFacebookSquare className="text-3xl" />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
          <FaTwitter className="text-3xl" />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
          <FaInstagram className="text-3xl" />
        </a>
      </div>
      </div>
      <div
  class="p-4 text-center bg-gray-800"
//   style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
>
  © 2023 Copyright:
  <a class="text-white" href="https://tailwind-elements.com/">
    Tailwind Elements
  </a>
</div>

</footer>
  );
}

export default Footer;
