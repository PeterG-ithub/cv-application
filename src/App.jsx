import { useState } from 'react'
import './App.css'
import PersonalInfo from './PersonalInfo'
import Professional from './Professional'
import Education from './Education'
import Project from './Project'

function App() {

  return (
    <div
      className='form'
    >
      <PersonalInfo />
      <Education />
      <Professional />
      <Project />
    </div>
  )
}

export default App
