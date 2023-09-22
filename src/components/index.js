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
    <div>
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <div className="container p-2">
      <ImageGallery />
      </div>
    </div>
  );
}

export default Index;