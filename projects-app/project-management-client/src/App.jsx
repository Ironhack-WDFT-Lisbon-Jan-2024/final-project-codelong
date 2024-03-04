import { Routes, Route } from 'react-router-dom'
import './App.css'
import Signup from './pages/Signup'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/signup" element={<Signup/>}></Route>
      </Routes>
    </div>
  )
}

export default App
