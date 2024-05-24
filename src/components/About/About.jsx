import React from 'react'
import Card from './Card'
import Boostrap from "../../assets/aboutAssets/Boostrap.svg"
import Css from "../../assets/aboutAssets/Css.svg"
import Git from "../../assets/aboutAssets/Git.svg"
import GitHub from "../../assets/aboutAssets/GitHub.svg"
import Html from "../../assets/aboutAssets/Html.svg"
import Javascript from "../../assets/aboutAssets/Javascript.svg"
import LinkedIn from "../../assets/aboutAssets/LinkedIn.svg"
import ReactIcon from "../../assets/aboutAssets/ReactIcon.svg"
import Redux from "../../assets/aboutAssets/Redux.svg"
import Tailwind from "../../assets/aboutAssets/Tailwind.svg"
import Typescript from "../../assets/aboutAssets/Typescript.svg"
import VisualCode from "../../assets/aboutAssets/VisualCode.svg"
import "./About.css"

function About() {

  let icons = [Boostrap, Css, Git, GitHub, Html, Javascript, LinkedIn, ReactIcon, Redux, Tailwind, Typescript, VisualCode]
  return (
    <main className='container'>
      <div className="card-container">
        <h2 className='card-name'>MY SKILL, TOOLS & TECHNOLOGIES</h2>
        <div className="div">
        {icons.map((icon) => <img className='icon' src={icon} />)}
        </div>
      </div>
    </main>
  )
}

export default About