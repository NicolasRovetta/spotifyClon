import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="h-full bg-black text-white flex flex-col p-4 mr-8" style={{ width: '72px' }}>
      <nav className="flex flex-col gap-4">
        <Link to="/" className="font-bold text-lg">Inicio</Link>
        <Link to="/search" className="text-lg">Buscar</Link>
        <Link to="/library" className="text-lg">Tu Biblioteca</Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
