import express from 'express'
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors'

// import path from "path";
// import { fileURLToPath } from 'url';
// import { dirname } from 'path';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);


import postRoute from './routes/posts.js'
import userRoutes from './routes/user.js'

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))

app.use(cors());
app.use(express.json());

// app.use(express.static(path.join(__dirname, "public")));




const CONNECTION_URL = 'mongodb+srv://fahim32446:32446@cluster0.4uhqr.mongodb.net/Employee_Finder?retryWrites=true&w=majority'

//const CONNECTION_URL = 'mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false'
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, (req, res) => {

        console.log(`Server Run on port ${PORT}`);
    }))
    .catch((error) => console.log(error))


app.use('/posts', postRoute);
app.use('/user', userRoutes);


app.get('/', (req, res) => {
    res.send('App is Running');
})


// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "public", "index.html"));
// })


// app.get('/user', (req, res) => {
//     res.send('Hello World!')
//     console.log('Hello World!');
//   })
