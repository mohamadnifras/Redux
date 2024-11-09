import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Number1 from './Redux/number1'
import Number2 from './Redux/number2'
import TotalSum from './Redux/TotalSum'

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Number1/>}></Route>
        <Route path='/num2' element={<Number2/>}></Route>
        <Route path='/sum' element={<TotalSum/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
