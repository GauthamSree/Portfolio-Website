import './Footer.css'
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { about } from '../../portfolio'


const Footer = () => {
  const { social } = about
  
  return (
    <footer className='footer'>
      <p> © 2023 Gautham Sreekumar </p>
      <div className='social'>
      {social && (
                <>
                  {social.github && (
                    <a
                      href={social.github}
                      aria-label='github'
                      className='link link--icon'
                    >
                      <BsGithub size={32} />
                    </a>
                  )}
  
                  {social.linkedin && (
                    <a
                      href={social.linkedin}
                      aria-label='linkedin'
                      className='link link--icon'
                    >
                      <BsLinkedin size={32} />
                    </a>
                  )}
                </>
              )}
      </div>
    </footer>
  )
}

export default Footer
