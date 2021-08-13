import React from 'react'
import './styles.css'
import Dashboard from './components/Dashboard'
// import { Provider } from 'react-redux'
// import store from './app/store'
import Forms from './components/Forms'
import ThemeChange from './components/ThemeChange'

export default function App(props) {
  // const { data } = props
  return (
    // <Provider store={store}>
    <div>
      <ThemeChange />
      <div className='App'>
        <h1 id='site-title'>Framework Evaluator</h1>
      </div>
      <Forms />
      <Dashboard info={props} />
    </div>
  )
}
