import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import Home from './components/pages/Home';
import Company from './components/pages/Company';
import NewProject from './components/pages/NewProject';
import Contact from './components/pages/Contact';
import Container from './components/layout/Container';

const App: React.FC = () => {

  return (
    <Router>
      <NavBar />

      <Routes>
        <Container>
          <Route path='/' element={<Home />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/company' element={<Company />}></Route>
          <Route path='/newproject' element={<NewProject />}></Route>
          <Route path='*' element={<Home />} />
        </Container>
      </Routes>
    </Router>
  )
};

export default App;
