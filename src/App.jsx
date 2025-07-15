import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import Player from './components/Player/Player';
import MainContent from './components/MainContent/MainContent';
import Home from './pages/Home';
import Search from './pages/Search';
import Library from './pages/Library';
import './App.css';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-black">
        <Header />
        <div className="flex flex-1">
          <Sidebar />
          <MainContent>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<Search />} />
              <Route path="/library" element={<Library />} />
            </Routes>
          </MainContent>
        </div>
        <Player />
      </div>
    </Router>
  );
}

export default App;
