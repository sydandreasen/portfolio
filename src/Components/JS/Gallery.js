import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Tooltip from "@material-ui/core/Tooltip";

export const Gallery = (props) => {
  const [currentImg, setCurrentImg] = useState({
    img: props.images[0],
    idx: 0,
  });

  let images = props.images;
  const title = props.projectTitle;

  return (
    <div className="MuiCardMedia-root MuiCardMedia-media">
      {images.length > 1 ? (
        <Tooltip title="Previous Project Image">
          <IconButton
            className="arrow arrow-left"
            onClick={() => {
              if (currentImg.idx === 0) {
                setCurrentImg({
                  img: images[images.length - 1],
                  idx: images.length - 1,
                });
              } else {
                setCurrentImg({
                  img: images[currentImg.idx - 1],
                  idx: currentImg.idx - 1,
                });
              }
            }}
          >
            <ArrowBackIosIcon />
          </IconButton>
        </Tooltip>
      ) : (
        ""
      )}
      <img
        src={currentImg.img}
        alt={title + " project image " + (currentImg.idx + 1)}
        className="MuiCardMedia-img"
      />
      {images.length > 1 ? (
        <Tooltip title="Next Project Image">
          <IconButton
            className="arrow arrow-right"
            onClick={() => {
              if (currentImg.idx === images.length - 1) {
                setCurrentImg({ img: images[0], idx: 0 });
              } else {
                setCurrentImg({
                  img: images[currentImg.idx + 1],
                  idx: currentImg.idx + 1,
                });
              }
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Tooltip>
      ) : (
        ""
      )}
    </div>
  );
};
