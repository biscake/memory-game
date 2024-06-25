import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/Scoreboard.css';
import './styles/index.css';
import './styles/App.css';
import App from './components/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <div className="header">
    <h1>Memory Game</h1>
    <p>Get points by clicking on an image but don't click on any more than once</p>
  </div>
  <App />
  </React.StrictMode>,
)
