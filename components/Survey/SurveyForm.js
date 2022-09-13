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
        if(Class <= 0 && grade <= 0) {
            alert("학년 , 반을 입력해주세요 !!");
        }
        else if(grade <= 0) {
            alert("학년을 입력해주세요 !!");
        }
        else if(Class <= 0) {
            alert("반을 입력해주세요 !!");  
        }
        else {
            setSurvey(true);
            console.log(Class)
        }
    }

    return (
        <div className="survey-content">
            <div className="survey-frame">
                <div className="survey-title">학년, 반을 설정해주세요.</div>
                <form className="survey-form">
                    <div className="survey-grade">
                        <input type="number" className="grade-input" onChange={e => setGrade(e.target.value)} placeholder={"학년"} />
                    </div>
                    <div className="survey-class">
                        <input type="number" className="class-input" onChange={e => setClass(e.target.value)} placeholder={"반"} />
                    </div>
                    <button className="survey-btn" onClick={(e) => onClick(e)}>
                        설정 하기
                    </button>
                </form>
            </div>
        </div>
    )

}
