import { StyleSheet, View } from 'react-native';
import { useState } from 'react';
import { SurveyContext } from './context/SurveyContext';

import Header from "./routes/Header";
import Main from "./routes/Main";
import ClassSurvey from './routes/ClassSurvey';
import { DataContext } from './context/DataContext';

export default function App() {
  const [survey, setSurvey] = useState(false);
  const [grade, setGrade] = useState(1);
  const [Class, setClass] = useState(1);

  if (!survey) {
    return (
      <View style={styles.container}>
        <DataContext.Provider value={{grade,setGrade, Class,setClass}}>
          <SurveyContext.Provider value={{survey, setSurvey}}>
            <ClassSurvey />
          </SurveyContext.Provider>
        </DataContext.Provider>
      </View>
    )
  }
  else if (survey) {
    return (
      <View style={styles.container}>
        <DataContext.Provider value={{grade,setGrade, Class,setClass}}>
          <SurveyContext.Provider value={{survey, setSurvey}}>
            <Header />
            <Main />
          </SurveyContext.Provider>
        </DataContext.Provider>
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