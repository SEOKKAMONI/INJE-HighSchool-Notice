import "./Schedule.css";
import ScheduleColumn from "../ScheduleColumn/ScheduleColumn";
import { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";

export default function Schedule() {
    // 날짜
    const [today, setToday] = useState(""); // 요일
    const [YMD, setYMD] = useState(null); // YMD 가 null 이면 로딩중

    useEffect(() => {
        const getTime = () => {
            let mergeYMD = ""

            const time = new Date();
            const week = new Array('일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일');
            let year = time.getFullYear();
            let month = time.getMonth() + 1;
            let day = time.getDay();
            let date = time.getDate();
            setToday(week[day]);

            // 0 -> 02 두자리로 만들기
            let dateValue = ("0" + date).slice(-2)
            let monthValue = ("0" + month).slice(-2)
            mergeYMD = (year + monthValue + dateValue) * 1; // string 을 1을 곱해줌으로써 숫자로 변환
            if (week[day] != "토요일" && week[day] != "일요일")
                setYMD(mergeYMD - (day - 1))
            if (week[day] == "토요일")
                setYMD(mergeYMD + 2)
        }
        setInterval(getTime, 1000);
    }, [])

    // API
    const SCHEDULE_URL = `https://open.neis.go.kr/hub/misTimetable?KEY=af1ccdd3826b47f89c4acbfc8b3ed12a&pIndex=1&pSize=6&Type=json&ATPT_OFCDC_SC_CODE=E10&SD_SCHUL_CODE=7341079`;

    return (
        <div className="schedule-container">
            <div className="schedule-container__header">
                <span className={today == "월요일" ? "header__today" : "header__day"}>월</span>
                <span className={today == "화요일" ? "header__today" : "header__day"}>화</span>
                <span className={today == "수요일" ? "header__today" : "header__day"}>수</span>
                <span className={today == "목요일" ? "header__today" : "header__day"}>목</span>
                <span className={today == "금요일" ? "header__today" : "header__day"}>금</span>
            </div>
            {
                YMD == null ? (
                    <div className="schedule-container__content loading">
                        <ClipLoader
                            color="#3A86FF"
                        />
                    </div>
                ) : (
                    <div className="schedule-container__content">
                        <div className="schedule__frame">
                            {
                                [0, 1, 2, 3, 4].map(item => {
                                    return <ScheduleColumn URL={SCHEDULE_URL} ALL_TI_YMD_DATA={YMD + item} />
                                })
                            }
                        </div>
                    </div>
                )
            }
        </div>
    )
}