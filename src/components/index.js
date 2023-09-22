import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ImageGallery from "./ImageGallery";
import Navbar from "./navbar";
import Dropdown from "./Dropdown";



const Index=()=> {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div style={{background:
      "linear-gradient(136.51deg, #4C7FB5 1.15%, rgba(76, 127, 181, 0) 101.51%)", height: "90vh", maxHeight: "2200px"}}>
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <div className="container p-2">
      <ImageGallery />
      </div>
    </div>
  );
}

export default Index;