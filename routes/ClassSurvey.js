import "./ClassSurvey.css";
import { useState } from "react";
import { DataContext } from "../context/DataContext";

import SurveyForm from "../components/Survey/SurveyForm";
import GradeClassView from "../components/GradeClassView/GradeClassView";

function ClassSurvey() {

    return (
        <div className="container">
            <SurveyForm />
            <GradeClassView />
        </div>
    )
}


export default ClassSurvey;