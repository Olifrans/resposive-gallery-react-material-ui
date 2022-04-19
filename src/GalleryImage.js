import React, { useState } from "react";
import "./galleryImage.css";
import CloseIcon from '@mui/icons-material/Close';

import Img01 from "./img/Img01.jpeg";
import Img02 from "./img/Img02.jpeg";
import Img03 from "./img/Img03.jpeg";
import Img04 from "./img/Img04.jpeg";
import Img05 from "./img/Img05.jpeg";
import Img06 from "./img/Img06.jpeg";
import Img07 from "./img/Img07.jpeg";
import Img08 from "./img/Img08.webp";

const GalleryImage = () => {

    
  let data = [
    {
      id: 1,
      imgSrc: Img01,
    },
    {
      id: 2,
      imgSrc: Img02,
    },
    {
      id: 3,
      imgSrc: Img03,
    },
    {
      id: 4,
      imgSrc: Img04,
    },
    {
      id: 5,
      imgSrc: Img05,
    },
    {
      id: 6,
      imgSrc: Img06,
    },
    {
      id: 7,
      imgSrc: Img07,
    },
    {
      id: 8,
      imgSrc: Img08,
    },
  ];

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
        <CloseIcon />
      </div>

      <div className="gallery">
        {data.map((item, index) => {
          return (
            <div className="pics" key={index} onClick={() => getImg(item.imgSrc)}>
              <img src={item.imgSrc} style={{ width: "100%" }} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default GalleryImage;
