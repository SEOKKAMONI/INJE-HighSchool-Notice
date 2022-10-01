import "./ScheduleColumn.css"
import { useState, useEffect } from "react";
import axios from 'axios';

export default function ScheduleColumn({URL, GRADE_DATE, CLASS_NM_DATA, ALL_TI_YMD_DATA}) {
    const [schedules, setSchedule] = useState(null);

    useEffect(() => {
        const ScheduleData = async () => {
          try {
            const response = await axios.get(
              `${URL}`, {
                params: {
                    GRADE: GRADE_DATE,
                    CLASS_NM: CLASS_NM_DATA,
                    ALL_TI_YMD: ALL_TI_YMD_DATA
                }
              }
            );
            setSchedule(response.data.misTimetable[1].row)
          } catch (error) {
            console.log(error)
          }
        };
        ScheduleData();
        console.log(schedules)
    }, []);

    return (
        <div>
            <div className="schedule__column">
               {schedules && schedules.map((schedule, index) => (
                    <span key={index}>{schedule.ITRT_CNTNT.replace('-', '')}</span>
                ))}
            </div>
        </div>
    )
}