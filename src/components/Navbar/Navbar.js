import { useContext, useState } from 'react'
import { MdLightMode, MdDarkMode} from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { ThemeContext } from '../../contexts/theme'
import { projects, skills, contact, interests, experience } from '../../portfolio'
import './Navbar.css'

const Navbar = () => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext)
  const [showNavList, setShowNavList] = useState(false)

  const toggleNavList = () => setShowNavList(!showNavList)

  return (
    <nav className='center nav'>
      <ul
        style={{ display: showNavList ? 'flex' : null }}
        className='nav__list'
      >
        {experience.length ? (
          <li className='nav__list-item'>
            <a
              href='#experience'
              onClick={toggleNavList}
              className='link link--nav'
            >
              Experience
            </a>
          </li>
        ) : null}

        {projects.length ? (
          <li className='nav__list-item'>
            <a
              href='#projects'
              onClick={toggleNavList}
              className='link link--nav'
            >
              Projects
            </a>
          </li>
        ) : null}

        {skills.length ? (
          <li className='nav__list-item'>
            <a
              href='#skills'
              onClick={toggleNavList}
              className='link link--nav'
            >
              Skills
            </a>
          </li>
        ) : null}

        {interests.length ? (
          <li className='nav__list-item'>
            <a
              href='#interests'
              onClick={toggleNavList}
              className='link link--nav'
            >
              Interests
            </a>
          </li>
        ) : null}

        {contact.email ? (
          <li className='nav__list-item'>
            <a
              href='#contact'
              onClick={toggleNavList}
              className='link link--nav'
            >
              Contact
            </a>
          </li>
        ) : null}
      </ul>

      <button
        type='button'
        onClick={toggleTheme}
        className='btn--icon nav__theme'
        aria-label='toggle theme'
      >
        {themeName === 'dark' ? <MdLightMode size={25} /> : <MdDarkMode size={25} />}
      </button>

      <button
        type='button'
        onClick={toggleNavList}
        className='btn--icon nav__hamburger'
        aria-label='toggle navigation'
      >
        {showNavList ? <AiOutlineClose size={25} /> : <FiMenu size={25} />}
      </button>
    </nav>
  )
}

export default Navbar
