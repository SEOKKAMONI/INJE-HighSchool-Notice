import "./Schedule.css";
import ScheduleColumn from "../ScheduleColumn/ScheduleColumn";

export default function Schedule() {
    return (
        <div className="schedule-container">
            <div className="schedule-container__header">
                <span>월</span>
                <span>화</span>
                <span>수</span>
                <span>목</span>
                <span>금</span>
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