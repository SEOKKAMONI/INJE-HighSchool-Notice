import { StyleSheet, Text, View } from 'react-native';
import ScheduleTable from "./ScheduleTable";

import { theme } from "../../assets/Color"


function Schedule() {
    return (
        <View style={styles.scheduleContent}>
            <ScheduleTable/>
        </View >
    )
}

const styles = StyleSheet.create({
    scheduleContent: {
        width: "338px",
        height: "280px",
        borderRadius: 15,
        padding: 5,
        marginBottom: 20,
        backgroundColor: theme.ScheduleContent,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
});

export default Schedule;