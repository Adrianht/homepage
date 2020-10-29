import React from 'react';
import CV from './Adrian_Thompson_cv.pdf';

const Info = () => {
  return (
    <section className="info">
      <a href="https://github.com/Adrianht">Github</a>
      <a href="https://www.linkedin.com/in/adrian-thompson-354365170/">LinkedIn</a>
      <a href={CV} download>CV</a>
    </section>
  )
}

export default Info;
