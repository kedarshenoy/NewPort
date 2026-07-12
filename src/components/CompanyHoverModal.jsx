import React, { useRef } from 'react';
import ReactDOM from 'react-dom';

export default function CompanyHoverModal({ company, onMouseEnter, onMouseLeave }) {
  const modalRef = useRef(null);
  const modalRoot = document.getElementById('modal-root');

  const baseModalStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 999999,
    animation: 'fadeInModal 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards',
  };

  const dummyCompany = company || {
    name: "TEST MODAL",
    image: "https://via.placeholder.com/100x100?text=TEST",
    website: "https://www.example.com"
  };

  const LogoComponent = dummyCompany.image;
  const isSvgComponent = typeof LogoComponent !== 'string';

  if (!modalRoot) {
    console.error("modal-root element not found in index.html!");
    return null;
  }

  return ReactDOM.createPortal(
    <div style={baseModalStyle}>
      {/* Keyframe injection */}
      <style>{`
        @keyframes fadeInModal {
          from {
            opacity: 0;
            transform: translate(-50%, -46%) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
        }
      `}</style>
      
      {/* Glassmorphic Modal Card */}
      <div
        ref={modalRef}
        className="w-11/12 max-w-sm sm:max-w-md mx-auto p-8 rounded-2xl text-center flex flex-col items-center justify-center font-mono
                   bg-zinc-950/95 backdrop-blur-2xl border border-[gold]/40 text-[#faebd7]
                   shadow-[0_15px_35px_rgba(0,0,0,0.9),_0_0_20px_rgba(255,215,0,0.1)]
                   overflow-hidden transition-all duration-300 hover:border-[gold]/80"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {/* Decorative top accent line */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[gold]/50 to-transparent"></div>
        
        {/* Company Logo container */}
        <div className="w-28 h-28 sm:w-32 sm:h-32 mb-6 p-2 bg-white/10 border border-zinc-800/80 rounded-2xl flex items-center justify-center overflow-hidden shadow-inner">
          {isSvgComponent ? (
            <LogoComponent className="w-full h-full filter drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)] transition-transform duration-300 hover:scale-105" />
          ) : (
            <svg viewBox="0 0 100 100" className="w-full h-full filter drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)] transition-transform duration-300 hover:scale-105">
              <image
                href={dummyCompany.image}
                x="0"
                y="0"
                width="100"
                height="100"
                preserveAspectRatio="xMidYMid meet"
              />
            </svg>
          )}
        </div>

        {/* Company Name */}
        <h3 className="text-xl sm:text-2xl font-bold mb-4 tracking-tight text-[#faebd7]">
          {dummyCompany.name}
        </h3>

        {/* Action Button */}
        <a
          href={dummyCompany.website}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-zinc-900 text-[gold] border border-[gold]/40 
                     text-sm sm:text-base font-semibold transition-all duration-300 
                     hover:bg-[gold] hover:text-black hover:border-[gold] hover:shadow-[0_0_15px_rgba(255,215,0,0.3)]
                     transform hover:-translate-y-0.5"
        >
          <span>Visit Website</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </div>,
    modalRoot
  );
}