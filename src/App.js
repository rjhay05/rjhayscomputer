import React from "react";

import TaskBar from  './components/taskbar/TaskBar';
import Desktop from "./components/desktop/Desktop";

import style from './App.module.css'
import StarsBackground from "./components/shared/animation/StarsBackground";

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
