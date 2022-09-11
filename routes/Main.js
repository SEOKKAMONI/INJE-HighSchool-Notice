import { StyleSheet, View } from 'react-native';
import { useState } from 'react';
import { theme } from "../assets/Color"

import Schedule from "../components/Schedule/Schedule";
import LunchButton from "../components/Main/LunchButton";
import NoticeButton from "../components/Main/NoticeButton";

import { LunchNoticeContext } from '../context/LunchNoticeContext';

function Main() {
    const [checkLunch, setCheckLunch] = useState(false);

    return (
        <View style={styles.main}>
            <View style={styles.contentBox}>
                <LunchNoticeContext.Provider value={{checkLunch, setCheckLunch}}>
                    <Schedule />
                    <LunchButton />
                    <NoticeButton />
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