import React from "react";

const AppContext = React.createContext({
    showAboutHandler: (data) => {},
    closeAboutHandler: (data) => {},
    isShowAbout: null,

    showProjectsHandler: (data) => {},
    closeProjectsHandler: (data) => {},
    isShowProjects: null,

    showResumeHandler: (data) => {},
    closeResumeHandler: (data) => {},
    isShowResume: null,

    showFolderHandler: (data) => {},
    closeFolderHandler: (data) => {},
    isShowFolder: null,

    zIndex: null
})

export default AppContext