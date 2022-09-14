import { useState, useContext } from 'react';
import { theme } from "../assets/Color"

import { LunchNoticeContext } from '../context/LunchNoticeContext';

import Schedule from "../components/Schedule/Schedule";
import MealButton from "../components/Main/MealButton";
import NoticeButton from "../components/Main/NoticeButton";
import MealPage from '../pages/MealPage';
import Header from './Header';

import "./Main.css";

function Main() {
    const { checkLunch } = useContext(LunchNoticeContext);

    if (!checkLunch) {
        return (
            <div className='main'>
                <div className='content-box'>
                    <Schedule />
                    <MealButton />
                    <NoticeButton />
                </div>
            </div>
        )
    }
    else if (checkLunch) {
        return (
            <div className='main'>
                <div className='content-box'>
                    <MealPage />
                </div>
            </div>
        )
    }
}

export default Main