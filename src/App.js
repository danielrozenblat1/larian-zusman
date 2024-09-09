import logo from './logo.svg';
import './App.css';
import Who from './components/who/Who';
import SecondScreen from './screens/SecondScreen';
import NavBarNew from './components/NewNav/NavBarNew';
import { useEffect, useState } from 'react';
import ThirdScreen from './screens/ThirdScreen';
import ForthScreen from './screens/ForthScreen';
import FirstScreen from './screens/FirstScreen';
import WhoFits from './components/fit/WhoFits';

function App() {

  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {
   


    window.addEventListener("scroll", handleScroll);

    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
}, []);

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  return <>
  <NavBarNew/>
<FirstScreen/>
  <ThirdScreen/>
  <SecondScreen/>
 
  <Who/>
  <ForthScreen/>
  <WhoFits/>
   </>
}

export default App;
