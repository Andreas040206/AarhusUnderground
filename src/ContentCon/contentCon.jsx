import contentCon from "./contentCon.module.css";
import { ContentBtn } from "./contentBtn/contentBtn.jsx";
import godsbanenImgSrc from "../assets/godsbanen.webp";
import ringgadebroenImgSrc from "../assets/ringgadebroen.jpg";
import kulbroenImgSrc from "../assets/kulbroen.webp";
import molslinjenImgSrc from "../assets/molslinjen.jpg";

export const ContentCon = ({ setPageNum }) => {
  return (
    <div className={contentCon.con}>
      <ContentBtn
        imgSrc={godsbanenImgSrc}
        header={"GODSBANEN"}
        text={
          "Godsbanen er et kreaticvt og speandende sted med mange unge menensker osv. Vi slutter"
        }
        setPageNum={() => {
          setPageNum(2);
        }}
      />
      <ContentBtn
        imgSrc={ringgadebroenImgSrc}
        header={"RINGGADEBROEN"}
        text={
          "Under ringadebroen findes der et livligt ungdomsmiljo med koncerter og barer."
        }
        setPageNum={() => {
          setPageNum(3);
        }}
      />
      <ContentBtn
        imgSrc={kulbroenImgSrc}
        header={"KULBROEN"}
        text={
          "Ved kulbroen findes kunst og spaendende mennesker som har meget forskellige ting"
        }
        setPageNum={() => {
          setPageNum(4);
        }}
      />
      <ContentBtn
        imgSrc={molslinjenImgSrc}
        header={"DEN GAMLE MOLSLINJE"}
        text={
          "Godsbanen er et kreaticvt og speandende sted med mange unge menensker osv. Vi slutter"
        }
        setPageNum={() => {
          setPageNum(5);
        }}
      />
      <div className={contentCon.mapsCon}>
        <iframe
          className={contentCon.map}
          src="https://www.google.com/maps/d/embed?mid=1Cw5BHmFKQe-ASUTe4PbIDiTt-HDLZOk&ehbc=2E312F&noprof=1&z=12"
        ></iframe>
      </div>
    </div>
  );
};
