import React from 'react';
import Playlist from '../components/Playlist/Playlist';

const trending = [
  { name: 'Vamo a Bailotear', artist: 'Luck Ra' },
  { name: 'DAISIES', artist: 'Katy Perry' },
  { name: 'Tu jardín con enanitos', artist: 'Los Enanitos Verdes' },
];

const Home = () => {
  return (
    <div>
      <Playlist title="Canciones en tendencia" items={trending} />
      {/* Puedes agregar más secciones aquí */}
    </div>
  );
};

export default Home;
