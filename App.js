import "./App.css"

import { useState } from 'react';

import MainPage from './pages/MainPage';
import ClassSurvey from './routes/ClassSurvey';

import { DataContext } from './context/DataContext';
import { SurveyContext } from './context/SurveyContext';
import { LunchNoticeContext } from './context/LunchNoticeContext';


export default function App() {
  const [survey, setSurvey] = useState(false); // Survey Check
  const [checkLunch, setCheckLunch] = useState(false); // Lunch Page Check
  const [grade, setGrade] = useState(0); // Grade Data
  const [Class, setClass] = useState(0); // Class Data

  if (!survey) {
    return (
      <div className="container">
        <DataContext.Provider value={{ grade, setGrade, Class, setClass }}>
          <SurveyContext.Provider value={{ survey, setSurvey }}>
            <ClassSurvey />
          </SurveyContext.Provider>
        </DataContext.Provider>
      </div>
    )
  }
  else if (survey) {
    return (
      <div className="container">
        <LunchNoticeContext.Provider value={{ checkLunch, setCheckLunch }}>
          <DataContext.Provider value={{ grade, setGrade, Class, setClass }}>
            <SurveyContext.Provider value={{ survey, setSurvey }}>
              <MainPage />
            </SurveyContext.Provider>
          </DataContext.Provider>
        </LunchNoticeContext.Provider>
      </div>
    )
  }
}