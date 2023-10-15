// import {v4 as uuidv4} from "uuid";

let notes = []

export const getNotes = (req, res) => {
    res.send(notes)
}

export const saveNotes = (req, res) => {
    let note = req.body;
    
    notes.push({...note})
    console.log(note)
    res.send("note has been saved")
}

export const modifiedNote = (req, res) =>{
    let massage = req.params

    console.log(massage)
    res.send(massage)
}