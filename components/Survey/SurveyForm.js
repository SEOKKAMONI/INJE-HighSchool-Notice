import { useEffect, useState, useContext } from "react";
import React from "react";
import "./Survey.css";
import { DataContext } from "../../context/DataContext";
import { SurveyContext } from '../../context/SurveyContext';

export default function SurveyForm() {
    const [foucus, setFocus] = useState(false);
    const [btnFocus, setBtnFocus] = useState(false);

    const { grade, setGrade, Class, setClass } = useContext(DataContext);
    const { setSurvey } = useContext(SurveyContext);

    useEffect(() => {
        if(grade > 0) {
            setFocus(true);
        }
    }, [grade]);

    useEffect(() => {
        if(Class > 0) {
            setBtnFocus(true);
        } else {
            setFocus(false);
        }
    }, [Class]); 

    useEffect(() => {
        setFocus(false);
        setBtnFocus(false);
        setClass(0);
        setGrade(0);
    }, [setSurvey])

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
                        <input type="number" className= {foucus ? "class-input-focus" : "class-input"} onChange={e => setClass(e.target.value)} placeholder={"반"} />
                    </div>
                    <button className={btnFocus ? "survey-btn-focus" : "survey-btn"} onClick={btnFocus ? (e) => onClick(e) : ""}>
                        설정 하기
                    </button>
                </form>
            </div>
        </div>
    )

}
