import { useState,useContext,useEffect } from "react";
import "./ClassDropDownBtn.css";
import arrowSvg from "../../../img/arrow.svg";
import { GradeClassContext } from "../../../context/GradeClassData";
import axios from 'axios';

export default function ClassDownBtn() {
    const { Class, setClass, Grade } = useContext(GradeClassContext);

    // API

    const [ClassDatas, setClassData] = useState(null);
    const URL = "https://open.neis.go.kr/hub/classInfo?KEY=af1ccdd3826b47f89c4acbfc8b3ed12a&Type=json&ATPT_OFCDC_SC_CODE=E10&SD_SCHUL_CODE=7341079"

    useEffect(() => {
        const getClassData = async () => {
            try {
                const response = await axios.get(
                    `${URL}`, {
                    params: {
                        AY: "2022",
                        GRADE: Grade,

                }});
                setClassData(response.data.classInfo[1].row)
            } catch (error) {
                console.log(error)
            }
        };
        getClassData();
    }, [Grade]);
     
    return (
        <div className="drop-down-menu">
            <button className="drop-down-btn">
                <span className="class-item">{Class}반</span>
                <img src={arrowSvg} className="arrowSvg" />
            </button>
            <ul className="drop-down-items">
                {
                    ClassDatas && ClassDatas.map((ClassData, index) => (
                        <li className="drop-down-item" onClick={() => setClass(ClassData.CLASS_NM)}>
                            <span>{ClassData.CLASS_NM}반</span>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}