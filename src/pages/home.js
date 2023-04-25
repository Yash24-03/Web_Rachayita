import React from 'react';

function HomePage() {
  return (
     
    <div className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center"
    style={{ backgroundImage: `url(${"https://images.unsplash.com/photo-1464618663641-bbdd760ae84a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2Vic2l0ZSUyMGJhY2tncm91bmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"})` }} >
      {/* Navigation bar */}
      {/* <nav className="flex items-center justify-between w-full px-8 py-6 bg-white shadow-lg">
        <div className="flex items-center justify-center">
          <img src="/logo.png" alt="Logo" className="w-8 h-8 mr-2" />
          <h1 className="text-lg font-bold text-gray-800">My Website</h1>
        </div>
        <button className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600">Contact Us</button>
      </nav> */}

      {/* Hero section */}
      <section className="flex items-center justify-center flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800">Welcome to My Website</h2>
          <p className="mt-4 text-lg text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget arcu suscipit, blandit magna id, malesuada ipsum. Ut sit amet sollicitudin est, eget fermentum lectus.
          </p>
          <button className="px-4 py-2 mt-8 text-white bg-blue-500 rounded-lg hover:bg-blue-600">Learn More</button>
        </div>
      </section>
    

      {/* Footer */}
      {/* <footer className="flex items-center justify-center w-full py-4 bg-gray-800">
        <p className="text-sm text-white">© 2023 My Website. All rights reserved.</p>
      </footer> */}
    </div>
  );
}

export default HomePage;
