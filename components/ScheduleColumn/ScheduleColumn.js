import "./ScheduleColumn.css"

export default function ScheduleColumn() {
    const [schedules, setSchedule] = useState(null);
    const KEY = "af1ccdd3826b47f89c4acbfc8b3ed12a";
    const ATPT_OFCDC_SC_CODE = "ATPT_OFCDC_SC_CODE=E10";
    const SD_SCHUL_CODE = "SD_SCHUL_CODE=7341079";
    const ScheduleURL = "https://open.neis.go.kr/hub/misTimetable";
    const GRADE = "GRADE=1"
    const CLASS_NM = "CLASS_NM=1"
    const ALL_TI_YMD = "ALL_TI_YMD=20221010"
    useEffect(() => {
        const ScheduleData = async () => {
          try {
        
            const response = await axios.get(
              `${ScheduleURL}?KEY=${KEY}&Type=json&&pIndex=1&pSize=5&${ATPT_OFCDC_SC_CODE}&${SD_SCHUL_CODE}&${GRADE}&${CLASS_NM}&${ALL_TI_YMD}`
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

            </div>
        </div>
    )
}