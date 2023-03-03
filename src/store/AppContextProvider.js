import React, { useState } from 'react'

import AppContext from './app-context'

function AppContextProvider(props) {
    const [ zIndex, setZIndex ] = useState();
    const [ showAbout, setShowAbout ] = useState(true);
    const showAboutHandler = (bool) => setShowAbout(bool);
    const closeAboutHandler = (bool) => setShowAbout(bool);

    const [ showProjects, setShowProjects ] = useState(false);
    const showProjectsHandler = (bool) => {
      setShowProjects(bool)
      setZIndex(100)
    };
    const closeProjectsHandler = (bool) => setShowProjects(bool);

    const [ showResume, setShowResume ] = useState(false);
    const showResumeHandler = (bool) => {
      setShowResume(bool)
    };
    const closeResumeHandler = (bool) => setShowResume(bool);

    const [ showFolder, setShowFolder ] = useState(false);
    const showFolderHandler = (bool) => setShowFolder(bool);
    const closeFolderHandler = (bool) => setShowFolder(bool);


    const initVal = {
        showAboutHandler: showAboutHandler,
        closeAboutHandler: closeAboutHandler,
        isShowAbout: showAbout,

        showProjectsHandler: showProjectsHandler,
        closeProjectsHandler: closeProjectsHandler,
        isShowProjects: showProjects,

        showResumeHandler: showResumeHandler,
        closeResumeHandler: closeResumeHandler,
        isShowResume: showResume,

        showFolderHandler: showFolderHandler,
        closeFolderHandler: closeFolderHandler,
        isShowFolder: showFolder,

        zIndex
    }
  return (
    <AppContext.Provider value={initVal}>
        {props.children}
    </AppContext.Provider>
  )
}

export default AppContextProvider