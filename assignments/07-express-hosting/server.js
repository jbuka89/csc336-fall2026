
import express from 'express'; // The "module" way (needs "type": "module" in package.json)

const app = express();
const port = 3000;

app.use(express.static("public"));


app.listen(port);