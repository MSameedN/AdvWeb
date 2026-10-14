import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import http from 'http';
import url from 'url';

import connectdb from './config/db.js';
import getTime from './date.js';
import authRoute from './routes/authRoutes.js';

dotenv.config();

getTime();

const app = express();

app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:5173'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));
app.use(express.json());

// Routes
app.use('/api/auth', authRoute);
app.get('/', (req, res) => res.send('Welcome to the Home Page!'));

// URL parser test snippet
const adr = 'http://localhost:8080/default.htm?year=2017&month=february';
const q = url.parse(adr, true);
console.log(q.host);
console.log(q.pathname);
console.log(q.search);
console.log(q.query.month);

connectdb();

const server = http.createServer(app);

const PORT = process.env.PORT || 5001;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// import express from 'express';
// import cors  from 'cors';
// import dotenv from 'dotenv';

// // Load env vars FIRST before any other imports that may use them
// dotenv.config();

// import authController from '../controllers/authController.js';
// import connectdb from './config/db.js';
// import http, { createServer } from "http";
// import url from 'url';
// import getTime from  "./date.js";
// import authRoute from "./routes/authRoutes.js";

// getTime();




// const app = express();

// app.use(cors({
//     origin: [], // Empty array blocks all incoming cross-origin requests
//     methods: ["GET", "POST", "PUT", "DELETE"], // Note: property name is 'methods' (plural)
//     credentials: true
// }));
// app.use(express.json());

// app.use("/api/auth" , authRoute);

// // Basic routes on the Express app
// app.get('/', (req, res) => res.send('Welcome to the Home Page!'));


// const server = http.createServer(app); 

// var adr = 'http://localhost:8080/default.htm?year=2017&month=february'; 
// var q = url.parse(adr, true); 
// console.log(q.host); //returns 'localhost:8080' 
// console.log(q.pathname); //returns '/default.htm' 
// console.log(q.search); //returns '?year=2017&month=february' 
// var qdata = q.query; //returns an object: { year: 2017, month: 'february' } 
// console.log(qdata.month); //returns 'february' 



// connectdb();

// console.log("CLAB_11");
// console.log("abc");
// server.listen(5001, ()=>{
//     console.log("server is running on port 5001");
// })




// import authRoute from "./routes/authRoutes.js";

// import express from 'express';
// import cors from 'cors';
// import dotenv from 'dotenv';
// import { connect } from 'mongoose';

// import http, {createServer} from "http";

// // import CalNDate from './date.js';

// // console.log();
// // CalNDate();
// // console.log();


// dotenv.config();

// const app = express();
// app.use(cors({

//     origin : [],
//     method : ["GET","POST","PUT","DELETE"],
//     credentials : true
// }
// ));
// app.use(express.json());

// app.use("/api/auth", authRoute);

// app.get('/', (req, res) => res.send('Welcome to the Home Page!'));

// const server = http.createServer(app);





// console.log('clab-11');

// app.listen(2000,()=>{
//     console.log("server is running on port 2000");
// })


// const app = express();
// const PORT = 3000;

// app.get('/', (req, res) => {
//     res.send('Hello from your new Express server using ES Modules!');
// });

// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });