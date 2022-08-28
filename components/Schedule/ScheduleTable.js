import { useState } from "react";
import { useEffect } from "react";
import "./ScheduleTable.css"


function ScheduleTable() {
    const [subjects, setSubjects] = useState([]);
    const [loading, setLoading] = useState(false);
    let ScheduleList = "";
    let HTML_CODE = "";
    let printNum = 6;

    const getSchedule = async () => {
        const json = await (
            await fetch(
                `https://open.neis.go.kr/hub/hisTimetable?KEY=af1ccdd3826b47f89c4acbfc8b3ed12a&Type=json&pIndex=1&pSize=35&ATPT_OFCDC_SC_CODE=E10&SD_SCHUL_CODE=7310084&GRADE=1&CLASS_NM=7&AY=2022&SEM=1&TI_FROM_YMD=20220314&TI_TO_YMD=20220319`
            )
        ).json();
        setSubjects(json.hisTimetable[1].row);
        setLoading(true);
    }

    useEffect(() => {
        getSchedule();
    }, [])

    return (
        <div>
            {
                loading ? (
                    <table>
                        <div className="schedule_header">
                            <td>월</td>
                            <td>화</td>
                            <td>수</td>
                            <td>목</td>
                            <td>금</td>
                        </div>
                        <div className="schedule_main">
                            <div className="daily">
                                {subjects.map(function (subject, index) {
                                    if(subject.ITRT_CNTNT === "창의적 체험활동진로활동" || subject.ITRT_CNTNT === "창의적 체험활동자율활동" || subject.ITRT_CNTNT === "창의적 체험활동동아리활동") {
                                        ScheduleList += `<td>창체</td>`; 
                                    } else {
                                        ScheduleList += `<td>${subject.ITRT_CNTNT.replace("[보강]", "")}</td>`;
                                    }
                                    if(index != 0 && index == printNum) {
                                        HTML_CODE = ScheduleList;
                                        ScheduleList = "";
                                        printNum += 7;
                                        return <tr dangerouslySetInnerHTML={{__html: HTML_CODE}}></tr>;
                                    }
                                })}
                            </div>
                        </div>
                    </table>
                ) : ( <h2 className="loading">로딩중 입니다...</h2> )
            }
        </div >
    )
}

export default ScheduleTable;