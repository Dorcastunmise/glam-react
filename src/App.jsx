import { useState } from 'react';
import reactLogo from './assets/dress.png';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="dress" alt="React logo" />
        </a>
      </div>
      <h1>Rita Vinieris Rivini</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)} className="statue">
          {/* count is {count} */}
          contact our Managers for more enquiry
        </button>
        <p>
          Also available at: <code>dresscatalogue@gmail.com</code>.
        </p>
      </div>
      <p className="read-the-docs">
        <em>Perfection!</em>
      </p>
    </div>
  )
}

export default App
