import logo from './logo.svg';
import './App.css';
import Logo from './images/Logo.png'
import Filter from "./components/Filter/Filter";
import Offer from "./components/Offer/Offer";

function App() {
  return (
    <div className="container">
        <div className="content">
            <img className='logo' src={Logo} alt=""/>
           <div className="wrapper">
               <Filter/>
               <Offer/>
           </div>
        </div>
    </div>
  );
}

export default App;
