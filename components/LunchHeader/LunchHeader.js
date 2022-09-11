import { useContext } from "react";
import "./LunchHeader.css";
import BackBtn from "../../img/back-btn.svg";
import { LunchNoticeContext } from "../../context/LunchNoticeContext";

function LunchHeader() {

    const { setCheckLunch } = useContext(LunchNoticeContext);

    const BackOnClick = () => {
        setCheckLunch(false);
    }

    return (
        <div className="header_content">
            <a href="#" onClick={BackOnClick} className="back-btn">
                <img id="back-img" src={BackBtn} />
            </a>
        </div>
    )
}

export default LunchHeader;