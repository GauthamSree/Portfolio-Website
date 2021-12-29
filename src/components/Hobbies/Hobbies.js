// import uniqid from 'uniqid'
import { hobbies } from '../../portfolio'
import './Hobbies.css'

const Hobbies = () => {
  if (!hobbies.length) return null

  return (
    <section className='section hobbies' id='hobbies'>
      <h2 className='section__title'>Hobbies</h2>
      <ul className='hobbies__list'>
        {hobbies.map((hob) => (
          <li className='hobbies__list-item btn btn--plain'>
            {hob}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Hobbies
