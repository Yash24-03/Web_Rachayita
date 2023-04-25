import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';


import About from './pages/about';
import HomePage from './pages/home';
import InformationHub from './pages/information';
import Resources from './pages/resource';



function App() {
  return (
    <div>
      <Navbar/>
      <HomePage/>
      <About/>
      <Resources/>
      <InformationHub/>
      <Footer/>
    </div>
  );
}

export default App;
