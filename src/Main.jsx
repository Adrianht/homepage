import React, { useState } from 'react';

import Me from './Me';
import Info from './Info';
import Card from './Card';

import "./styles/main.scss";
import ChevronButton from './ChevronButton';

const Main = () => {
  let [currentStepIndex, setCurrentStepIndex] = useState(0);
  let [direction, setDirection] = useState('down');

  function bumpIndex() {
    setCurrentStepIndex(currentStepIndex + 1);
    setDirection('down')
  }

  function lessenIndex() {
    setCurrentStepIndex(currentStepIndex - 1)
    setDirection('up')
  }

  function checkDisabled(checkValue, button) {
    if(button === 'previous'){
      return currentStepIndex < checkValue ? true : false;
    } else if(button === 'next'){
      return currentStepIndex < checkValue ? false : true;
    }
  }

  return (
    <main>
      <ChevronButton style={{transform: "rotate(176deg)"}} class={checkDisabled(1, 'previous') ? 'previous-button disabled' : 'previous-button'} onChildClick={lessenIndex} disable={checkDisabled(1, 'previous')} />
      <Me />
      <div className="step-container" key={currentStepIndex}>
        <Card currentStepIndex={currentStepIndex} panel={panels[currentStepIndex]} dir={direction}/>
      </div>
      <Info />
      <ChevronButton class={checkDisabled(panels.length - 1, 'next') ? 'next-button disabled' : 'next-button'} onChildClick={bumpIndex} disable={checkDisabled(panels.length - 1, 'next')} />
    </main>
  );
}

let panels = [
  {
    index: 0,
    title: "Dynamic header",
    info: "A navigation menu that scales nicely",
    tech: "Made with Vue and SCSS",
    site: "https://header.adrianht.no/",
    niceSite: "header.adrianht.no",
    github: "https://github.com/Adrianht/dynamic-header",
  },
  {
    index: 1,
    title: "Cleansounds",
    info: "Cleansoundsmovement is an artist movement honoring true everyday heroes in the fight against plastic pollution",
    tech: "Vue, Mapbox, Scrollama, SCSS",
    site: "https://www.cleansounds.com",
    niceSite: "cleansounds.com",
  },
  {
    index: 2,
    title: "Bade ",
    info: "Want to go for a swim, but you wonder what the ocean temperature is like? Use this site to find out!",
    tech: "Vue, Mapbox, SCSS",
    site: "https://bade.adrianht.no/",
    niceSite: "bade.adrianht.no",
    github: "https://github.com/Adrianht/bade",
  },
  {
    index: 3,
    title: "Homepage",
    info: "This page, serves as a hub for information about projects and myself",
    tech: "React, SCSS",
    site: "#",
    niceSite: "You're already here!",
    github: "https://github.com/Adrianht/homepage",
  },
  {
    index: 4,
    title: "Rover Safari",
    info: "Concept site for Erikson Rover Safari",
    tech: "Made with Vue, Vuetify, GraphQL and GraphCMS",
    site: "https://www.safari.adrianht.no",
    niceSite: "safari.adrianht.no",
  },
]


export default Main;
