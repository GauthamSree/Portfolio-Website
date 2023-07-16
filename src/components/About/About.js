// import GitHubIcon from '@material-ui/icons/GitHub'
// import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portfolio'
import './About.css'

import GS_Image from "./Gautham_Sreekumar.png"

const About = () => {
  const { name, role, description, resume } = about

  return (
    <div className='about center'>
      {name && (
        <h1>
          Hi, I am <br /><span className='about__name'>{name}.</span>
        </h1>
      )}

      <div className="desc_pic_container">
        <div className="desc_container">
          <div>
            {role && <h2 className='about__role'>{role}</h2>}
          </div>
          <div className='about__desc'>{description && description}</div>
          <div className='about__contact center'>
            {resume && (
              <a href={resume}>
                <span type='button' className='btn btn--outline'>
                  Resume
                </span>
              </a>
            )}
          </div>
        </div>
        <div className="about_pic">
          <img src={GS_Image} alt="hi"></img>
        </div>
      </div>
    </div>
  )
}

export default About
