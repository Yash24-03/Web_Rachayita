// import React, { useState } from 'react';
// import courses from './Data';

// function NavigationBar() {
//   const [selectedCourse, setSelectedCourse] = useState(null);
//   const [selectedTopic, setSelectedTopic] = useState(null);

//   const handleCourseSelect = (course) => {
//     setSelectedCourse(course);
//     setSelectedTopic(course.topics[0]);
//   };

//   const handleTopicSelect = (topic) => {
//     setSelectedTopic(topic);
//   };

//   const CourseList = () => {
//     return (
//       <ul className="flex flex-row justify-center space-x-4 bg-gray-200 py-2 fixed top-0 left-0 w-full z-10">
//         {courses.map((course) => (
//           <li
//             key={course.id}
//             onClick={() => handleCourseSelect(course)}
//             className={`px-4 py-2 rounded-full cursor-pointer ${
//               selectedCourse === course
//                 ? 'bg-blue-600 text-white'
//                 : 'bg-gray-400 text-gray-700'
//             }`}
//           >
//             {course.name}
//           </li>
//         ))}
//       </ul>
//     );
//   };

//   const Content = () => {
//     if (!selectedTopic) {
//       return null;
//     }

//     let topicIndex = selectedCourse.topics.indexOf(selectedTopic);

//     return (
//       <div className="ml-0 mt-16 p-4">
//         {/* <h1 className="text-2xl font-bold mb-4">{selectedCourse.name}</h1>
//         <h2 className="text-lg font-medium mb-2">{selectedTopic}</h2> */}
//         {selectedCourse.content[topicIndex]}
//       </div>
//     );
//   };

//   return (
//     <div>
//       <CourseList />
//       <Content />
//     </div>
//   );
// }

// export default NavigationBar;
import React from 'react';


function Navbar() {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <img className="h-8 w-8" src="https://toppng.com/uploads/preview/visit-flying-birds-logo-11563229083rdl5io7cy2.png" alt="Website logo" />
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="/About" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
              <a href="/services" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Services</a>
              <a href="/contact" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
            </div>
          </div>
          {/* <div className="-mr-2 flex md:hidden">
            <button type="button" className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            </div> */}
        </div>
      </div>

      <div className="md:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
          <a href="/about" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</a>
          <a href="/services" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Services</a>
          <a href="/contact" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;


