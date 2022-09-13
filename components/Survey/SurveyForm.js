import { useEffect, useState, useContext } from "react";
import React from "react";
import "./Survey.css";
import { DataContext } from "../../context/DataContext";
import { SurveyContext } from '../../context/SurveyContext';

export default function SurveyForm() {
    // const { grade, setGrade, Class, setClass } = useContext(DataContext);
    // const { setSurvey } = useContext(SurveyContext);

    // useEffect(() => {
    // }, [grade]);

    // useEffect(() => {
    // }, [Class]); 

    // function onClick(e) {
    //     e.preventDefault();
    //     setSurvey(true)
    // }

    return (
        <div className="survey-content">
            <div className="survey-frame">
                <div className="survey-title">학년, 반을 설정해주세요.</div>
                <form className="survey-form">
                    <div className="survey-grade">
                        <input type="text" className="grade-input" onChange={e => setGrade(e.target.value)} placeholder={"학년"} />
                    </div>
                    <div className="survey-class">
                        <input type="text" className="class-input" onChange={e => setGrade(e.target.value)} placeholder={"반"} />
                    </div>
                </form>
            </div>
            {/* <form className="form">
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
            </form> */}

        </div>
    )

}
