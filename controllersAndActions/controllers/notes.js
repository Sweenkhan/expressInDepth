import {v4 as uuidv4} from "uuid";

let notes = [ 
]

export const getNotes = (req, res) => {
    res.send(notes)
}

export const saveNotes = (req, res) => {
    const note = req.body
    console.log(note)
    // notes.push({note})
    res.send("note has been saved")
}