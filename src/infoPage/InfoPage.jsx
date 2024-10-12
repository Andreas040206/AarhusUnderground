import style from "./infoPage.module.css";
import cityImgSrc from "../assets/citySilhoutte.png";

export const InfoPage = ({
  header,
  text1,
  text2,
  text3,
  mapslink,
  imgSrc,
  setPageNum,
}) => {
  return (
    <div className={style.con}>
      <button
        onClick={() => {
          setPageNum(1);
        }}
        className={style.backBtn}
      >
        ↝
      </button>
      <img src={imgSrc} className={style.img} />
      <div className={style.textCon}>
        <header className={style.header}>{header}</header>
        <span>{text1}</span>
      </div>
      <div className={style.blackTextBoxCon}>
        <img src={cityImgSrc} className={style.cityImg} />
        <div className={style.blackTextBox}>{text2}</div>
        <img
          src={cityImgSrc}
          className={`${style.cityImg} ${style.cityImgRotated}`}
        />
      </div>
      <div className={style.bottomTextBoxCon}>
        <div className={style.bottomTextBox}>{text3}</div>
      </div>
      <div className={style.mapsCon}>
        <iframe className={style.maps} src={mapslink} />
      </div>
    </div>
  );
};
