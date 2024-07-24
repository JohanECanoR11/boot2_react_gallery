import './App.css'
import { Navigation } from './components/Navigation';
import { Orquidea1 } from './components/Orquidea1';
import { Orquidea2 } from './components/Orquidea2';
import { Orquidea3 } from './components/Orquidea3';
import { Orquidea4 } from './components/Orquidea4';
import { Orquidea5 } from './components/Orquidea5';
import { Orquidea6 } from './components/Orquidea6';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/orquidea1' element={<Orquidea1 />} />
          <Route path='/orquidea2' element={<Orquidea2 />} />
          <Route path='/orquidea3' element={<Orquidea3 />} />
          <Route path='/orquidea4' element={<Orquidea4 />} />
          <Route path='/orquidea5' element={<Orquidea5 />} />
          <Route path='/orquidea6' element={<Orquidea6 />} />
        </Routes>
        <Navigation />
      </BrowserRouter>
    </>
  )
}

export default App
