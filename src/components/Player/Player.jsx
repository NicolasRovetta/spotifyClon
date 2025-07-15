import React from 'react';

const Player = () => {
  return (
    <footer className="w-full h-24 bg-black fixed bottom-0 left-0 flex items-center justify-between px-8 z-50">
      <div className="text-white">Canción en reproducción</div>
      <div className="flex gap-4">
        <button className="text-white">⏮️</button>
        <button className="text-white">⏯️</button>
        <button className="text-white">⏭️</button>
      </div>
      <div className="text-white">Volumen</div>
    </footer>
  );
};

export default Player;
