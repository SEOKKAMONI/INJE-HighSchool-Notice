import {useState} from "react";
import "./DropDownBtn.css";
import arrowSvg from "../../img/arrow.svg"

export default function DropDownBtn() {
    const [showDrop, setShowDrop] = useState(false);
    const ShowDropDownItems = () => {
        setShowDrop(!showDrop)
    }
    return (
        <div className="drop-down-menu">
            <button className="drop-down-btn"
                onClick={() => ShowDropDownItems()}
            >
                <span className="grade-item">1학년</span>
                <img src={arrowSvg} className="arrowSvg" />
            </button>
            <ul
                className={showDrop ? "drop-down-items" : "drop-down-items drop-down-hidden"}
            >
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