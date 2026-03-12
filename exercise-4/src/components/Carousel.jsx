import React from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export const Carousel = ({ images }) => {
  /* You will need to  use  state to mnage the current image */
  const [imageIndex, setImageIndex] = React.useState(0);
  /* You will need to hanle the click on left and right button */
  function onleftClick(){
    if(imageIndex===0){
      setImageIndex(images.length-1);
    }else{
      setImageIndex(imageIndex-1);
    }
  }
  /* You will need to manage the cases when we are on the last image or first image*/
  function onRightClick(){
    if(imageIndex===images.length-1){
      setImageIndex(0);
    }else{
      setImageIndex(imageIndex+1);
    }
  }
  return (
    <div className="carousel">
      <BsArrowLeftCircleFill className="arrow arrow-left"onClick={onleftClick} />

      {/* YOu will need to display the current image, not the first one.. */}
      <img src={images[imageIndex].src} alt={images[imageIndex].alt} className="slide" />

      <BsArrowRightCircleFill className="arrow arrow-right" onClick={onRightClick} />
    </div>
  );
};

