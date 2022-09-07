import { useEffect, useState } from 'react';

function SurveyInput() {
    const [survey, setSurvey] = useState(false);
    return <App Survey = {survey} />;
}

export default SurveyInput;