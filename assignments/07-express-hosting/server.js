
import express from 'express'; //Imports express module

//Creates express application imported from express module
const app = express();
//Port number is set to 3000
const port = 3000;

//Tells the express app to use static files from the folder called "public"
app.use(express.static("public"));

//https://csc336-fall2026-2emy.onrender.com/time
//Creates new Date object and sends it as a response
app.get('/time', (req, res) => {
    const currentTime = new Date().toString()
    res.send(`The current time is: ${currentTime}`)
})

//Starts the app on port 3000
app.listen(port);