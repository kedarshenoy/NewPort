// import React, { useRef } from 'react';
// import '../Styles/Nav.css'
// import homeIcon from '../Assets/home.png';
// import aboutIcon from '../Assets/about.png';
// import cvIcon from '../Assets/cv.png';
// import contactIcon from '../Assets/contact.png';
// import workIcon from '../Assets/work.png';
// import plusIcon from '../Assets/plus.svg';
// import { useNavigation, useNavigate } from 'react-router-dom';
// const DraggableNavMenu = () => {
//   const navRef = useRef(null);
//   // const navigation=useNavigation();
//   const navigate= useNavigate()
//   const handleToggle = () => {
   
//   };


//   return (
//     <nav  ref={navRef}>
//       <div className='flex  gap-4'>
//         <div className="" onClick={handleToggle}>
//           <i className='bx bx-plus'><img src={plusIcon} className="svg-icon" alt="Toggle Icon" /></i>
//         </div>
//         <span style={{ '--i': 1 }}>
//           <a href="#"><img src={workIcon} className="svg-icon" alt="Work Icon" onClick={()=>{handleToggle();navigate('/work')}}/></a>
//         </span>
//         <span style={{ '--i': 2 }}>
//           <a href="#"><img src={contactIcon} className="svg-icon" alt="Contact Icon" onClick={()=>{handleToggle();navigate('/contact')}} /></a>
//         </span>
//         <span style={{ '--i': 3 }}>
//           <a href="#"><img src={cvIcon} className="svg-icon" alt="CV Icon" onClick={()=>{handleToggle();navigate('/certificate')}}/></a>
//         </span>
//         <span style={{ '--i': 4 }}>
//           <a href="#"><img src={aboutIcon} className="svg-icon" alt="About Icon" onClick={()=>{handleToggle();navigate('/about')}}/></a>
//         </span>
//         <span style={{ '--i': 5 }}>
//           <a href="#"><img src={homeIcon} className="svg-icon" alt="Home Icon" onClick={()=>{handleToggle();navigate('/')}}/></a>
//         </span>
//       </div>
//     </nav>
//   );
// };

// export default DraggableNavMenu;



// import React, { useRef, useState } from 'react';
// import '../Styles/Nav.css';
// import homeIcon from '../Assets/home.png';
// import aboutIcon from '../Assets/about.png';
// import cvIcon from '../Assets/cv.png';
// import contactIcon from '../Assets/contact.png';
// import workIcon from '../Assets/work.png';
// import plusIcon from '../Assets/plus.svg';
// import { useNavigate } from 'react-router-dom';

// const DraggableNavMenu = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const navigate = useNavigate();

//   const handleToggle = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="draggable-nav">
//       <div className={`menu-container ${isOpen ? 'open' : 'open'}`}>
//         <div className="toggle-btn" onClick={handleToggle}>
//           <img
//             src={plusIcon}
//             className={`svg-icon toggle-icon ${isOpen ? 'rotate' : ''}`}
//             alt="Toggle Icon"
//           />
//         </div>
//         <span style={{ '--i': 1 }}>
//           <a href="#">
//             <img
//               src={workIcon}
//               className="svg-icon"
//               alt="Work Icon"
//               onClick={() => {
//                 handleToggle();
//                 navigate('/work');
//               }}
//             />
//           </a>
//         </span>
//         <span style={{ '--i': 2 }}>
//           <a href="#">
//             <img
//               src={contactIcon}
//               className="svg-icon"
//               alt="Contact Icon"
//               onClick={() => {
//                 handleToggle();
//                 navigate('/contact');
//               }}
//             />
//           </a>
//         </span>
//         <span style={{ '--i': 3 }}>
//           <a href="#">
//             <img
//               src={cvIcon}
//               className="svg-icon"
//               alt="CV Icon"
//               onClick={() => {
//                 handleToggle();
//                 navigate('/certificate');
//               }}
//             />
//           </a>
//         </span>
//         <span style={{ '--i': 4 }}>
//           <a href="#">
//             <img
//               src={aboutIcon}
//               className="svg-icon"
//               alt="About Icon"
//               onClick={() => {
//                 handleToggle();
//                 navigate('/about');
//               }}
//             />
//           </a>
//         </span>
//         <span style={{ '--i': 5 }}>
//           <a href="#">
//             <img
//               src={homeIcon}
//               className="svg-icon"
//               alt="Home Icon"
//               onClick={() => {
//                 handleToggle();
//                 navigate('/');
//               }}
//             />
//           </a>
//         </span>
//       </div>
//     </nav>
//   );
// };

// export default DraggableNavMenu;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import homeIcon from '../Assets/home.png';
import aboutIcon from '../Assets/about.png';
import cvIcon from '../Assets/cv.png';
import contactIcon from '../Assets/contact.png';
import workIcon from '../Assets/work.png';
import plusIcon from '../Assets/plus.svg';

const DraggableNavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed sm:right-2 sm:top-2  flex items-center z-50">
      {/* Menu Icons */}
      <div
        className={`flex space-x-4 transition-all duration-500 ease-in-out ${
          isOpen ? 'opacity-100 -translate-x-0' : 'opacity-0 translate-x-10'
        }`}
        style={{
          display: 'flex',
          alignItems: 'center',
          transition: 'transform 0.5s ease, opacity 0.5s ease',
        }}
      >
        <img onClick={()=>{toggleMenu();navigate('/home')}} src={homeIcon} alt="Home" className="w-12 h-12 cursor-pointer" />
        <img onClick={()=>{toggleMenu();navigate('/about')}} src={aboutIcon} alt="About" className="w-12 h-12 cursor-pointer" />
        <img onClick={()=>{toggleMenu();navigate('/cv')}} src={cvIcon} alt="CV" className="w-12 h-12 cursor-pointer" />
        <img onClick={()=>{toggleMenu();navigate('/contact')}} src={contactIcon} alt="Contact" className="w-12 h-12 cursor-pointer" />
        <img onClick={()=>{toggleMenu();navigate('/projects')}} src={workIcon} alt="Work" className="w-12 h-12 sm:pr-2 cursor-pointer" />
      </div>

      {/* Toggle button */}
      <div
        className={`w-16 h-16 bg-black text-yellow-500 rounded-full flex justify-center items-center  cursor-pointer shadow-lg transform transition-transform duration-300 hover:border-red-200 ${
          isOpen ? 'rotate-45' : 'rotate-0'
        }`}
        onClick={toggleMenu}
      >
        <img
          src={plusIcon}
          alt="Toggle Icon"
          className="w-8 h-8 transition-transform duration-300 "
        />
      </div>
    </nav>
  );
};

export default DraggableNavMenu;

