import SurveyForm from "../components/Survey/SurveyForm";
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from "react-redux";

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