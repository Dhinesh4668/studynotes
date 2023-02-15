import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {
  CDM,
  CI,
  Home,
  MadLab,
  Mc,
  OoadLab,
  Oooad,
  St
} from './screens/index'
import Error from './component/404error/Error'
import Nav from './component/Nav/Nav'
import Notes from './component/Notes/Notes'
import Lab from './component/Lab/LabScreen'

const App = () => {
  return (
    <BrowserRouter>
    <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/olab' element={<OoadLab />} />
        <Route path='/mc' element={<Mc />} />
        <Route path='/cgm' element={<CDM />} />
        <Route path='/ci' element={<CI />} />
        <Route path='/mad' element={<MadLab />} />
        <Route path='/st' element={<St />} />
        <Route path='/olab' element={<OoadLab />} />
        <Route path='/ooad' element={<Oooad />} />
        <Route path='/notes' element={<Notes />} />
        <Route path='/lab' element={<Lab />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App