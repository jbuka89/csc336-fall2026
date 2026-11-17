
import express from 'express'; // The "module" way (needs "type": "module" in package.json)

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get('/time', (req, res) => {
    const currentTime = new Date().toString()
    res.send(`The current time is: ${currentTime}`)
})


app.listen(port);