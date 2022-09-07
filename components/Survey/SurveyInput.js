import { useEffect, useState } from 'react';

function SurveyInput() {
    const { survey } = useContext(SurveyContext);

    return <App checkSurvey = {survey} />;
}

export default SurveyInput;