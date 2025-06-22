// import React from 'react';

// const ProblemCard = ({ icon, title, children }) => (
//     <div className="bg-white p-8 rounded-2xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
//         <div className="flex items-center justify-center w-full bg-[var(--color-primary)]/20 text-[var(--color-primary)] mb-6">
//             {icon}
//         </div>
//         <div className="text-center">
//             <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">{title}</h3>
//             <div className="text-[var(--color-text-secondary)]">
//                 {children}
//             </div>
//         </div>
//     </div>
// );

// export default ProblemCard; 
// const ProblemCard = ({ icon, title, children }) => (
//   <div className="bg-white p-8 rounded-2xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
//       <div className="flex items-center justify-center w-full bg-[var(--color-primary)]/20 text-[var(--color-primary)] mb-6">
//           {icon}
//       </div>
//       <h3 className="text-xl font-bold text-black mb-3">{title}</h3>
//       <p className="text-gray-900">{children}</p>
//   </div>
import React from 'react';

const ProblemCard = ({ icon, title, children, invertBg = false }) => (
    <div className={`p-8 rounded-2xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300 ${invertBg ? 'bg-[var(--color-bg)] text-[var(--color-primary)]' : 'bg-white text-black'}`}>
        <div className="flex items-center justify-center w-full bg-[var(--color-primary)]/20 text-[var(--color-primary)] mb-6">
            {icon}
        </div>
            <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">{title}</h3>
            <p className={`text-base ${invertBg ? 'text-[var(--color-text-primary)]' : 'text-[var(--color-text-secondary)]'}`}>
                {children}
            </p>
        
    </div>
);

export default ProblemCard; 