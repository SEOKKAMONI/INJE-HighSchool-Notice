import { StyleSheet, View } from 'react-native';
import { legacy_createStore as createStore } from "redux";
import { Provider, useSelector, useDispatch } from "react-redux";

import Header from "./routes/Header";
import Main from "./routes/Main";
import ClassSurvey from './routes/ClassSurvey';
import SurveyInput from './components/Survey/SurveyInput';
import { useState } from 'react';

export default function App() {
  const Survey = SurveyInput();

  const [injeClass, setInjeClass] = useState("1");
  const [injeGrade, setInjeGrade] = useState("1");

  if (!Survey) {
    return (
      <View style={styles.container}>
        <ClassSurvey />
        <SurveyInput />
      </View>
    )
  }
  else if (Survey) {
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