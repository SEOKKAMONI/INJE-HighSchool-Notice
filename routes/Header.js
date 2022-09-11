import { StyleSheet, Text, View } from 'react-native';
import { useContext } from 'react';
import { LunchNoticeContext } from '../context/LunchNoticeContext';

import HeaderComponent from "../components/Header/HeaderComponent";
import LunchHeader from "../components/LunchHeader/LunchHeader";

function Header() {
    const { checkLunch } = useContext(LunchNoticeContext);
    if(checkLunch) {
        return (
            <View style={styles.header}>
                <LunchHeader />
            </View>
        )
    }
    else {
        return (
            <View style={styles.header}>
                <HeaderComponent />
            </View>
        )
    }
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