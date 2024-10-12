import startPage from "./startAnimation.module.css";
import { useEffect, useState } from "react";

//Img
import aarhusSilhouette from "../assets/citySilhoutte.png";

export const StartAnimation = ({ setPageNum }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [boksSwitch, setBoksSwitch] = useState(false);

  setTimeout(() => {
    setScroll(true);
    console.log("Scroll true");
  }, 6500);

  setTimeout(() => {
    setBoksSwitch(true);
  }, 3500);

  setTimeout(() => {
    setIsAnimating(true);
  }, 2000);

  if (!scroll) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return (
    <div className={startPage.con}>
      <div
        className={
          boksSwitch == false
            ? isAnimating
              ? `${startPage.logoCon} ${startPage.logoConAni} ${startPage.logoConAni2}`
              : startPage.logoCon
            : startPage.newBoks
        }
      ></div>
      <div className={startPage.blackBoxBig}></div>
      <div
        className={
          isAnimating
            ? `${startPage.imgCon} ${startPage.imgConAni}`
            : startPage.imgCon
        }
      >
        <div
          className={
            isAnimating
              ? `${startPage.header} ${startPage.headerAni} ${startPage.headerAni2}`
              : startPage.header
          }
        >
          AARHUS UNDERGROUND
        </div>
        {isAnimating ? <></> : null}
        <img className={startPage.img} src={aarhusSilhouette} />
        <div
          className={
            isAnimating
              ? `${startPage.blackBox} ${startPage.blackBoxAni}`
              : startPage.blackBox
          }
        ></div>
        {isAnimating ? (
          <img
            className={`${startPage.img} ${startPage.imgRotated}`}
            src={aarhusSilhouette}
          />
        ) : null}
      </div>
    </div>
  );
};
