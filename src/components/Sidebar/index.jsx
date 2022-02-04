import { Link } from 'react-router-dom';

const Sidebar = () =>{
  return(
    <>
      <h1>Sidebar</h1>
      <Link to='/#home'>Home</Link>
      <Link to='/#about'>About</Link>
      <Link to='/#skills'>Skills</Link>
      <Link to='/#projects'>Projects</Link>
      <Link to='/#hobbies'>Hobbies</Link>
      <Link to='/resume'>My Resume</Link>
      <Link to='/contact'>Contact Me</Link>
    </>
  )
}

export default Sidebar