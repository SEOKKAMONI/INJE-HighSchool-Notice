import { StyleSheet, Text, View } from 'react-native';
import { useState } from "react";

import SurveyForm from "../components/Survey/SurveyForm";
import SurveyInput from "../components/Survey/SurveyInput";
import { SurveyContext } from "../context/SurveyContext";

function ClassSurvey() {
    const [grade, setGrade] = useState(1);
    const [Class, setClass] = useState(1);
    const [survey, setSurvey] = useState(false);

    return (
        <View className="container" style={styles.container}>
            <SurveyContext.Provider value={{grade,setGrade, Class,setClass, survey, setSurvey}}>
                <SurveyForm style={styles.SurveyForm} />
            </SurveyContext.Provider>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    SurveyForm: {
        flex: 1,
        backgroundColor: "blue"
    }
})


export default ClassSurvey;