import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import App from './components/App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <h1 className='header'>Memory Game</h1>
  <p className='description'>Get points by clicking on an image but don't click on any more than once</p>
  <App />
  </React.StrictMode>,
)
