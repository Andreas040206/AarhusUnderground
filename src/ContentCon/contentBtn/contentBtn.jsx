import btnStyles from "./contentBtn.module.css";

export const ContentBtn = ({ imgSrc, header, text, setPageNum }) => {
  return (
    <div
      onClick={() => {
        setPageNum();
      }}
      className={btnStyles.con}
    >
      <img src={imgSrc} className={btnStyles.img} />
      <div className={btnStyles.textCon}>
        <span className={btnStyles.header}>{header}</span>
        <span className={btnStyles.text}>{text}</span>
      </div>
    </div>
  );
};
