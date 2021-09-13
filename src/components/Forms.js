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
        if (fetchedFramework.stargazers > props.mostStars) {
          props.setMostStars({
            name: fetchedFramework.name,
            stars: fetchedFramework.stargazers,
          })
        }
        if (fetchedFramework.openIssues < props.leastIssues) {
          props.setLeastIssues({
            name: fetchedFramework.name,
            issues: fetchedFramework.openIssues,
          })
        }
        props.setApiData([...props.apiData, fetchedFramework])
      }
    )
    postFramework(libraryName, frameworkName)
    resetLibraryName()
    resetFrameworkName()
  }

  // The following useEffect is only for logging if we want to. It's used because of the state update being asynchronous, props.mostForks isn't updated on first render.
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
        <label className='label'>
          <span className='label-text'>Framework Name:</span>
        </label>
        <div className='flex space-x-2'>
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
