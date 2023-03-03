import React from 'react'

import Project from '../Project'
import IMG1 from '../../../../shared/images/userly_1.PNG'
import IMG2 from '../../../../shared/images/userly_2.PNG'

function Project2() {
  const subtitle = (
    <i>React JS, Node JS/Express JS, MongoDB, Google Maps API, Google Geocoding API, HTML, CSS, JavaScript</i>
  );
  const content1 = (
    <p>Userly is an application where users can share and blog places they had been. It is in development at this moment but I will be up and running soon.</p>
  )

  const content2 = (
    <p>I started creating this site to have a feel of making a full stack application. Blogging sites are been around, but I still decided to create my own as for practicing MERN stack. Besides, my cousin likes to travel around and write his story and I'm pretty sure he would like to try mine once it's finished. I can't wait to see the final output.</p>
  )
  return (
    <Project 
      title='Userly'
      subtitle={subtitle}
      inDevelopment
      firstContent={content1}
      image1={IMG1}
      secondContent={content2}
      image2={IMG2}
     
    />
  )
}

export default Project2