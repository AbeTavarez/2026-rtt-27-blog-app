
import {Route, Routes} from 'react-router-dom'
import HomePage from './pages/HomePage';
import BlogsPage from './pages/BlogsPage';
import NotFoundPage from './pages/NotFound';
import NavBar from './components/NavBar';


function App() {
  return(
    <div>
      <header>
        <h1>Blog App</h1>
        <NavBar />
      </header>

      <Routes>
        <Route path='/' element={<HomePage />}/>
        
        <Route path='/blogs' element={<BlogsPage />}/>

        <Route path='*' element={<NotFoundPage />}/>
      </Routes>
    </div>
  )
}

export default App;