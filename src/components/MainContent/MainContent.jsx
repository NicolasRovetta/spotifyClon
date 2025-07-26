import React, { useState, useEffect, useRef } from 'react';
import { Home, Search, Library, Plus, Heart, Download } from 'lucide-react';
import axios from 'axios';

const MainContent = () => {
  const [activeTab, setActiveTab] = useState('todo');
  const [songs, setSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio());

  // Cargar canciones populares al montar el componente
  useEffect(() => {
    const fetchSongs = async () => {
      try {
        // Usamos una API de ejemplo con datos simulados para evitar problemas de CORS
        const mockSongs = [
          {
            id: '1',
            name: 'Midnight City',
            primaryArtists: 'M83',
            image: [
              { link: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' },
              { link: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' }
            ],
            downloadUrl: [
              { link: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' }
            ]
          },
          {
            id: '2',
            name: 'Blinding Lights',
            primaryArtists: 'The Weeknd',
            image: [
              { link: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' },
              { link: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' }
            ],
            downloadUrl: [
              { link: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3' }
            ]
          },
          {
            id: '3',
            name: 'Summer',
            primaryArtists: 'Calvin Harris',
            image: [
              { link: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80' },
              { link: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80' }
            ],
            downloadUrl: [
              { link: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3' }
            ]
          },
          {
            id: '4',
            name: 'Uptown Funk',
            primaryArtists: 'Mark Ronson ft. Bruno Mars',
            image: [
              { link: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' },
              { link: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' }
            ],
            downloadUrl: [
              { link: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3' }
            ]
          },
          // Agregar más canciones de ejemplo según sea necesario
        ];
        
        setSongs(mockSongs);
      } catch (error) {
        console.error('Error al cargar las canciones:', error);
      }
    };

    fetchSongs();
  }, []);

  // Manejar la reproducción de canciones
  const togglePlay = async (song) => {
    if (currentSong?.id === song.id) {
      // Si es la misma canción, pausar o reanudar
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        await audioRef.current.play();
        setIsPlaying(true);
      }
    } else {
      // Si es una canción diferente, detener la actual y reproducir la nueva
      if (audioRef.current) {
        audioRef.current.pause();
      }
      
      // Usar la primera URL de descarga disponible
      const audioUrl = song.downloadUrl[0]?.link;
      
      if (audioUrl) {
        audioRef.current = new Audio(audioUrl);
        audioRef.current.play()
          .then(() => {
            setCurrentSong(song);
            setIsPlaying(true);
          })
          .catch(error => console.error('Error al reproducir la canción:', error));

        // Manejar cuando la canción termina
        audioRef.current.onended = () => {
          setIsPlaying(false);
        };
      }
    }
  };

  const tabs = [
    { id: 'todo', label: 'Todo' },
    { id: 'musica', label: 'Música' },
    { id: 'podcasts', label: 'Pódcasts' }
  ];

  const getButtonClass = (tabId) => {
    return `px-4 py-1 rounded-full font-semibold cursor-pointer ${
      activeTab === tabId 
        ? 'bg-white/100 text-black font-bold w-[55.65px] h-[32px] flex items-center justify-center' 
        : 'bg-white/10 text-white/70 hover:bg-white/20'
    }`;
  };

  return (
    <div className="main-view-container w-full h-full overflow-hidden rounded-lg ml-4">
      {/* Header color bar */}
      
      {/* Filters */}
      <div className="flex gap-2 mt-4 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={getButtonClass(tab.id)}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {/* Content Section */}
      {activeTab === 'todo' && (
        <>
          <section className="mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 cursor-pointer">
          {songs.map((song, i) => (
            <div key={song.id} className="group flex items-center bg-white/10 rounded-lg overflow-hidden hover:bg-white/20 transition p-2">
              <img 
                src={song.image[1]?.link || song.image[0]?.link} 
                alt={song.name}
                className="w-16 h-16 rounded shadow-inner mr-4 flex-shrink-0 object-cover"
              />
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-white truncate">{song.name}</p>
                <p className="text-sm text-gray-400 truncate">
                  {song.primaryArtists || 'Artista desconocido'}
                </p>
              </div>
              <button 
                onClick={() => togglePlay(song)}
                className="ml-2 bg-green-500 hover:bg-green-400 hover:scale-105 text-black rounded-full p-3 shadow transition opacity-0 group-hover:opacity-100 focus:opacity-100 pointer-events-auto h-14 w-14 flex items-center justify-center"
              >
                {currentSong?.id === song.id && isPlaying ? (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 19c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2s-2 .9-2 2v10c0 1.1.9 2 2 2zm6-12v10c0 1.1.9 2 2 2s2-.9 2-2V7c0-1.1-.9-2-2-2s-2 .9-2 2z"></path>
                  </svg>
                ) : (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606"></path>
                  </svg>
                )}
              </button>
            </div>
          ))}
        </div>
      </section>
      {/* New Releases Carousel Section */}
      <section className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <a href="#" className="text-sm text-gray-300 hover:underline">Mostrar todos</a>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-2 cursor-pointer">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="group min-w-[180px] max-w-[180px] bg-white/10 rounded-lg p-4 flex flex-col items-center hover:bg-white/20 transition">
              <div className="w-32 h-32 bg-gray-400 rounded mb-3" />
              <div className="font-semibold text-white text-center mb-1">Nombre playlist {i+1}</div>
              <div className="text-xs text-gray-300 text-center mb-2">Descripción breve</div>
              <button className="bg-green-500 hover:bg-green-400 text-white rounded-full p-2 shadow transition opacity-0 group-hover:opacity-100 focus:opacity-100 pointer-events-auto">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606" />
                </svg>
              </button>
            </div>
          ))}
        </div>
          </section>
          
          {/* New Releases Carousel Section */}
          <section className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <a href="#" className="text-sm text-gray-300 hover:underline">Mostrar todos</a>
            </div>
            <div className="flex gap-4 overflow-x-auto pb-2 cursor-pointer">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="group min-w-[180px] max-w-[180px] bg-white/10 rounded-lg p-4 flex flex-col items-center hover:bg-white/20 transition">
                  <div className="w-32 h-32 bg-gray-400 rounded mb-3" />
                  <div className="font-semibold text-white text-center mb-1">Nombre playlist {i+1}</div>
                  <div className="text-xs text-gray-300 text-center mb-2">Descripción breve</div>
                  <button className="bg-green-500 hover:bg-green-400 text-white rounded-full p-2 shadow transition opacity-0 group-hover:opacity-100 focus:opacity-100 pointer-events-auto">
                    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </section>
        </>
      )}
      
      {activeTab === 'musica' && (
        <div className="flex items-center justify-center h-64">
          <p className="text-white/70">Contenido de Música</p>
        </div>
      )}
      
      {activeTab === 'podcasts' && (
        <div className="flex items-center justify-center h-64">
          <p className="text-white/70">Contenido de Pódcasts</p>
        </div>
      )}
    </div>
  );
};

export default MainContent;
