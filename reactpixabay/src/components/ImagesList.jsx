import React from "react";
import Image from "./Image";

const ImagesList = ({ images }) => {
  console.log(images);
  return (
    <div className="col-12 p5 row">
      {images.map((img, i) => {
        console.log(img);
        return <Image key={i} image={img} />;
      })}
    </div>
  );
};

export default ImagesList;
