import { useEffect, useState } from 'react';
import "./MealPage.css";

function MainPage() {

    const getMeal = async () => {
        const json = await (
            await fetch(
                `https://open.neis.go.kr/hub/mealServiceDietInfo?KEY=af1ccdd3826b47f89c4acbfc8b3ed12a&Type=json&pIndex=1&pSize=3&ATPT_OFCDC_SC_CODE=E10&SD_SCHUL_CODE=7310084`
            )
        ).json();
        console.log(json.mealServiceDietInfo[1].row)
    }

    useEffect(() => {
        getMeal()
    }, [])

    return (
        <div className='meal-content'>
            <div className='breakfast'>
                <div className='meal-title'>
                    아침 식사
                </div>
                <div className='meal-list'>
                    <ul className='breafast-list'>
                        <li>떡볶이</li>
                        <li>떡볶이</li>
                        <li>떡볶이</li>
                        <li>떡볶이</li>
                    </ul>
                </div>
            </div>

            <div className='lunch'>
                <div className='meal-title'>
                    점심 식사
                </div>
                <div className='meal-list'>
                    <ul className='lunch-list'>
                        <li>떡볶이</li>
                        <li>떡볶이</li>
                        <li>떡볶이</li>
                        <li>떡볶이</li>
                    </ul>
                </div>
            </div>
            
            <div className='dinner'>
                <div className='meal-title'>
                    저녁 식사
                </div>
                <div className='meal-list'>
                    <ul className='dinner-list'>
                        <li>떡볶이</li>
                        <li>떡볶이</li>
                        <li>떡볶이</li>
                        <li>떡볶이</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MainPage;