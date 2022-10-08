import "./Main.css";
import arrowSVG from "../../img/chevron.left.svg";
import Schedule from "../Schedule/Schedule";
import DropDownBtns from "../DropDownBtns/DropDownBtns";
import MealPlanner from "../MealPlanner/MealPlanner";
import { useState } from "react";

export default function Main() {
    const [pageStatus, setPageStatus] = useState(true);

    return (
        <div className="main-container">
            {/* 시간표, 급식표 나오는 부분 */}
            <div className="main-content">
                {/* content 부분 header */}
                <div className="main-content-header">
                    <div className="content-header__logo">
                        {/* header 안 내용 */}
                        <span className="logo__title" onClick={() => setPageStatus(!pageStatus)}>
                            <span className="title__text">
                                {
                                    pageStatus ? <span>시간표</span> : <span>급식표</span>
                                }
                            </span>
                            <img src={arrowSVG} />
                        </span>
                    </div>
                    <DropDownBtns />
                </div>
                {/* content-frame */}
                <div className="main-content-frame">
                    {
                        pageStatus ? <Schedule/> : <MealPlanner/>
                    }
                </div>
            </div>
        </div>
    )
}