import React, { useEffect } from 'react'
import { useInput } from './hooks/input-hook'
import { fetchOneFramework, postFramework } from '../thunk'

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
    fetchOneFramework(`${libraryName}/${frameworkName}`).then(
      fetchedFramework => {
        if (fetchedFramework.forks > props.mostForks) {
          props.setMostForks({
            name: fetchedFramework.name,
            forks: fetchedFramework.forks,
          })
        }
        props.setApiData([...props.apiData, fetchedFramework])
      }
    )
    postFramework(libraryName, frameworkName)
    resetLibraryName()
    resetFrameworkName()
  }

  useEffect(
    () => console.log('this is mostForks', props.mostForks),
    [props.mostForks]
  )

  return (
    <form onSubmit={handleSubmit}>
      <div className='form-control'>
        <label className='label'>
          <span className='label-text'>Library Name:</span>
        </label>
        <div className='flex space-x-2'>
          <input
            type='text'
            {...bindLibraryName}
            placeholder='enter a library name'
            className='w-full input input-primary input-bordered'
          />
        </div>
        {/* <input className='submit' type='submit' value='Submit' /> */}
        <label className='label'>
          <span className='label-text'>Framework Name:</span>
        </label>
        <div className='flex space-x-2'>
          {/* <input className='submit' type='submit' value='Submit' /> */}{' '}
          <input
            type='text'
            {...bindFrameworkName}
            placeholder='enter a framework name'
            className='w-full input input-primary input-bordered'
          />
          <button className='btn btn-primary'>go</button>
        </div>
      </div>
    </form>
  )
}
