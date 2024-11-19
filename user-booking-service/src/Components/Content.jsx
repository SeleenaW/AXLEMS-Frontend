import React from "react";
import img from "./Assets/background.jpg";
const ImageComponent = ({ src, alt, width, height, className }) => {
  return (
    <div className={className} style={{ textAlign: "center" }}>
      <img
        src={img}
        alt={alt}
        width={width}
        height={height}
        style={{ borderRadius: "8px", objectFit: "cover" }}
      />
    </div>
  );
};

export default ImageComponent;
