import { useEffect, useState, useContext } from "react";
import React from "react";
import "./Survey.css";
import { SurveyContext } from "../../context/SurveyContext";

export default function SurveyForm() {
    const data = useContext(SurveyContext)
    console.log(data)
    return (
        <div>
            <form className="form">
                <div className="survey_input_box">
                    <div className="grade">
                        <input type="number" value={1} className="item" />
                        <span className="form_text item">학년</span>
                    </div>
                    <div className="class">
                        <input type="number" value={1} className="item" />
                        <span className="form_text item">반</span>
                    </div>
                </div>
                <button className="survey_button">입력하기</button>
            </form>
        </div>
    )

}
