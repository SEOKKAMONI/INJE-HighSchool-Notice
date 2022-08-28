import { useState } from 'react';
import SurveyForm from './SurveyForm';

function SurveyInput() {
    const data = SurveyForm();

    const [survey, setSurvey] = useState(false);
    return survey;
}

export default SurveyInput;