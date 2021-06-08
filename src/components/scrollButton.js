import React, { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import { Button, Circle } from "./styles";


const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <>

    <Circle onClick={scrollToTop}
    style={{ display: visible ? "inline" : "none" }}>
      <p id="circle">Back to Top</p>
      </Circle>
    
    </>
  );
};

export default ScrollButton;
