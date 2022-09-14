import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useContext } from "react";
import { theme } from "../../assets/Color"
import { LunchNoticeContext } from '../../context/LunchNoticeContext';
import "./MealButton.css";


function LunchButton() {
    const { checkLunch, setCheckLunch } = useContext(LunchNoticeContext);

    const EnterLunchTable = () => {
        setCheckLunch(true);
    }


    return (
        <div className='meal-btn-content'>
            <div className='meal-sction'>
                <div className='meal-text-box'>
                    <div className='meal-text-content'>
                        급식표
                    </div>
                    <div className='meal-content-sub-text'>
                        급식표를 손쉽게 확인할 수 있습니다.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LunchButton;