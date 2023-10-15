import express, { urlencoded } from "express";


const app = express()
let PORT = 8000

app.use(express.json())
app.use(urlencoded({extended: true}));


app.get("/", (req, res)=>{
   res.send("all notes")
})


app.listen(PORT, () => {
    console.log(`server is runnig on port ${PORT}`)
})