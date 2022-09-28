import { useState,useContext } from "react";
import "./ClassDropDownBtn.css";
import arrowSvg from "../../../img/arrow.svg";
import { GradeClassContext } from "../../../context/GradeClassData";

export default function ClassDownBtn() {
    const { Class, setClass } = useContext(GradeClassContext);
     
    return (
        <div className="drop-down-menu">
            <button className="drop-down-btn">
                <span className="class-item">{Class}반</span>
                <img src={arrowSvg} className="arrowSvg" />
            </button>
            <ul className="drop-down-items">
                <li className="drop-down-item" onClick={() => setClass("1")}>
                    <span>1반</span>
                </li>
                <li className="drop-down-item" onClick={() => setClass("2")}>
                    <span>2반</span>
                </li>
                <li className="drop-down-item" onClick={() => setClass("3")}>
                    <span>3반</span>
                </li>
                <li className="drop-down-item" onClick={() => setClass("4")}>
                    <span>4반</span>
                </li>
            </ul>
        </div>
    )
}