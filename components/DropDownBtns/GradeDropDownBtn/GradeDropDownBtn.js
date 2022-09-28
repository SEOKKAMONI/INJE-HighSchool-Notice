import {useState} from "react";
import "./GradeDropDownBtn.css";
import arrowSvg from "../../../img/arrow.svg"

export default function DropDownBtn() {
    return (
        <div className="drop-down-menu">
            <button className="drop-down-btn">
                <span className="grade-item">1학년</span>
                <img src={arrowSvg} className="arrowSvg" />
            </button>
            <ul className="drop-down-items">
                <li className="drop-down-item">
                    <span>1학년</span>
                </li>
                <li className="drop-down-item">
                    <span>2학년</span>
                </li>
                <li className="drop-down-item">
                    <span>3학년</span>
                </li>
            </ul>
        </div>
    )
}