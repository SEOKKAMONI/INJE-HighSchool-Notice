import SurveyForm from "../components/Survey/SurveyForm";
import { StyleSheet, Text, View } from 'react-native';
import { useState } from "react";

function ClassSurvey() {
    const [grade, setGrade] = useState(1);
    const [Class, setClass] = useState(1);

    return (
        <View className="container" style={styles.container}>
            <SurveyForm 
                style={styles.SurveyForm} 
                currentGrade={grade}
                currentClass={Class}
            />
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