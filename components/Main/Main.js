import "./Main.css";
import arrowSVG from "../../img/chevron.left.svg";
import Schedule from "../Schedule/Schedule";
import DropDownBtn from "../DropDownBtn/DropDownBtn";

export default function Main() {
    return (
        <div className="main-container">
            {/* 시간표, 급식표 나오는 부분 */}
            <div className="main-content">
                {/* content 부분 header */}
                <div className="main-content-header">
                    <div className="content-header__logo">
                        {/* header 안 내용 */}
                        <span className="logo__title">
                            <span className="title__text">
                                시간표
                            </span>
                            <img src={arrowSVG} />
                        </span>
                    </div>
                    <DropDownBtn />
                </div>
                {/* content-frame */}
                <div className="main-content-frame">
                    <Schedule />
                </div>
            </div>
        </div>
    )
}