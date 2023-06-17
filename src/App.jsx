
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Search from './Pages/Search'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/search' element={<Search/>}/>
    </Routes>
    </>
  )
}

export default App
