import React, { useState } from 'react'
import './styles.css'
import Dashboard from './components/Dashboard'
import Forms from './components/Forms'
import ThemeChange from './components/ThemeChange'

export default function App() {
  // This is how we add state to the App component
  // Think of this as 'read-only'
  const [libraryName, setLibraryName] = useState()
  const [frameworkName, setFrameworkName] = useState()
  const [apiData, setApiData] = useState([])

  return (
    <div>
      <ThemeChange />
      <div className='header'>
        <h1 id='site-title'>Framework Evaluator</h1>
      </div>
      <Forms
        // We pass the *functions* Forms
        setLibraryName={setLibraryName}
        setFrameworkName={setFrameworkName}
        setApiData={setApiData}
        apiData={apiData}
      />
      <Dashboard
        libraryName={libraryName}
        frameworkName={frameworkName}
        apiData={apiData}
      />
    </div>
  )
}
