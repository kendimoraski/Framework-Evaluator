import React from 'react'
import { useInput } from './hooks/input-hook'
import { fetchOneFramework } from '../thunk'

export default function Forms(props) {
  const {
    value: libraryName,
    bind: bindLibraryName,
    reset: resetLibraryName,
  } = useInput('')
  const {
    value: frameworkName,
    bind: bindFrameworkName,
    reset: resetFrameworkName,
  } = useInput('')

  const handleSubmit = evt => {
    evt.preventDefault()
    alert(`Submitting \nLibrary: ${libraryName} \nFramework: ${frameworkName}`)
    // We actually call the functions with the libraryName and frameworkName here, and this gets lifted back to state in App
    props.setLibraryName(libraryName)
    props.setFrameworkName(frameworkName)
    fetchOneFramework(`${libraryName}/${frameworkName}`).then(fetchedFrmwks => {
      props.setApiData([...props.apiData, fetchedFrmwks])
    })
    resetLibraryName()
    resetFrameworkName()
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Library Name:{' '}
        <input
          type='text'
          {...bindLibraryName}
          placeholder='enter a library name'
        />
      </label>
      {/* <input className='submit' type='submit' value='Submit' /> */}
      <span>
        <label>
          Framework Name:{' '}
          <input
            type='text'
            {...bindFrameworkName}
            placeholder='enter a framework name'
          />
        </label>
        <input className='submit' type='submit' value='Submit' />
      </span>
    </form>
  )
}
