import { Route, Routes } from 'react-router-dom';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import Resume from './components/pages/Resume';
import Sidebar from './components/Sidebar'

const App = () => {
  return(
    <>
      <Sidebar />
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/resume' element={<Resume />}/>
      </Routes>
    </>
  )
}

export default App;
