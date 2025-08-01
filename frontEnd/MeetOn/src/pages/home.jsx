// import React, { useContext, useState } from 'react'
// import withAuth from '../utils/withAuth'
// import { useNavigate } from 'react-router-dom'
// import "../App.css";
// import { Button, IconButton, TextField } from '@mui/material';
// import RestoreIcon from '@mui/icons-material/Restore';
// import { AuthContext } from '../contexts/AuthContext';

// export function HomeComponent() {


//     let navigate = useNavigate();
//     const [meetingCode, setMeetingCode] = useState("");


//     const {addToUserHistory} = useContext(AuthContext);
//     let handleJoinVideoCall = async () => {
//         await addToUserHistory(meetingCode)
//         navigate(`/${meetingCode}`)
//     }

//     return (
//         <>

//             <div className="navBar">

//                 <div style={{ display: "flex", alignItems: "center" }}>

//                     <h2>MeetOn</h2>
//                 </div>

//                 <div style={{ display: "flex", alignItems: "center" }}>
//                     <IconButton onClick={
//                         () => {
//                             navigate("/history")
//                         }
//                     }>
//                         <RestoreIcon />
//                     </IconButton>
//                     <p>History</p>

//                     <Button onClick={() => {
//                         localStorage.removeItem("token")
//                         navigate("/auth")
//                     }}>
//                         Logout
//                     </Button>
//                 </div>


//             </div>


//             <div className="meetContainer">
//                 <div className="leftPanel">
//                     <div>
//                         <h2>Providing Quality Video Call Just Like Quality Education</h2>

//                         <div style={{ display: 'flex', gap: "10px" }}>

//                             <TextField onChange={e => setMeetingCode(e.target.value)} id="outlined-basic" label="Meeting Code" variant="outlined" />
//                             <Button onClick={handleJoinVideoCall} variant='contained'>Join</Button>

//                         </div>
//                     </div>
//                 </div>
//                 <div className='rightPanel'>
//                     <img srcSet='/logo3.png' alt="" />
//                 </div>
//             </div> 
//         </>
//     )
// }


// export default withAuth(HomeComponent)




// import React, { useContext, useState } from 'react'
// import withAuth from '../utils/withAuth'
// import { useNavigate } from 'react-router-dom'
// import "../App.css";
// import { Button, IconButton, TextField } from '@mui/material';
// import RestoreIcon from '@mui/icons-material/Restore';
// import { AuthContext } from '../contexts/AuthContext';

// export function HomeComponent() {
//     const navigate = useNavigate();
//     const [meetingCode, setMeetingCode] = useState("");
//     const { addToUserHistory } = useContext(AuthContext);

//     const handleJoinVideoCall = async () => {
//         if (!meetingCode.trim()) return;
//         await addToUserHistory(meetingCode);
//         navigate(`/${meetingCode}`);
//     };

//     return (
//         <>
//             {/* Navbar */}
//             <div className="navBar" style={{
//                 display: 'flex',
//                 justifyContent: 'space-between',
//                 alignItems: 'center',
//                 padding: '10px 30px',
//                 borderBottom: '1px solid #ddd',
//                 backgroundColor: '#fff'
//             }}>
//                 {/* Logo */}
//                 <div style={{ display: "flex", alignItems: "center" }}>
//                     <img
//                         src="/logo-meeton.png"
//                         alt="MeetOn Logo"
//                         style={{ height: "40px", marginRight: "10px" }}
//                     />
//                     <h2 style={{ margin: 0 }}>MeetOn</h2>
//                 </div>

//                 {/* Right side buttons */}
//                 {/* <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
//                     <IconButton onClick={() => navigate("/history")} title="History">
//                         <RestoreIcon />
//                     </IconButton>
//                     <p style={{ margin: 0 }}>History</p> */}

//                  <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
//                     <Button
//                         onClick={() => {
//                             localStorage.removeItem("token");
//                             navigate("/auth");
//                         }}
//                         variant="contained"
//                         color="secondary"
//                     >
//                         Logout
//                     </Button>
//                 </div>
//             </div>

//             {/* Main Content */}
//             <div className="meetContainer" style={{
//                 display: 'flex',
//                 justifyContent: 'space-between',
//                 alignItems: 'center',
//                 padding: '60px 10%',
//                 minHeight: '80vh'
//             }}>
//                 {/* Left Side */}
//                 <div className="leftPanel" style={{ flex: 1 }}>
//                     <h2 style={{
//                         fontWeight: 'bold',
//                         fontSize: '2rem',
//                         marginBottom: '20px',
//                         lineHeight: '1.3'
//                     }}>
//                         Connect with your loved ones over a Quality Video Call
//                     </h2>

//                     <div style={{ display: 'flex', gap: "15px", alignItems: 'center' }}>
//                         <TextField
//                             onChange={e => setMeetingCode(e.target.value)}
//                             id="outlined-basic"
//                             label="Enter Meeting Code"
//                             variant="outlined"
//                             size="small"
//                             style={{ width: '250px' }}
//                         />

//                         <Button
//                             onClick={handleJoinVideoCall}
//                             variant="contained"
//                             size="medium"
//                             sx={{
//                                 background: 'linear-gradient(to right, #3f51b5, #5c6bc0)',
//                                 color: '#fff'
//                             }}
//                         >
//                             Join
//                         </Button>
//                     </div>
//                 </div>

//                 {/* Right Side */}
//                 <div className='rightPanel' style={{ flex: 1, textAlign: 'center' }}>
//                     <img
//                         src="/logo3.png"
//                         alt="Video Call Illustration"
//                         style={{ maxWidth: '100%', height: 'auto' }}
//                     />
//                 </div>
//             </div>
//         </>
//     );
// }

// export default withAuth(HomeComponent);



import React, { useContext, useState } from 'react'
import withAuth from '../utils/withAuth'
import { useNavigate } from 'react-router-dom'
import "../App.css"
import { Button, IconButton, TextField } from '@mui/material'
import RestoreIcon from '@mui/icons-material/Restore'
import { AuthContext } from '../contexts/AuthContext'

export function HomeComponent() {
    const navigate = useNavigate()
    const [meetingCode, setMeetingCode] = useState("")
    const { addToUserHistory } = useContext(AuthContext)

    const handleJoinVideoCall = async () => {
        if (!meetingCode.trim()) return
        await addToUserHistory(meetingCode)
        navigate(`/${meetingCode}`)
    }

    return (
        <>
            {/* Navbar */}
            <div className="navBar" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '15px 30px',
                backgroundColor: '#fff',
                borderBottom: '1px solid #eee',
                boxShadow: '0 1px 5px rgba(0,0,0,0.05)'
            }}>
                
          
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img
                        src="/logo-meeton.png"
                        alt="MeetOn Logo"
                        style={{ height: '35px', marginRight: '10px' }}
                    />
                    <h2 style={{ fontSize: '1.5rem', margin: 0 }}>MeetOn</h2>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <Button
                        variant="contained"
                        style={{ background: 'linear-gradient(to right, #3f51b5, #5c6bc0)', color: '#fff' }}
                        onClick={() => {
                            localStorage.removeItem("token")
                            navigate("/auth")
                        }}
                    >
                        Logout
                    </Button>
                     <Button
                        variant="contained"
                        style={{ background: 'linear-gradient(to right, #3f51b5, #5c6bc0)', color: '#fff' }}
                        onClick={() => {
                            localStorage.removeItem("token")
                            navigate("/back")
                        }}
                    >
                        Home
                    </Button>
                     <Button
                        variant="contained"
                        style={{ background: 'linear-gradient(to right, #3f51b5, #5c6bc0)', color: '#fff' }}
                        onClick={() => {
                            localStorage.removeItem("token")
                            navigate("/auth")
                        }}
                    >
                        Login
                    </Button>

                </div>
            </div>

            {/* Main Section */}
            <div className="meetContainer" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '60px 10%',
                minHeight: '80vh',
                flexWrap: 'wrap'
            }}>
                {/* Left Panel */}
                <div style={{ flex: 1, minWidth: '300px' }}>
                    <h1 style={{
                        fontWeight: 'bold',
                        fontSize: '2.3rem',
                        lineHeight: '1.3',
                        marginBottom: '30px'
                    }}>
                        Connect with your loved ones over a Quality Video Call........
                    </h1>

                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
                        <TextField
                            label="Enter Meeting Code"
                            variant="outlined"
                            size="small"
                            onChange={e => setMeetingCode(e.target.value)}
                            style={{ width: '250px' }}
                        />
                        <Button
                            onClick={handleJoinVideoCall}
                            variant="contained"
                            style={{
                                background: 'linear-gradient(to right, #3f51b5, #5c6bc0)',
                                color: '#fff',
                                padding: '8px 20px'
                            }}
                        >
                            JOIN
                        </Button>
                    </div>
                </div>

                {/* Right Panel */}
                <div style={{ flex: 1, minWidth: '300px', textAlign: 'center' }}>
                    <img
                        src="/logo3.png"
                        alt="Video Call Illustration"
                        style={{ maxWidth: '100%', height: 'auto' }}
                    />
                </div>
            </div>
        </>
    )
}

export default withAuth(HomeComponent)
