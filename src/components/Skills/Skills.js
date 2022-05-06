import { skills } from '../../portfolio'
import './Skills.css'

const Skills = () => {
  if (!skills.length) return null

  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title' id='skill_title'>Skills</h2>
      <ul className='skills__list'>
        {skills.map((skill, idx) => (
          <li key={idx} className='skills__list-item skill-btn'>
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills
