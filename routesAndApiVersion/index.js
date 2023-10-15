import express from "express";
import notesFirstRouter from "./router/V1/notesRouter.js"; 
import secondRouter from "./router/V2/notesRouter2.js";

const app = express()
let PORT = 8080


app.use(express.json())



//-----------------------------------FIRST VERSION API---------------------
app.use(notesFirstRouter)

app.get("/", (req, res) =>{
    res.send("all notes")
}) 


//----------------------------------SECOND VERSION API---------------------

app.use(secondRouter)

app.listen(PORT, () =>{
    console.log(`server is running on ${PORT}`)
})