import React from 'react';
import '../style/Home.css';
import Typewriter from './Typewriter';
import { useState } from 'react';


export default function Home() {

  const textArray = [
    "Welcome to my portfolio",
    "I'm a Front-end Web Developer",
    "I'm a student of B.Tech",
  ];

  const [, setTypingComplete] = useState(false);

  return (
    <div id="home">
      <div className="main">
        <Typewriter
          texts={textArray}
          delay={50}
          onTypingComplete={() => setTypingComplete(true)}
        />
        <div className="typewr">
        </div>
      </div>
      <div className="value">
        <div className="containe">
          <div className="info">
          <div className="skiils"></div></div>
          <div className="info ">
          <div className="education"></div></div>
          </div>
      </div>
      <div className="value1">
      </div>
      <div className="value2">
      </div>





    </div>




  )
}
