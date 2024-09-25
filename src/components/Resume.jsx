// import React from 'react';


// export const Resume = () => {
//     return (
//     <section>



//   <div className='button-container'>
//     <a href="../assets/Isaiah_Skidmore_Resume.pdf" download>
//     <button className='btn-resume'>Click To Download</button>
//     </a>
//     </div>
    
        
//         <div className="list">
//         <ul>
//             <li>Full Stack Web Development</li>
//             <li>JavaScript</li>
//             <li>React & Node.JS</li>
//             <li>RESTful API Integration</li>
//             <li>Git and Version Control</li>
//         </ul>
//         </div>
//     </section>
//     );
// };

// export default Resume;


import React from 'react';

export const Resume = () => {
    return (
    <section>
        <div className='button-container'>
            <a href="/Isaiah_Skidmore_Resume.pdf" download>
                <button className='btn-resume'>Click To Download My Resume</button>
            </a>
        </div>
        
        <div className="list">
            <ul>
                <li>Full Stack Web Development</li>
                <li>JavaScript</li>
                <li>React & Node.JS</li>
                <li>RESTful API Integration</li>
                <li>Git and Version Control</li>
            </ul>
        </div>
    </section>
    );
};

export default Resume;


