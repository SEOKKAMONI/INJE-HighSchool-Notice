import "./App.css"

import { StyleSheet, View } from 'react-native';
import { useState } from 'react';

import MainPage from './pages/MainPage';
import ClassSurvey from './routes/ClassSurvey';

import { DataContext } from './context/DataContext';
import { SurveyContext } from './context/SurveyContext';
import { LunchNoticeContext } from './context/LunchNoticeContext';


export default function App() {
  const [survey, setSurvey] = useState(false); // Survey Check
  const [checkLunch, setCheckLunch] = useState(false); // Lunch Page Check
  const [grade, setGrade] = useState(1); // Grade Data
  const [Class, setClass] = useState(1); // Class Data

  if (!survey) {
    return (
      <View style={styles.container}>
        <DataContext.Provider value={{ grade, setGrade, Class, setClass }}>
          <SurveyContext.Provider value={{ survey, setSurvey }}>
            <ClassSurvey />
          </SurveyContext.Provider>
        </DataContext.Provider>
      </View>
    )
  }
  else if (survey) {
    return (
      <View style={styles.container}>
        <LunchNoticeContext.Provider value={{ checkLunch, setCheckLunch }}>
          <DataContext.Provider value={{ grade, setGrade, Class, setClass }}>
            <SurveyContext.Provider value={{ survey, setSurvey }}>
              <MainPage />
            </SurveyContext.Provider>
          </DataContext.Provider>
        </LunchNoticeContext.Provider>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: "hidden",
  },
});