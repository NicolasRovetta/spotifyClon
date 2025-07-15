import React from 'react';

const MainContent = ({ children }) => {
  return (
    <main className="flex-1 overflow-y-auto p-8 text-white" style={{ minHeight: 'calc(100vh - 6rem)', background: 'linear-gradient(35deg, #2a0845 0%,rgb(98, 58, 171) 80%)', borderRadius: '0.5rem'}}>
      {children}
    </main>
  );
};

export default MainContent;
