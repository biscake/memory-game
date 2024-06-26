import { useState } from "react"

function Header() {
  const [mode, setMode] = useState('light');
  const rClass = document.querySelector('#root').classList;

  function handleModeChange() {
    if (rClass.contains('dark')) {
      rClass.remove('dark');
      setMode('light');
    } else {
      rClass.add('dark');
      setMode('dark');
    }
  }
  return (  
    <div className="header">
      <button onClick={() => location.reload()}>Memory Game</button>
      <p>Get points by clicking on an image but don't click on any more than once</p>
      <button onClick={() => handleModeChange()}> {mode === 'dark' ? <>Light Mode</> : <>Dark mode</>} </button>
    </div>
  )
}

export default Header