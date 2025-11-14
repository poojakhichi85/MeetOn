
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter'
import "../App.css"

export default function LandingPage() {
  const router = useNavigate()

  return (
    <div className='landingPageContainer'>
      <nav>
        <div className='navHeader'>
          <h2>MeetOn</h2>
        </div>
        <div className="navList">
          <p onClick={() => router("/alr83h")}>Join as Guest</p>
          <p onClick={() => router("/auth")}>Register</p>
          <p onClick={() => router("/home")}>Join</p>
          <div onClick={() => router("/auth")} role="button">Login</div>
        </div>
      </nav>

      <div className="landingMainContainer">
        <div>
          <h1 style={{ fontWeight: 'bold', fontSize: '1.6em' }}>
            <span style={{ color: "#FF9839" }}>Connect </span>
            <span style={{ color: "#ffffff" }}>
              <Typewriter
                words={['with your loved Ones...', 'from anywhere in the world.', 'face-to-face, anytime.']}
                loop={0}
                cursor
                cursorStyle='|'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h1>

          <p>Cover a distance using MeetOn</p>

        <br></br>
           <div role='button'>
            <Link to={"/auth"}>Get Started</Link>
          </div> 
        </div>

        <motion.div
          className="hero-image"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          <img src="/public/phones.png" alt="Video Call Mockup" className="mockup-img" />
        </motion.div>
      </div>
    </div>
  )
}



// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Typewriter } from 'react-simple-typewriter';
// import { motion } from 'framer-motion';
// import '../App.css';

// export default function LandingPage() {
//   const router = useNavigate();

//   return (
//     <div className="landingPageContainer animatedBackground">
//       <nav className="nav">
//         <h1 className="logo">MeetOn</h1>
//         <div className="nav-links">
//           <a href="/">Join as Guest</a>
//           <a href="/">Register</a>
//           <a href="/">Login</a>
//         </div>
//       </nav>

//       <div className="hero">
//         <div className="hero-text">
//           <h1>
//             <span style={{ color: '#f97316', fontWeight: 'bold' }}>Connect</span>{' '}
//             <span style={{ fontWeight: 'bold' }}>
//               from <span style={{ color: '#fff' }}>
//                 <Typewriter
//                   words={['Anywhere', 'Any Device', 'Any Distance']}
//                   loop={true}
//                   cursor
//                   cursorStyle="|"
//                   typeSpeed={70}
//                   deleteSpeed={50}
//                   delaySpeed={1000}
//                 />
//               </span>
//             </span>
//           </h1>
//           <p>Cover a distance using MeetOn</p>
//           <button className="cta-button">Get Started</button>
//         </div>

//         <motion.div
//           className="hero-image"
//           animate={{ y: [0, -10, 0] }}
//           transition={{ repeat: Infinity, duration: 3 }}
//         >
//           <img src="/public/phones.png" alt="Video Call Mockup" className="mockup-img" />
//         </motion.div>
//       </div>
//     </div>
//   );
// }
