import { Routes, Route } from 'react-router-dom';
import './css/App.css';
import HomePage from './pages/HomePage.jsx';
import Favourites from './pages/Favourites.jsx';
import NavBar from './components/NavBar.jsx';
import { MovieProvider } from './contexts/MovieContext.jsx';
//import  MovieCard  from './components/MovieCard';

function App() {

  const movieNumber = 1;
  
  return (
    <MovieProvider>
    <div>
      <NavBar />
    <main className='main-content'>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/favourites' element={<Favourites />}/>
      </Routes>
    </main>
    </div>
  </MovieProvider>
  )
}

export default App
