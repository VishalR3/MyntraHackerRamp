import "./Crousel.css";
import image from '../../assets/images/1.webp'
import { Carousel } from "react-bootstrap";
import data from "../../assets/data.jsx";
import React from "react";

function CrouselView() {
  return (
    <div className="container-fluid crousel-wrapper">
     <Carousel>
       {
         data["carousel-images"].map(item=>{
           return(  <Carousel.Item>
           <img
             className="d-block w-100"
             src={item}
             alt="First slide"
             width="100%"
             
           />
         
            </Carousel.Item>
           )
         })
       }
 
  </Carousel>
    </div>
  );
}

export default CrouselView;
