import React, { useState } from 'react'
import './styles.css'
import Dashboard from './components/Dashboard'
import Forms from './components/Forms'
import Navbar from './components/Navbar'

export default function App() {
  // This is how we add state to the App component
  // Think of this as 'read-only'
  const [libraryName, setLibraryName] = useState()
  const [frameworkName, setFrameworkName] = useState()
  const [apiData, setApiData] = useState([])
  // We set this to -1 because...
  const [mostForks, setMostForks] = useState({ forks: -1 })
  const [mostStars, setMostStars] = useState({ stars: -1 })

  return (
    <div>
      <Navbar />
      <Forms
        // We pass the *functions* to Forms
        setLibraryName={setLibraryName}
        setFrameworkName={setFrameworkName}
        setApiData={setApiData}
        apiData={apiData}
        setMostForks={setMostForks}
        mostForks={mostForks.forks}
        setMostStars={setMostStars}
        mostStars={mostStars.stars}
      />
      <Dashboard
        libraryName={libraryName}
        frameworkName={frameworkName}
        apiData={apiData}
        mostForksNumber={mostForks.forks}
        mostForksName={mostForks.name}
        mostStarsNumber={mostStars.stars}
        mostStarsName={mostStars.name}
      />
    </div>
  )
}
