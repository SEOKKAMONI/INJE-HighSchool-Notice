import { StyleSheet, View } from 'react-native';

import Header from "./routes/Header";
import Main from "./routes/Main";
import ClassSurvey from './routes/ClassSurvey';
import SurveyInput from './components/Survey/SurveyInput';

export default function App() {
  const Survey = SurveyInput();

  if (!Survey) {
    return (
      <View style={styles.container}>
        <ClassSurvey />
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