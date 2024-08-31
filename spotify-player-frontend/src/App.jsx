import { useContext } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Player from './components/Player';
import Display from './components/Display';
import { PlayerContext } from './context/PlayerContext';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import SearchPage from './components/SearchPage';
import { useLocation } from 'react-router-dom';

function App() {
  const { audioRef, track, songsData } = useContext(PlayerContext);
  const location = useLocation();

  // Define routes where Sidebar, Display, and Player should not be shown
  const noLayoutRoutes = ['/login', '/signup'];

  const showLayout = !noLayoutRoutes.includes(location.pathname);

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        
        {/* <Route path="/search" element={<SearchPage />} /> */}
      </Routes>
      
      {showLayout && (
        <div className='h-screen bg-black'>
          {songsData.length !== 0 && (
            <>
              <div className='h-[90%] flex'>
                <Sidebar />
                <Display />
              </div>
              <Player />
            </>
          )}
          <audio ref={audioRef} src={track ? track.file : ""} preload='auto'></audio>
        </div>
      )}
    </>
  );
}

export default App;
