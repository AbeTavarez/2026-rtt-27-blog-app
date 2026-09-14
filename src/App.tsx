
import {Route, Routes} from 'react-router-dom'
import HomePage from './pages/HomePage';
import BlogsPage from './pages/BlogsPage';
import NotFoundPage from './pages/NotFound';
import NavBar from './components/NavBar';
import BlogPage from './pages/BlogPage';
import LoginPage from './pages/LoginPage';
import SearchPage from './pages/Searchpage';


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

        <Route path='/blogs/:slug' element={<BlogPage />}/>

        <Route path='/login' element={<LoginPage />}/>

        <Route path='/search' element={<SearchPage />}/>

        <Route path='*' element={<NotFoundPage />}/>
      </Routes>
    </div>
  )
}

export default App;