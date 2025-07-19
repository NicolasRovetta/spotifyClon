import React from 'react';

const MainContent = () => {
  return (
    <div className="main-view-container w-full h-full overflow-hidden rounded-lg" style={{background: 'linear-gradient(35deg, #2a0845 0%,rgb(80, 24, 240) 80%)'}}>
      {/* Header color bar */}
      
      {/* Filters */}
      <div className="flex gap-2 mt-4 mb-6">
        <button className="px-4 py-1 rounded-full bg-white/20 text-white font-semibold">Todo</button>
        <button className="px-4 py-1 rounded-full bg-white/10 text-white/70 font-semibold">Música</button>
        <button className="px-4 py-1 rounded-full bg-white/10 text-white/70 font-semibold">Pódcasts</button>
      </div>
      {/* Greeting Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">¡Buenas noches!</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="flex items-center bg-white/10 rounded-lg overflow-hidden hover:bg-white/20 transition p-2">
              <div className="w-16 h-16 bg-gray-500 rounded shadow-inner mr-4 flex-shrink-0" />
              <span className="font-semibold text-white">Título playlist {i+1}</span>
              <button className="ml-auto bg-green-500 hover:bg-green-400 text-white rounded-full p-2 shadow transition">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
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
          <h3 className="text-xl font-bold">¡Hoy es viernes de novedades!</h3>
          <a href="#" className="text-sm text-gray-300 hover:underline">Mostrar todos</a>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-2">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="min-w-[180px] max-w-[180px] bg-white/10 rounded-lg p-4 flex flex-col items-center hover:bg-white/20 transition">
              <div className="w-32 h-32 bg-gray-400 rounded mb-3" />
              <div className="font-semibold text-white text-center mb-1">Nombre playlist {i+1}</div>
              <div className="text-xs text-gray-300 text-center mb-2">Descripción breve</div>
              <button className="bg-green-500 hover:bg-green-400 text-white rounded-full p-2 shadow transition">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MainContent;
