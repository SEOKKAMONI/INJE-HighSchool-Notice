import "./Header.css";
import GradeClassView from "../GradeClassView/GradeClassView";

function HeaderComponent() {
    return (
        <div className="header_content">
            <div className="logo">
                인제알리미
            </div>
            <GradeClassView />
        </div>
    )
}

export default HeaderComponent;