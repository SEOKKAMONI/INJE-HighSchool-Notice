import { useEffect, useState } from 'react';
import SurveyForm from './SurveyForm';

function SurveyInput() {
    const data = SurveyForm();

    const [survey, setSurvey] = useState(true);
    return survey;
}

export default SurveyInput;