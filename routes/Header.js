import { StyleSheet, Text, View } from 'react-native';
import HeaderComponent from "../components/Main/HeaderComponent";


function Header() {
    return (
        <View style={styles.header}>
            <HeaderComponent />
        </View>

    )
}

const styles = StyleSheet.create({
    header: {
        flex: 0.5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-between',
        padding: 10,
    },
})

export default Header