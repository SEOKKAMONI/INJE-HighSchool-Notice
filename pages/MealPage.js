import { useState } from 'react';
import "./MealPage.css";

function MainPage() {

    return (
        <div className='lunch-content'>
            <div className='breakfast'>
                <div className='meal-title'>
                    아침 식사
                </div>
            </div>
            <div className='lunch'>
                <div className='meal-title'>
                    점심 식사
                </div>
            </div>
            <div className='dinner'>
                <div className='meal-title'>
                    저녁 식사
                </div>
            </div>
        </div>
    )
}

export default MainPage;