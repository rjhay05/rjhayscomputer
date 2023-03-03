import React from "react";

import IMG1 from "../../../../shared/images/expensinator_1.PNG";
import IMG2 from "../../../../shared/images/expensinator_2.PNG";
import Project from "../Project";

function Project3() {
  const subtitle = <i>React JS, HTML, CSS, JavaScript</i>;

  const content1 = (
    <p>
      An application that computes expenses in a year and display in a graphical
      representation.
    </p>
  );

  const content2 = (
    <p>
      A simple project to practice React framework. The idea started from
      financial management. As my practice project, I decided to create an
      expense tracking app. It is static at the moment but I'm planning to add more
      features like adding a user.
    </p>
  );
  return (
    <Project
      title="Expensinator"
      subtitle={subtitle}
      projectLink='https://expensinator.netlify.app/'
      firstContent={content1}
      image1={IMG1}
      secondContent={content2}
      image2={IMG2}
    />
  );
}

export default Project3;
