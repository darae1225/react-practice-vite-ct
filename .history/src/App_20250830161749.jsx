import { Route, Routes } from 'react-router'
import './App.css'
function App() {


  return (
    <Routes>
      <Route path="/" element={<HomePage}/>
    </Routes>
  )
}

export default App
