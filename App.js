import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { GradeClassContext } from "./context/GradeClassData";
import "./App.css";
import { useState } from "react";

export default function App() {
  const [Grade, setGrade] = useState("1");
  const [Class, setClass] = useState("1");

  return (
    <GradeClassContext.Provider value={{Grade, setGrade, Class, setClass}}>
      <Header />
      <Main />
    </GradeClassContext.Provider>
  )
}