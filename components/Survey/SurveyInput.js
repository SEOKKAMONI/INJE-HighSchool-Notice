import { useEffect, useState } from 'react';

function SurveyInput() {
    const [survey, setSurvey] = useState(false);
    return <App checkSurvey = {survey} />;
}

export default SurveyInput;