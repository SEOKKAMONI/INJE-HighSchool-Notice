import "./GradeClassView.css";
import { DataContext } from "../../context/DataContext";
import { SurveyContext } from "../../context/SurveyContext";
import { useEffect, useState, useContext } from "react";

function GradeClassView() {
    const { grade, Class } = useContext(DataContext);
    const { survey } = useContext(SurveyContext);

    return (
        <div>
            {
                survey ? (
                    <div className="GradeClass">
                        {grade}학년 {Class}반
                    </div>
                ) : (
                    <div></div>
                )
            }
        </div>
    )
}

export default GradeClassView;