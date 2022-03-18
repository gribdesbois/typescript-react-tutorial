import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import FirstComponent from './components/FirstComponent'
import User from './components/User'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Hello, Welcome to React and Typescript</h1>
      <FirstComponent />
      <User
        name="John Doe"
        age={26}
        address="87 Summer St, Boston, MA 02110"
        dob={new Date()}
      />
    </div>
  )
}

export default App
