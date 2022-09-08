import { StyleSheet, Text, View } from 'react-native';
import { useState } from "react";
import { DataContext } from "../context/DataContext";

import SurveyForm from "../components/Survey/SurveyForm";
import DropdownBtn from "../components/DropDownBtn/DropdownBtn";

function ClassSurvey() {

    return (
        <View className="container" style={styles.container}>
            <SurveyForm style={styles.SurveyForm} />
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