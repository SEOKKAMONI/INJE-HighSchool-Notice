import { useEffect, useState } from "react";
import React from "react";
import "./Survey.css";

export default function SurveyForm({currentGrade, currentClass}) {
    return (
        <div>
            <form className="form">
                <div className="survey_input_box">
                    <div className="grade">
                        <input type="number" value={currentGrade} className="item" />
                        <span className="form_text item">학년</span>
                    </div>
                    <div className="class">
                        <input type="number" value={currentClass} className="item" />
                        <span className="form_text item">반</span>
                    </div>
                </div>
                <button className="survey_button">입력하기</button>
            </form>
        </div>
    )

}
