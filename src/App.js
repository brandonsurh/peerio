import HomePage from './pages/HomePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/App.css'
import Header from './components/Header'
import UploadPage from './pages/UploadPage'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/upload" element={<UploadPage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
