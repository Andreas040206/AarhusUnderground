// Files
import { Godsbanen } from "./Pages/godsbanen/godsbanen";
import { Ringgadebroen } from "./Pages/Ringgadebroen/ringgadebroen";
import { InfoPage } from "./infoPage/InfoPage";
import { StartPage } from "./StartPage/StartPage.jsx";
import { StartAnimation } from "./startAnimation/startAnimation.jsx";

//Img
import godsbanenImgSrc from "./assets/godsbanen.webp";
import ringgadebroenImgSrc from "./assets/ringgadebroen.jpg";
import kulbroenImgSrc from "./assets/kulbroen.webp";
import molslinjenImgSrc from "./assets/molslinjen.jpg";

import { useState, useEffect } from "react";

export const Content = () => {
  const [pageNum, setPageNum] = useState(0);

  useEffect(() => {
    setPageNum(0);

    setTimeout(() => {
      setPageNum(1);
      console.log("No Animation");
    }, 7000);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pageNum]);

  return (
    <>
      {pageNum == 0 ? (
        <>
          <StartAnimation setPageNum={setPageNum} />
          <StartPage setPageNum={setPageNum} />
        </>
      ) : null}
      {pageNum == 1 ? (
        <StartPage setPageNum={setPageNum} />
      ) : pageNum == 2 ? (
        <InfoPage
          header={"GODSBANEN"}
          text1={godsbanenText1}
          text2={godsbanenText1}
          text3={godsbanenText1}
          imgSrc={godsbanenImgSrc}
          setPageNum={setPageNum}
          mapslink={
            "https://www.google.com/maps/d/embed?mid=1gi_LftuCA2WdYJE4uYcXXchzEzrWWDU&ehbc=2E312F&z=12"
          }
        />
      ) : pageNum == 3 ? (
        <InfoPage
          header={"RINGGADEBROEN"}
          text1={godsbanenText1}
          text2={godsbanenText1}
          text3={godsbanenText1}
          imgSrc={ringgadebroenImgSrc}
          setPageNum={setPageNum}
          mapslink={
            "https://www.google.com/maps/d/embed?mid=1HU1hjItC-tWZXXkah8QX_wAmwlGLa20&ehbc=2E312F&z=12"
          }
        />
      ) : pageNum == 4 ? (
        <InfoPage
          header={"KULBROEN"}
          text1={godsbanenText1}
          text2={godsbanenText1}
          text3={godsbanenText1}
          imgSrc={kulbroenImgSrc}
          setPageNum={setPageNum}
          mapslink={
            "https://www.google.com/maps/d/embed?mid=1_ZtP6CokIQD2CyMxA_MwpNLXPW4Sc0E&ehbc=2E312F&z=12"
          }
        />
      ) : pageNum == 5 ? (
        <InfoPage
          header={"DEN GAMLE MOLSLINJEN"}
          text1={godsbanenText1}
          text2={godsbanenText1}
          text3={godsbanenText1}
          imgSrc={molslinjenImgSrc}
          setPageNum={setPageNum}
          mapslink={
            "https://www.google.com/maps/d/embed?mid=1dPLyIK8fwSFE-CaOG8HYFXluLHvIr0k&ehbc=2E312F&z=12"
          }
        />
      ) : null}
    </>
  );
};

const godsbanenText1 =
  "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi non orci laoreet, molestie elit non, imperdiet purus. Vestibulum rhoncus sem a magna iaculis, sit amet congue dui viverra. Ut ante ante, efficitur vel velit at, pulvinar condimentum neque. Pellentesque vitae enim a nisi facilisis viverra. Quisque vel convallis lacus, vel viverra magna. Suspendisse vel tincidunt enim,";
