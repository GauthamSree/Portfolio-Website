import { interests } from '../../portfolio'
import './Interests.css'

const Interests = () => {
  if (!interests.length) return null

  return (
    <section className='section interests' id='interests'>
      <h2 className='section__title'>Interests</h2>
      <ul className='interests__list'>
        {interests.map((ints, idx) => (
          <li key={idx} className='interests__list-item btn btn--plain'>
            {ints}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Interests
