import "./Schedule.css";
import ScheduleColumn from "../ScheduleColumn/ScheduleColumn";
import { useState, useEffect } from "react";

export default function Schedule() {
    // 날짜
    const [today, setToday] = useState("");
    const week = new Array('일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일');
    let DAY = new Date().getDay();
    useEffect(() => {
        setToday(week[DAY]);
    }, [today])

    // API
    const SCHEDULE_URL = `https://open.neis.go.kr/hub/misTimetable?KEY=af1ccdd3826b47f89c4acbfc8b3ed12a&pIndex=1&pSize=6&Type=json&ATPT_OFCDC_SC_CODE=E10&SD_SCHUL_CODE=7341079`;
    const ALL_TI_YMD = 20221003
    return (
        <div className="schedule-container">
            <div className="schedule-container__header">
                <span className={today == "월요일" ? "header__today" : "header__day"}>월</span>
                <span className={today == "화요일" ? "header__today" : "header__day"}>화</span>
                <span className={today == "수요일" ? "header__today" : "header__day"}>수</span>
                <span className={today == "목요일" ? "header__today" : "header__day"}>목</span>
                <span className={today == "금요일" ? "header__today" : "header__day"}>금</span>
            </div>
            <div className="schedule-container__content">
                <div className="schedule__frame">
                    <ScheduleColumn 
                        URL={SCHEDULE_URL}
                        ALL_TI_YMD_DATA={ALL_TI_YMD}
                    />
                    <ScheduleColumn 
                        URL={SCHEDULE_URL}
                        ALL_TI_YMD_DATA={ALL_TI_YMD+1}
                    />
                    <ScheduleColumn 
                        URL={SCHEDULE_URL}
                        ALL_TI_YMD_DATA={ALL_TI_YMD+2}
                    />
                    <ScheduleColumn 
                        URL={SCHEDULE_URL}
                        ALL_TI_YMD_DATA={ALL_TI_YMD+3}
                    />
                    <ScheduleColumn 
                        URL={SCHEDULE_URL}
                        ALL_TI_YMD_DATA={ALL_TI_YMD+4}
                    />
                </div>
            </div>
        </div>
    )
}