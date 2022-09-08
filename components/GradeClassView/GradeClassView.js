import "./GradeClassView.css";
import { DataContext } from "../../context/DataContext";
import { SurveyContext } from "../../context/SurveyContext";
import { useContext } from "react";

function GradeClassView() {
    const { grade, Class } = useContext(DataContext);
    const { setSurvey, survey } = useContext(SurveyContext);

    const SurveyOnclick = () => {
        setSurvey(false)
    }

    return (
        <div>
            {
                survey ? (
                    <button className="GradeClass" onClick={SurveyOnclick}>
                        {grade}학년 {Class}반
                    </button>
                ) : (
                    <div></div>
                )
            }
        </div>
    )
}

export default GradeClassView;