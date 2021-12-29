// import uniqid from 'uniqid'
import { BsGithub } from "react-icons/bs";
// import LaunchIcon from '@material-ui/icons/Launch'
import './ProjectContainer.css'

const ProjectContainer = ({ project }) => (
  <div className='project'>
    <div>
      <h3>{project.name}</h3>
    </div>

    <div>
      <p className='project__description'>{project.description}</p>
    </div>
    <div className="bottom">
      {project.stack && (
        <ul className='project__stack'>
          {project.stack.map((item) => (
            <li className='project__stack-item'>
              {item}
            </li>
          ))}
        </ul>
      )}

      {project.sourceCode && (
        <a
          href={project.sourceCode}
          aria-label='source code'
          className='link link--icon'
        >
          <BsGithub size={25} />
        </a>
      )}

      {project.livePreview && (
        <a
          href={project.livePreview}
          aria-label='live preview'
          className='link link--icon'
        >
          {/* <LaunchIcon /> */}
        </a>
      )}
    </div>

  </div>
)

export default ProjectContainer
