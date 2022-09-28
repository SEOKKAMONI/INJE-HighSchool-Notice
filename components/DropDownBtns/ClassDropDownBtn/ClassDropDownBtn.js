import { useState,useContext } from "react";
import "./ClassDropDownBtn.css";
import arrowSvg from "../../../img/arrow.svg";
import { GradeClassContext } from "../../../context/GradeClassData";

export default function ClassDownBtn() {
    const { Class, setClass } = useContext(GradeClassContext);
     
    return (
        <div className="drop-down-menu">
            <button className="drop-down-btn">
                <span className="class-item">1반</span>
                <img src={arrowSvg} className="arrowSvg" />
            </button>
            <ul className="drop-down-items">
                <li className="drop-down-item">
                    <span>1반</span>
                </li>
                <li className="drop-down-item">
                    <span>2반</span>
                </li>
                <li className="drop-down-item">
                    <span>3반</span>
                </li>
                <li className="drop-down-item">
                    <span>4반</span>
                </li>
            </ul>
        </div>
    )
}