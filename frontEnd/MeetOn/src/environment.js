// let IS_PROD=true;


// const server=IS_PROD ?
//       "https://MeetOnBackEnd.onrender.com" :

//       "http://localhost:8000"
 


// export default server;
let IS_PROD = true;
const server = IS_PROD ?
    "https://MeetOnBackEnd.onrender.com" :

    "http://localhost:8000"


export default server;