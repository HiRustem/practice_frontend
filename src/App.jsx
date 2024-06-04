import { Routes, Route } from 'react-router-dom'

import { Admin, Register, Feedback, Finish } from './pages/index'
import AdminLogin from './pages/AdminLogin'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={ <Register /> } />

        <Route path='/feedback' element={ <Feedback /> } />

        <Route path='/admin' element={ <Admin /> } />

        <Route path='/admin/login' element={ <AdminLogin /> } />

        <Route path='/finish' element= { <Finish /> } />
      </Routes>
    </>
  )
}

export default App
