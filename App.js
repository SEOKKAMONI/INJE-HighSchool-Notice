import { StyleSheet, View } from 'react-native';
import { useState } from 'react';
import { SurveyContext } from './context/SurveyContext';

import Header from "./routes/Header";
import Main from "./routes/Main";
import ClassSurvey from './routes/ClassSurvey';

export default function App() {
  const [survey, setSurvey] = useState(false);

  if (!survey) {
    return (
      <View style={styles.container}>
        <SurveyContext.Provider value={{survey, setSurvey}}>
          <ClassSurvey />
        </SurveyContext.Provider>
      </View>
    )
  }
  else if (survey) {
    return (
      <View style={styles.container}>
        <Header />
        <Main />
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