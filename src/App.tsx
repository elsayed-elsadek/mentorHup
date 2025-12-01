import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import './index.css'
import BecomeMentor from './pages/BecomeMentor'
import GetStarted from './pages/GetStarted'
import NotFound from './pages/NotFound'


function App() {
  return (
    <> 
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/become-mentor" element={<BecomeMentor />} />
      <Route path="/start-Started" element={<GetStarted />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </>
   
  )
}

export default App
