import { StyleSheet, View } from 'react-native';
import { useState } from 'react';
import { theme } from "../assets/Color"

import Schedule from "../components/Schedule/Schedule";
import Lunch from "../components/Main/Lunch";
import Notice from "../components/Main/Notice";

import { LunchNoticeContext } from '../context/LunchNoticeContext';

function Main() {
    const [checkLunch, setCheckLunch] = useState(false);

    return (
        <View style={styles.main}>
            <View style={styles.contentBox}>
                <LunchNoticeContext.Provider value={{checkLunch, setCheckLunch}}>
                    <Schedule />
                    <Lunch />
                    <Notice />
                </LunchNoticeContext.Provider>
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