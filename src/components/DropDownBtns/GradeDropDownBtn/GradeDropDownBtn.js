import { useState, useContext } from "react";
import "./GradeDropDownBtn.css";
import arrowSvg from "../../../img/arrow.svg"
import { GradeClassContext } from "../../../context/GradeClassData";

export default function DropDownBtn() {
    const { Grade, setGrade } = useContext(GradeClassContext);

    return (
        <div className="drop-down-menu">
            <button className="drop-down-btn">
                <span className="grade-item">{Grade}학년</span>
                <img src={arrowSvg} className="arrowSvg" />
            </button>
            <ul className="drop-down-items">
                <li className="drop-down-item" onClick={() => setGrade("1")}>
                    <span>1학년</span>
                </li>
                <li className="drop-down-item" onClick={() => setGrade("2")}>
                    <span>2학년</span>
                </li>
                <li className="drop-down-item" onClick={() => setGrade("3")}>
                    <span>3학년</span>
                </li>
            </ul>
        </div>
    )
}