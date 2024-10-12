import { useEffect, useState } from "react";
import aarhusSilhouette from "../assets/citySilhoutte.png";
import startPage from "./StartPage.module.css";
import { ContentCon } from "../ContentCon/contentCon.jsx";

export const StartPage = ({ setPageNum }) => {
  return (
    <div className={startPage.con}>
      <div className={startPage.headerCon}>
        <div className={startPage.header}>AARHUS UNDERGROUND</div>
        <img className={startPage.img} src={aarhusSilhouette} />
        <div className={startPage.blackBox}></div>
        <img
          className={`${startPage.img} ${startPage.imgRotated}`}
          src={aarhusSilhouette}
        />
      </div>
      <ContentCon
        onClick={() => {
          console.log("Cliked");
        }}
        setPageNum={setPageNum}
      />
    </div>
  );
};
