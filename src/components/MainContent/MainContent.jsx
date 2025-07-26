import React, { useState } from 'react';

const MainContent = () => {
  const [activeTab, setActiveTab] = useState('todo');

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
          {[...Array(8)].map((_, i) => (
            <div key={i} className="group flex items-center bg-white/10 rounded-lg overflow-hidden hover:bg-white/20 transition p-2">
              <div className="w-16 h-16 bg-gray-500 rounded shadow-inner mr-4 flex-shrink-0" />
              <span className="font-semibold text-white">Título playlist {i+1}</span>
              <button className="ml-auto bg-green-500 hover:bg-green-400 text-white rounded-full p-2 shadow transition opacity-0 group-hover:opacity-100 focus:opacity-100 pointer-events-auto">
                <svg width="40" height="40" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288z" />
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
