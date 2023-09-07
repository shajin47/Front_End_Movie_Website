import './App.css';
import Baner from './components/Baner';
import Navbar from './components/Navbar';
import Watchlist from './components/Watchlist';
import Movies from './components/Movies';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={
              <>
                <Baner/>
                <Movies/>
              </>
            }>
            </Route>
            <Route path='/watchlist' element={<><Watchlist/></>}></Route>
          
          
        </Routes>
        

      </BrowserRouter>
      
    </div>
  );
}

export default App;
