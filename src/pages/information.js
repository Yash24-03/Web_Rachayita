import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

function InformationHub() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Information Hub</h2>

      <div className="flex flex-col lg:flex-row justify-between mb-12">
        <div className="flex-1">
          <h3 className="text-xl font-medium text-gray-900 mb-4">Web Designers</h3>
          <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="[Insert Web Designer 2's Name Here]" className="w-20 h-20 rounded-full mb-4" />
          <p className="text-lg text-gray-700 mb-4">[Insert Web Designer 1's Name and Batch Here]</p>
          <h3 className="text-xl font-medium text-gray-900 mb-4">Contact Information</h3>
          <ul className="list-none text-gray-700 mb-4">
            <li className="flex items-center mb-2">
              <FaEnvelope className="mr-2" />
              <a href="[Insert Web Designer 1's Email Address Here]" className="hover:text-gray-900">[Insert Web Designer 1's Email Address Here]</a>
            </li>
            <li className="flex items-center mb-2">
              <FaGithub className="mr-2" />
              <a href="[Insert Web Designer 1's GitHub Profile URL Here]" className="hover:text-gray-900">[Insert Web Designer 1's GitHub Profile URL Here]</a>
            </li>
            <li className="flex items-center mb-2">
              <FaLinkedin className="mr-2" />
              <a href="[Insert Web Designer 1's LinkedIn Profile URL Here]" className="hover:text-gray-900">[Insert Web Designer 1's LinkedIn Profile URL Here]</a>
            </li>
          </ul>
        </div>

        <div className="flex-1">
          <h3 className="text-xl font-medium text-gray-900 mb-4">&nbsp;</h3>
          <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="[Insert Web Designer 2's Name Here]" className="w-20 h-20 rounded-full mb-4" />
          <p className="text-lg text-gray-700 mb-4">[Insert Web Designer 2's Name and Batch Here]</p>
          <h3 className="text-xl font-medium text-gray-900 mb-4">Contact Information</h3>
          <ul className="list-none text-gray-700 mb-4">
            <li className="flex items-center mb-2">
              <FaEnvelope className="mr-2" />
              <a href="[Insert Web Designer 2's Email Address Here]" className="hover:text-gray-900">[Insert Web Designer 2's Email Address Here]</a>
            </li>
            <li className="flex items-center mb-2">
              <FaGithub className="mr-2" />
              <a href="[Insert Web Designer 2's GitHub Profile URL Here]" className="hover:text-gray-900">[Insert Web Designer 2's GitHub Profile URL Here]</a>
            </li>
            <li className="flex items-center mb-2">
              <FaLinkedin className="mr-2" />
              <a href="[Insert Web Designer 2's LinkedIn Profile URL Here]" className="hover:text-gray-900">[Insert Web Designer 2's LinkedIn Profile URL Here]</a>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-medium text-gray-900 mb-4">Additional Tools/Software</h3>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
      <li>[Insert Additional Tool/Software 1 Here]</li>
      <li>[Insert Additional Tool/Software 2 Here]</li>
      <li>[Insert Additional Tool/Software 3 Here]</li>
      <li>[Insert Additional Tool/Software 4 Here]</li>
    </ul>
  </div>

  <div>
    <h3 className="text-xl font-medium text-gray-900 mb-4">Bibliography</h3>
    <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
      <li>[Insert Source 1 Here]</li>
      <li>[Insert Source 2 Here]</li>
      <li>[Insert Source 3 Here]</li>
      <li>[Insert Source 4 Here]</li>
    </ul>
  </div>
</div>
);
}

export default InformationHub;
