import './index.css'
import { DataProvider } from './Context/DataContext'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import VideoPage from './pages/VideoPage/VideoPage'
import SignInPage from './pages/SignInPage/SignInPage'
import { ToastContainer, toast } from 'react-toastify';



function App() {

  return (

      <div className="App">
        <DataProvider>
          <ToastContainer theme='dark' />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/videoPage/:id" element={<VideoPage />} />
            <Route path="/authPage" element={<SignInPage />} />
            <Route path="*" element={ <HomePage />} />
          </Routes>
        </DataProvider>
      </div>

  );
}

export default App;