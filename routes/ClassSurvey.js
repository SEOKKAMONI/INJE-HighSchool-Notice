import { StyleSheet, Text, View } from 'react-native';
import { useState } from "react";
import { DataContext } from "../context/DataContext";

import SurveyForm from "../components/Survey/SurveyForm";

function ClassSurvey() {
    const [grade, setGrade] = useState(1);
    const [Class, setClass] = useState(1);

    return (
        <View className="container" style={styles.container}>
            <DataContext.Provider value={{grade,setGrade, Class,setClass}}>
                <SurveyForm style={styles.SurveyForm} />
            </DataContext.Provider>
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