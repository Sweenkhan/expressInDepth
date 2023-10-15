import express from "express";
import bodyParser from "body-parser";
import { getNotes, saveNotes, modifiedNote } from "./controllers/notes.js";


const app = express()
let PORT = 8000

// app.use(express.json())
// app.use(urlencoded({extended: true}));
app.use(bodyParser.json());

app.get("/", (req, res)=>{
   res.send("all notes")
})

app.get("/notes", getNotes)

app.post("/notes", saveNotes)

app.patch("/notes/:name", modifiedNote)


app.listen(PORT, () => {
    console.log(`server is runnig on port ${PORT}`)
})