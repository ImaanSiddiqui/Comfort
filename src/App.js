import './App.css';
import Navbar from './Components/Navbar';
import View from './Components/View';
import Services from './Components/Services.js'
import Title from './Components/title.js'
import About from './Components/about.js';
import Contact from './Components/Contact.js';
import Footer from './Components/Footer.js';




function App() {


  
  
  







  return (
    <div className="App">
      <Navbar/>
      <View/>

      <div className='container'>
        
      <Title subTitle='Our SERVICES' title='What We Offer'/>
      <Services/>
      <About/>
      <Title subTitle='Contact Us' title='Get in Touch'/>
      <Contact/>

      </div>
      <Footer/>

      


      
    </div>
  );
}


export default App;
