// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Paper from '@mui/material/Paper';
// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { AuthContext } from '../contexts/AuthContext';
// import { Snackbar } from '@mui/material';




// // TODO remove, this demo shouldn't need to reset the theme.

// const defaultTheme = createTheme();

// export default function Authentication() {

    

//     const [username, setUsername] = React.useState("");
//     const [password, setPassword] = React.useState("");
//     const [name, setName] = React.useState("");
//     const [error, setError] = React.useState("");
//     const [message, setMessage] = React.useState("");


//     const [formState, setFormState] = React.useState(0);

//     const [open, setOpen] = React.useState(false)


//     const { handleRegister, handleLogin } = React.useContext(AuthContext);

//     let handleAuth = async () => {
//         try {
//             if (formState === 0) {

//                 let result = await handleLogin(username, password)


//             }
//             if (formState === 1) {
//                 let result = await handleRegister(name, username, password);
//                 console.log(result);
//                 setUsername("");
//                 setMessage(result);
//                 setOpen(true);
//                 setError("")
//                 setFormState(0)
//                 setPassword("")
//             }
//         } catch (err) {

//             console.log(err);
//             let message = (err.response.data.message);
//             setError(message);
//         }
//     }


//     return (
//         <ThemeProvider theme={defaultTheme}>
//             <Grid container component="main" sx={{ height: '100vh' }}>
//                 <CssBaseline />
//                 <Grid
//                     item
//                     xs={false}
//                     sm={4}
//                     md={7}
//                     // sx={{
//                     //     backgroundImage: 'url(/video.jpg)',
//                     //     backgroundRepeat: 'no-repeat',
//                     //      backgroundColor: (t) =>
//                     //      t.palette.mode === 'dark' ? t.palette.grey[50] : t.palette.grey[900],
//                     //     backgroundSize: 'cover',
//                     //     backgroundPosition: 'center',
//                     // }}
//                     sx={{
//                     backgroundImage: 'url(/video.jpg)',
//                     backgroundRepeat: 'no-repeat',
//                     backgroundColor: '#405895', // test with a solid color
//                     backgroundSize: 'cover',
//                     backgroundPosition: 'center',
//                     border: '2px solid red', // temporary for debugging
//                       }}
//                 />
//                 <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
//                     <Box
//                         sx={{
//                             my: 8,
//                             mx: 4,
//                             display: 'flex',
//                             flexDirection: 'column',
//                             alignItems: 'center',
//                         }}
//                     >
//                         <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//                             <LockOutlinedIcon />
//                         </Avatar>


//                         <div style={{ display: 'flex', gap: '16px' }}>
//                             <Button variant={formState === 0 ? "contained" : ""} onClick={() => { setFormState(0) }}>
//                                 Sign In
//                             </Button> 
//                             <Button variant={formState === 1 ? "contained" : ""} onClick={() => { setFormState(1) }}>
//                                 Sign Up
//                             </Button>
//                         </div>

//                         <Box component="form" noValidate sx={{ mt: 1 }}>
//                             {formState === 1 ? <TextField
//                                 margin="normal"
//                                 required
//                                 fullWidth
//                                 id="name"
//                                 label="Full Name"
//                                 name="name"
//                                 value={name}
//                                 autoFocus
//                                 onChange={(e) => setName(e.target.value)}
//                             /> : <></>}

//                             <TextField
//                                 margin="normal"
//                                 required
//                                 fullWidth
//                                 id="username"
//                                 label="Username"
//                                 name="username"
//                                 value={username}
//                                 autoFocus
//                                 onChange={(e) => setUsername(e.target.value)}

//                             />
//                             <TextField
//                                 margin="normal"
//                                 required
//                                 fullWidth
//                                 name="password"
//                                 label="Password"
//                                 value={password}
//                                 type="password"
//                                 onChange={(e) => setPassword(e.target.value)}

//                                 id="password"
//                             />

//                             <p style={{ color: "red" }}>{error}</p>

//                             <Button
//                                 type="button"
//                                 fullWidth
//                                 variant="contained"
//                                 sx={{ mt: 3, mb: 2 }}
//                                 onClick={handleAuth}
//                             >
//                                 {formState === 0 ? "Login " : "Register"}
//                             </Button>

//                         </Box>
//                     </Box>
//                 </Grid>
//             </Grid>

//             <Snackbar

//                 open={open}
//                 autoHideDuration={4000}
//                 message={message}
//             />

//         </ThemeProvider>
//     );
// }



// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import Paper from '@mui/material/Paper';
// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { AuthContext } from '../contexts/AuthContext';
// import { Snackbar } from '@mui/material';
// import { motion, AnimatePresence } from 'framer-motion';

// const defaultTheme = createTheme();

// export default function Authentication() {
//   const [username, setUsername] = React.useState("");
//   const [password, setPassword] = React.useState("");
//   const [name, setName] = React.useState("");
//   const [error, setError] = React.useState("");
//   const [message, setMessage] = React.useState("");
//   const [formState, setFormState] = React.useState(0);
//   const [open, setOpen] = React.useState(false);
//   const [inputErrors, setInputErrors] = React.useState({});

//   const { handleRegister, handleLogin } = React.useContext(AuthContext);

//   const validateFields = () => {
//     const newErrors = {};
//     if (!username) newErrors.username = "Username is required";
//     if (!password) newErrors.password = "Password is required";
//     if (formState === 1 && !name) newErrors.name = "Full name is required";
//     setInputErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleAuth = async () => {
//     if (!validateFields()) return;

//     try {
//       if (formState === 0) {
//         await handleLogin(username, password);
//       } else {
//         const result = await handleRegister(name, username, password);
//         setUsername("");
//         setPassword("");
//         setMessage(result);
//         setOpen(true);
//         setError("");
//         setFormState(0);
//       }
//     } catch (err) {
//       const message = err?.response?.data?.message || "Something went wrong!";
//       setError(message);
//     }
//   };

//   return (
//     <ThemeProvider theme={defaultTheme}>
//       <Grid container component="main" sx={{ height: '100vh' }}>
//         <CssBaseline />

//         {/* Left visual section with message */}
//         <Grid
//           item
//           xs={false}
//           sm={4}
//           md={7}
//           sx={{
//             backgroundImage: 'url(/video.jpg)',
//             backgroundRepeat: 'no-repeat',
//             backgroundColor: '#405895',
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             position: 'relative',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             color: 'white',
//             px: 4,
//             textAlign: 'center'
//           }}
//         >
//           <Box sx={{ zIndex: 1, fontSize: "1.8rem", fontWeight: 600 }}>
//             Connect to your loved ones <br /> anytime, anywhere.
//           </Box>
//         </Grid>

//         {/* Auth form section */}
//         <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
//           <Box
//             sx={{
//               my: 8,
//               mx: 4,
//               display: 'flex',
//               flexDirection: 'column',
//               alignItems: 'center',
//             }}
//           >
//             <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//               <LockOutlinedIcon />
//             </Avatar>

//             {/* Sign in / Sign up toggle buttons */}
//             <div style={{ display: 'flex', gap: '16px' }}>
//               <Button variant={formState === 0 ? "contained" : ""} onClick={() => setFormState(0)}>Sign In</Button>
//               <Button variant={formState === 1 ? "contained" : ""} onClick={() => setFormState(1)}>Sign Up</Button>
//             </div>

//             {/* Animated form */}
//             <Box component="form" noValidate sx={{ mt: 1, width: '100%' }}>
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={formState}
//                   initial={{ x: 100, opacity: 0 }}
//                   animate={{ x: 0, opacity: 1 }}
//                   exit={{ x: -100, opacity: 0 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   {formState === 1 && (
//                     <TextField
//                       margin="normal"
//                       required
//                       fullWidth
//                       id="name"
//                       label="Full Name"
//                       name="name"
//                       autoFocus
//                       value={name}
//                       onChange={(e) => setName(e.target.value)}
//                       error={!!inputErrors.name}
//                       helperText={inputErrors.name}
//                     />
//                   )}

//                   <TextField
//                     margin="normal"
//                     required
//                     fullWidth
//                     id="username"
//                     label="Username"
//                     name="username"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                     error={!!inputErrors.username}
//                     helperText={inputErrors.username}
//                   />

//                   <TextField
//                     margin="normal"
//                     required
//                     fullWidth
//                     name="password"
//                     label="Password"
//                     type="password"
//                     id="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     error={!!inputErrors.password}
//                     helperText={inputErrors.password}
//                   />

//                   <p style={{ color: "red" }}>{error}</p>

//                   <Button
//                     type="button"
//                     fullWidth
//                     variant="contained"
//                     sx={{ mt: 3, mb: 2 }}
//                     onClick={handleAuth}
//                   >
//                     {formState === 0 ? "Login" : "Register"}
//                   </Button>
//                 </motion.div>
//               </AnimatePresence>
//             </Box>
//           </Box>
//         </Grid>
//       </Grid>

//       <Snackbar
//         open={open}
//         autoHideDuration={4000}
//         message={message}
//         onClose={() => setOpen(false)}
//       />
//     </ThemeProvider>
//   );
// }



import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AuthContext } from '../contexts/AuthContext';
import { Snackbar } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';

const defaultTheme = createTheme();

export default function Authentication() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const [error, setError] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [formState, setFormState] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [inputErrors, setInputErrors] = React.useState({});

  const { handleRegister, handleLogin } = React.useContext(AuthContext);

  const validateFields = () => {
    const newErrors = {};
    if (!username) newErrors.username = "Username is required";
    if (!password) newErrors.password = "Password is required";
    if (formState === 1 && !name) newErrors.name = "Full name is required";
    setInputErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleAuth = async () => {
    if (!validateFields()) return;

    try {
      if (formState === 0) {
        await handleLogin(username, password);
      } else {
        const result = await handleRegister(name, username, password);
        setUsername("");
        setPassword("");
        setMessage(result);
        setOpen(true);
        setError("");
        setFormState(0);
      }
    } catch (err) {
      const message = err?.response?.data?.message || "Something went wrong!";
      setError(message);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />

        {/* Left visual section with image */}
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(/ca.jpeg)',  // ← Updated
            backgroundRepeat: 'no-repeat',
            backgroundColor: '#405895',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            px: 4,
            textAlign: 'center'
          }}
        >
          <Box sx={{ zIndex: 1, fontSize: "1.8rem", fontWeight: 600 ,color:'transparent',top: 0}}>
           Connect to your loved ones ...............................................<br /> anytime, anywhere. 
          </Box>
        </Grid>

        {/* Auth form section */}
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>

            <div style={{ display: 'flex', gap: '16px' }}>
              <Button variant={formState === 0 ? "contained" : ""} onClick={() => setFormState(0)}>Sign In</Button>
              <Button variant={formState === 1 ? "contained" : ""} onClick={() => setFormState(1)}>Sign Up</Button>
            </div>

            <Box component="form" noValidate sx={{ mt: 1, width: '100%' }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={formState}
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -100, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {formState === 1 && (
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="name"
                      label="Full Name"
                      name="name"
                      autoFocus
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      error={!!inputErrors.name}
                      helperText={inputErrors.name}
                    />
                  )}

                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    error={!!inputErrors.username}
                    helperText={inputErrors.username}
                  />

                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    error={!!inputErrors.password}
                    helperText={inputErrors.password}
                  />

                  <p style={{ color: "red" }}>{error}</p>

                  <Button
                    type="button"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={handleAuth}
                  >
                    {formState === 0 ? "Login" : "Register"}
                  </Button>
                </motion.div>
              </AnimatePresence>
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Snackbar
        open={open}
        autoHideDuration={4000}
        message={message}
        onClose={() => setOpen(false)}
      />
    </ThemeProvider>
  );
}
