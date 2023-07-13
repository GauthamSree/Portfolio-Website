import { experience } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Experience.css'

const Experience = () => {
  if (!experience.length) return null

  return (
    <section id='experience' className='section experience'>
      <h2 className='section__title'>Experience</h2>

      <div className='experience__grid'>
        {experience.map((data, key) => (
          <ProjectContainer project={data} key={key} />
        ))}
      </div>
    </section>
  )
}

export default Experience
