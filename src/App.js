import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import GlobalStyle from "./globalstyles";
import Index from "./components";
import Navbar from "./components/navbar";
import Dropdown from "./components/Dropdown";



function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div style={{background:
      "linear-gradient(136.51deg, #4C7FB5 1.15%, rgba(76, 127, 181, 0) 101.51%)", }}>
      <GlobalStyle/>
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <Index />
    </div>
  );
}

export default App;


