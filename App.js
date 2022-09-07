import { StyleSheet, View } from 'react-native';
import { useState } from 'react';

import Header from "./routes/Header";
import Main from "./routes/Main";
import ClassSurvey from './routes/ClassSurvey';

export default function App( {checkSurvey} ) {
  if (!checkSurvey) {
    return (
      <View style={styles.container}>
        <ClassSurvey />
      </View>
    )
  }
  else if (checkSurvey) {
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