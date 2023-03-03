import React from "react";
import Project from "../Project";

import IMG1 from "../../../../shared/images/ask-the-universe_1.PNG";
import IMG2 from "../../../../shared/images/ask-the-universe_2.PNG";

function Project1() {
  const content1 = (
    <p>
      A virtual tarrot that accepts user input and response whatever the user
      typed. This tarrot is tricky and most of the time it will not answer your
      questions. A user with experience is a must.
    </p>
  );
  const content2 = (
    <p>
      It was my first ever project built with HTML, CSS, JavaScript without any
      framework or API. It was inspired from{" "}
      <a href="https://www.peteranswers.com/">Peter Answer</a>. The idea is to recreate my childhood's favorite webpage. I was fascinated how Peter Answer mysteriously answer the questions the user typed in, so I tried to understand how it works and the logic behind it and once I figured it out, I started creating my Peter Answer like web site and put it on the run.
    </p>
  );

  const subtitle = (
    <i>HTML, CSS, JavaScript</i>
  );
  return (
    <Project
      title="Ask the Universe"
      subtitle={subtitle}
      projectLink="https://rjhay05.github.io/"
      firstContent={content1}
      image1={IMG1}
      secondContent={content2}
      image2={IMG2}

    />
  );
}

export default Project1;
