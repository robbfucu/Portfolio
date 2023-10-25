import './index.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBootstrap, faCss3, faGitAlt, faHtml5, faJsSquare, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
          letterClass={letterClass}
            strArray= {['A','b','o','u','t',' ', 'm','e']}
            idx={15}
          />
        </h1>
        <p>
          I'm a very ambitious Front End Developer looking for a role in 
          established IT Company with the opportunity to work with the 
          latest technologies on challenging and diverse projects.
        </p>
        <p>
          I'm quietly confident, naturally curious, and perpetually working
          on improving my chops one design problem at a time.
        </p>
        <p>
          If I need to define myself in one sentence that would be a family
          person, father of two beautiful daughters, a videogames fanatic and 
          a tech obsessed!
        </p>
      </div>

      <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="face1">
            <FontAwesomeIcon icon={faReact} color='#5ed4f4'/>
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faHtml5} color='#f06529'/>
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faCss3} color='#28A4D9'/>
          </div>         
          <div className="face4">
            <FontAwesomeIcon icon={faGitAlt} color='#EC4'/>
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faNodeJs} color='#5ed4f4'/>
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faJsSquare} color='#efd81d'/>
          </div>

        </div>
      </div>
      </div>
      <Loader type="pacman"/>
    </>
  )
}

export default About