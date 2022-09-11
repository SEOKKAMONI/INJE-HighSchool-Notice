import { StyleSheet, View } from 'react-native';
import { useState, useContext } from 'react';
import { theme } from "../assets/Color"

import { LunchNoticeContext } from '../context/LunchNoticeContext';

import Schedule from "../components/Schedule/Schedule";
import LunchButton from "../components/Main/LunchButton";
import NoticeButton from "../components/Main/NoticeButton";
import LunchPage from '../pages/LunchPage';
import Header from './Header';

function Main() {
    const { checkLunch } = useContext(LunchNoticeContext);

    if (!checkLunch) {
        return (
            <View style={styles.main}>
                <View style={styles.contentBox}>
                    <Schedule />
                    <LunchButton />
                    <NoticeButton />
                </View>
            </View>
        )
    }
    else if (checkLunch) {
        return (
            <View style={styles.main}>
                <View style={styles.contentBox}>
                    <LunchPage />
                </View>
            </View>
        )
    }
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