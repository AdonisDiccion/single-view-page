import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SingleViewPage from './pages/SingleViewPage'

const App = () => {
  return (
    <div>
        <Router>
            <Routes>
                <Route path='/' element={<SingleViewPage/>} />
            </Routes>
        </Router>
    </div>
  )
}

export default App