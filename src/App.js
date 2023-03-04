import React from "react";

import TaskBar from  './components/taskbar/TaskBar';
import Desktop from "./components/desktop/Desktop";
import StarsBackground from "./components/shared/animation/StarsBackground";

import style from './App.module.css'


function App() {
  return (

    <main className={style[ 'main-container' ]}>
      <StarsBackground />
      <Desktop />
      <TaskBar />
    </main>



  );
}

export default App;
