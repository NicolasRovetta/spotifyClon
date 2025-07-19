import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="h-full bg-black text-white flex flex-col p-4 mr-8" style={{ width: '72px' }}>
      <nav className="flex flex-col gap-4">
        
        <button
          type="button"
          aria-label="Abre Tu biblioteca"
          className="sidebar-library-btn"
          onClick={() => window.location.href = '/library'}
        >
          <span className="svg-default">
            <svg data-encore-id="icon" role="img" aria-hidden="true" width="24" height="24" viewBox="0 0 24 24">
              <path d="M14.5 2.134a1 1 0 0 1 1 0l6 3.464a1 1 0 0 1 .5.866V21a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V3a1 1 0 0 1 .5-.866M16 4.732V20h4V7.041zM3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1m6 0a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1"></path>
            </svg>
          </span>
          <span className="svg-hover">
            <svg data-encore-id="icon" role="img" aria-hidden="true" width="24" height="24" viewBox="0 0 24 24">
              <title>Abre Tu biblioteca</title>
              <path d="M14.457 15.207a1 1 0 0 1-1.414-1.414L14.836 12l-1.793-1.793a1 1 0 0 1 1.414-1.414l2.5 2.5a1 1 0 0 1 0 1.414z"></path>
              <path d="M20 22a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2zM4 20V4h4v16zm16 0H10V4h10z"></path>
            </svg>
          </span>
          <span className="visually-hidden">
            <h1 style={{ fontSize: '1rem', fontWeight: 500 }}>Tu biblioteca</h1>
          </span>
        </button>

      </nav>
      <div className="flex justify-center">
        <button
          type="button"
          aria-label="Crear"
          className="sidebar-add-btn"
        >
          <svg data-encore-id="icon" role="img" aria-hidden="true"  viewBox="0 0 16 16">
            <path d="M15.25 8a.75.75 0 0 1-.75.75H8.75v5.75a.75.75 0 0 1-1.5 0V8.75H1.5a.75.75 0 0 1 0-1.5h5.75V1.5a.75.75 0 0 1 1.5 0v5.75h5.75a.75.75 0 0 1 .75.75"></path>
          </svg>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
