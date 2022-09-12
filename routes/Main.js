import { StyleSheet, View } from 'react-native';
import { useState, useContext } from 'react';
import { theme } from "../assets/Color"

import { LunchNoticeContext } from '../context/LunchNoticeContext';

import Schedule from "../components/Schedule/Schedule";
import MealButton from "../components/Main/MealButton";
import NoticeButton from "../components/Main/NoticeButton";
import MealPage from '../pages/MealPage';
import Header from './Header';

function Main() {
    const { checkLunch } = useContext(LunchNoticeContext);

    if (!checkLunch) {
        return (
            <View style={styles.main}>
                <View style={styles.contentBox}>
                    <Schedule />
                    <MealButton />
                    <NoticeButton />
                </View>
            </View>
        )
    }
    else if (checkLunch) {
        return (
            <View style={styles.main}>
                <View style={styles.contentBox}>
                    <MealPage />
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