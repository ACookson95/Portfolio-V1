import { Route, Routes } from 'react-router-dom';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import Resume from './components/pages/Resume';
import Sidebar from './components/Sidebar';
import {Container} from './app.css';
import GlobalStyle from './gobalStyles.css';
import { useWindowSize } from './components/shared/WindowDimensions';


const App = () => {
  const window = useWindowSize()
  return(
    <>
      <GlobalStyle />
      <Container appHeight={window.height}>
        <Sidebar/>   
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/resume' element={<Resume />}/>
        </Routes>
      </Container>
    </>
  )
}

export default App;
