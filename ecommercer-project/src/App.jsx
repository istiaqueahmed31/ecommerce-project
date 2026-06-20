import { HomePage } from './pages/HomePage'
import { CheckOut } from './pages/Checkout'
import { Routes, Route } from 'react-router'
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route index element= {<HomePage />}></Route>
        <Route path='Checkout' element={<Checkout />}></Route>
      </Routes>
    </>
  )
}

export default App
