import { StyleSheet, View } from 'react-native';
import { theme } from "../assets/Color"

import Schedule from "../components/Schedule/Schedule";
import Lunch from "../components/Main/Lunch";
import Notice from "../components/Main/Notice";


function Main() {
    return (
        <View style={styles.main}>
            <View style={styles.contentBox}>
                <Schedule />
                <Lunch />
                <Notice />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 10,
        backgroundColor: "#fff"
    },
    contentBox: {
        position: "relative",
        top: 30,
        flex: 1,
        alignItems: "center",

    },
})

export default Main