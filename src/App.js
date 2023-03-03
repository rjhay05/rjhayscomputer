import React from "react";

import TaskBar from  './components/taskbar/TaskBar';
import Desktop from "./components/desktop/Desktop";

import style from './App.module.css'


function App() {
  return (

    <main className={style[ 'main-container' ]}>
      <Desktop />
      <TaskBar />
    </main>



  );
}

export default App;
