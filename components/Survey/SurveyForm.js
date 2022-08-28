import { useEffect, useState } from "react";
import SurveyInput from "./SurveyInput";
import "./Survey.css";
function SurveyForm() {
    const [grade, setGrade] = useState("1");
    const [Class, setClass] = useState("1");

    useEffect(() => {
        console.log(grade);
    }, [grade]);

    useEffect(() => {
        console.log(Class);
    }, [Class]); 

    const onClick = (e) => {
        e.preventDefault();
        console.log(grade, Class);

        return [grade, Class];
    }


    return (
        <div>
            <form className="form">
                <div className="survey_input_box">
                    <div className="grade">
                        <input type="number" onChange={e => setGrade(e.target.value)} value={grade} className="item" />
                        <span className="form_text item">학년</span>
                    </div>
                    <div className="class">
                        <input type="number" onChange={e => setClass(e.target.value)} value={Class} className="item" />
                        <span className="form_text item">반</span>
                    </div>
                </div>
                <button className="survey_button" onClick={() => onClick}>입력하기</button>
            </form>
        </div>
    )
}

export default SurveyForm;