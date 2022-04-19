import React, { useState } from "react";
import "./galleryImage.css";
import CloseIcon from "@mui/icons-material/Close";
import data from "./data";

const GalleryImage = () => {

  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState("");

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };

  return (
    <>
      <div className={model ? "model open" : "model"}>
        <img src={tempimgSrc} />
        
        <CloseIcon onClick={() => setModel(false)} />
      </div>

      <div className="gallery">
        {data.imgData.map((item, index) => {
          return (
            <div
              className="pics"
              key={index}
              onClick={() => getImg(item.imgSrc)}
            >
              <img src={item.imgSrc} style={{ width: "100%" }} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default GalleryImage;
