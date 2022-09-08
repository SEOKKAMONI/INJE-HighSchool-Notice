import "./DropdownBtn.css";
import { DataContext } from "../../context/DataContext";
import { SurveyContext } from "../../context/SurveyContext";
import { useEffect, useState, useContext } from "react";

function DropdownBtn() {
    const { grade, Class } = useContext(DataContext);
    const { survey } = useContext(SurveyContext);

    return (
        <div>
            {
                survey ? (
                    <div className="DropDown">
                        {grade} 학년 {Class} 반
                    </div>
                ) : (
                    <div>
                    </div>
                )
            }
        </div>
    )
}

export default DropdownBtn;