import './index.scss'
import AnimatedLetters from '../AnimatedLetters'

const About = () => {
  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
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
    </div>
  )
}

export default About