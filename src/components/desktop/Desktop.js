import React from 'react';
import AboutCard from '../applications/about/AboutCard';
import AboutIcon from '../applications/about/AboutIcon';
import ContactIcon from '../applications/contact/ContactIcon';
import ProjectsCard from '../applications/projects/ProjectsCard';
import ProjectsIcon from '../applications/projects/ProjectsIcon';
import ResumeIcon from '../applications/resume/ResumeIcon';
import ResumeCard from '../applications/resume/ResumeCard';
import style from './Desktop.module.css';
import SocialIcon from '../applications/social/SocialIcon';
import SocialCard from '../applications/social/SocialCard';

function Desktop() {
 
  return (
    <div className={style.container}>
     <div className={style[ 'draggable-area' ]}>
     <section className={style[ 'icons-container']}>
        <AboutIcon />
        <ProjectsIcon />
        <ContactIcon />
        <ResumeIcon />
        <SocialIcon />
      </section>
      <AboutCard />
      <ProjectsCard />
      <ResumeCard />
      <SocialCard />
     </div>
    </div>
  )

}

export default Desktop