import "./Header.css";
import DropdownBtn from "../DropDownBtn/DropdownBtn";

function HeaderComponent() {
    return (
        <div className="header_content">
            <div className="logo">
                인제알리미
            </div>
            <DropdownBtn />
        </div>
    )
}

export default HeaderComponent;