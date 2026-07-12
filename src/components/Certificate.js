

// import React from 'react';
// import pdfFile from '../Assets/A_Kedar_Shenoy.pdf';

// const Certificate = () => {
//   return (
//     <div className="flex flex-col items-center justify-center gap-6 p-6 mt-10">
//       {/* Download Button */}
//       <a
//         href={pdfFile}
//         download="Kedar-CV.pdf"
//         className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-6 rounded shadow transition"
//       >
//         Get CV
//       </a>
//     </div>
//   );
// };

// export default Certificate;



import React from 'react';
import pdfFile from '../Assets/A_Kedar_Shenoy.pdf';

const Certificate = () => {
  return (
    <div className="flex flex-col items-center justify-center align-middle gap-6 p-6 mt-10" style={{ color: '#faebd7', fontFamily: 'monospace' }}>
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-bold text-center">
        My Resume
      </h2>

      {/* Description */}
      <p className="text-lg text-center max-w-2xl leading-relaxed">
        Looking for a detailed overview of my skills and experience? You can download my complete resume here.
        It highlights my projects, professional journey, and technical expertise.
      </p>

      {/* Download Button */}
      <a
        href={pdfFile}
        download="A_Kedar_Shenoy_Resume.pdf" /* Changed default download filename for clarity */
        className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-6 rounded shadow transition-all duration-300 ease-in-out transform hover:scale-105"
      >
        Download My Resume
      </a>

      {/* Optional: Add a small note about the file type/size if desired */}
      <p className="text-sm text-gray-400 mt-2">
        (PDF, ~150KB)
      </p>
    </div>
  );
};

export default Certificate;