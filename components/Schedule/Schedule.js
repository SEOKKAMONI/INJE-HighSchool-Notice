import "./Schedule.css";
import ScheduleColumn from "../ScheduleColumn/ScheduleColumn";
import { useState } from "react";
import { useEffect } from "react";

export default function Schedule() {
    const [today, setToday] = useState("");
    const week = new Array('일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일');
    let DAY = new Date().getDay();
    useEffect(() => {
        setToday(week[DAY]);
    }, [today])

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
                    <ScheduleColumn />
                    <ScheduleColumn />
                    <ScheduleColumn />
                    <ScheduleColumn />
                    <ScheduleColumn />
                </div>
            </div>
        </div>
    )
}