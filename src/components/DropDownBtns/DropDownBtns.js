import "./DropDownBtns.css";
import ClassDropDownBtn from "./ClassDropDownBtn/ClassDropDownBtn"
import GradeDropDownBtn from "./GradeDropDownBtn/GradeDropDownBtn"

export default function DropDownBtns() {
    return (
        <div className="DropDownBtns">
            <GradeDropDownBtn />
            <ClassDropDownBtn />
        </div>
    )
}