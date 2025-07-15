import React from 'react';

const Playlist = ({ title, items }) => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {items && items.map((item, idx) => (
          <div key={idx} className="bg-neutral-700 rounded-lg p-4 hover:bg-neutral-600 cursor-pointer">
            <div className="w-full h-32 bg-neutral-600 rounded mb-2" />
            <div className="text-white font-semibold">{item.name}</div>
            <div className="text-sm text-gray-300">{item.artist}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Playlist;
