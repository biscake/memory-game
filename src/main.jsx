import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/Scoreboard.css';
import './styles/index.css';
import './styles/App.css';
import App from './components/App';
import Header from './header';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Header />
  <App />
  </React.StrictMode>,
)
