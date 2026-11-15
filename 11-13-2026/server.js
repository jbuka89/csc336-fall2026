import express from "express"

const app = express();
const port = 3000;

app.use(express.static("public"));

app.listen(port, () => {
    console.log(`Server started on port: ${port}`)
})

app.get("/demo", (req, res)=>{
    console.log("DEMO REQUEST ON SERVER")
})