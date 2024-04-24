import viteLogo from '../../public/vite'
import reactLogo from '../assets/react'
function Projects() {
    
  
    return (
      <>
        <div>
          <a href="" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </>
    )
  }
  
  export default Projects