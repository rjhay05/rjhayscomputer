import React from 'react'

import IMG1 from '../../../../shared/images/bettys-kitchen_1.PNG'
import IMG2 from '../../../../shared/images/bettys-kitchen_2.PNG'

import Project from '../Project'

function Project4() {
  const subtitle = (
    <i>React JS, HTML, CSS, JavaScript</i>
  );

  const content1 = (
    <p>Static food ordering app using React JS. Dimensions are responsive and with little animation added.</p>
  )

  const content2 = (
    <p>It is a practice project to learn React JS core concept. It is a small and simple food ordering app built with React components and with the help of hooks for component's functionalities.</p>
    )
  return (
    <Project 
        title={`Betty's Kitchen`}
        subtitle={subtitle}
        projectLink='https://bettyskitchen.netlify.app/'
        firstContent={content1}
        image1={IMG1}
        secondContent={content2}
        image2={IMG2}
    />
  )
}

export default Project4
