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
        <div>
          <h1 id='title' className='text-center my-3'>Proyecto Galería</h1>
        </div>
        <div id='main-img-container' className='container'>
          <Routes>
            <Route path='/orquidea1' element={<Orquidea1 className='image-size' />} />
            <Route path='/orquidea2' element={<Orquidea2 className='image-size' />} />
            <Route path='/orquidea3' element={<Orquidea3 className='image-size' />} />
            <Route path='/orquidea4' element={<Orquidea4 className='image-size' />} />
            <Route path='/orquidea5' element={<Orquidea5 className='image-size' />} />
            <Route path='/orquidea6' element={<Orquidea6 className='image-size' />} />
          </Routes>
        </div>
        <div className='container'>
          <Navigation />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
