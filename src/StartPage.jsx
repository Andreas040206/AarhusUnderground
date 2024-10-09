import { useState } from "react";
import aarhusSilhouette from "./assets/citySilhoutte.png";
import startPage from "./StartPage.module.css";
import ContentCon from "./ContentCon/contentCon";

function App() {
  const [isAnimating, setIsAnimating] = useState(false);

  setTimeout(() => {
    setIsAnimating(true);
  }, 2000);

  return (
    <div className={startPage.con}>
      <div
        className={
          isAnimating
            ? `${startPage.logoCon} ${startPage.logoConAni} ${startPage.logoConAni2}`
            : startPage.logoCon
        }
      ></div>
      <ContentCon isAnimating={isAnimating} />
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
}

export default App;
