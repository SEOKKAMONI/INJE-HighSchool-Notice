import { useEffect, useState, useContext } from "react";
import React from "react";
import "./Survey.css";
import { DataContext } from "../../context/DataContext";
import { SurveyContext } from '../../context/SurveyContext';

export default function SurveyForm() {
    const { grade, setGrade, Class, setClass } = useContext(DataContext);
    const { setSurvey } = useContext(SurveyContext);

    useEffect(() => {
        console.log(grade);
    }, [grade]);

    useEffect(() => {
        console.log(Class);
    }, [Class]); 

    function onClick(e) {
        e.preventDefault();
        setSurvey(true)
        console.log("Correct !!")
    }

    return (
        <div>
            <form className="form">
                <div className="survey_input_box">
                    <div className="grade">
                        <input type="number" onChange={e => setGrade(e.target.value)} defaultValue={grade} className="item" />
                        <span className="form_text item">학년</span>
                    </div>
                    <div className="class">
                        <input type="number" onChange={e => setClass(e.target.value)} defaultValue={Class} className="item" />
                        <span className="form_text item">반</span>
                    </div>
                </div>
                <button className="survey_button" onClick={e => onClick(e)}>입력하기</button>
            </form>
        </div>
    )

}
