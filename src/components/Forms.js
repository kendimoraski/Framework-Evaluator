import React from 'react'
import { useInput } from './hooks/input-hook'

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
    alert(
      `Submitting Library Name ${libraryName} & Framework Name ${frameworkName}`
    )
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
      <input className='submit' type='submit' value='Submit' />
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