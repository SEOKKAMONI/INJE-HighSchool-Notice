import "./ScheduleColumn.css"
import { useState, useEffect, useContext } from "react";
import axios from 'axios';
import { GradeClassContext } from "../../context/GradeClassData";

export default function ScheduleColumn({ URL, ALL_TI_YMD_DATA }) {
    const {Grade, Class} = useContext(GradeClassContext);
    const [schedules, setSchedule] = useState(null);
    let HTML_CODE = ""
    let ScheduleList = ""

    useEffect(() => {
        const ScheduleData = async () => {
            try {
                const response = await axios.get(
                    `${URL}`, {
                    params: {
                        ALL_TI_YMD: ALL_TI_YMD_DATA,
                        GRADE: Grade,
                        CLASS_NM: Class
                }});
                setSchedule(response.data.misTimetable[1].row)
            } catch (error) {
                console.log(error)
            }
        };
        ScheduleData();
        console.log(schedules)
    }, [Grade, Class]);

    useEffect(() => {
        console.log(Grade, Class)
    }, [Grade])

    return (
        <div>
            {schedules && schedules.map(function (schedule, index) {
                if (schedule.ITRT_CNTNT == "-기술·가정") {
                    ScheduleList += `<span>기가</span>`
                } else if (schedule.ITRT_CNTNT == "-(자)예술·체육활동") {
                    ScheduleList += `<span>예체능</span>`
                } else if (schedule.ITRT_CNTNT == "-(창)동아리활동" || schedule.ITRT_CNTNT == "-(자)동아리활동") {
                    ScheduleList += `<span>동아리</span>`
                } else if (schedule.ITRT_CNTNT == "-진로와 직업") {
                    ScheduleList += `<span>진로</span>`
                } else if (schedule.ITRT_CNTNT == "-(자)진로탐색활동") {
                    ScheduleList += `<span>진탐</span>`
                } else {
                    ScheduleList += `<span>${schedule.ITRT_CNTNT.replace("-", "")}</span>`
                }
                if (index == 5) {
                    HTML_CODE = ScheduleList;
                    ScheduleList = ""
                    return <div className="schedule__column" dangerouslySetInnerHTML={{__html: HTML_CODE}}></div>
                }
            })}
        </div>
    )
}