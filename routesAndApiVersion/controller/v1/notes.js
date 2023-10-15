 
const notes = [
    {
        "name": "first note",
        "title": "write anything what is your wish"
        },
        {
            "name": "second note",
            "title": "write anything what is your wish"
            }
]

export const getNotes = (req, res) =>{
    res.send(notes)
}

export const saveNotes = (req, res) => { 
    let note = req.body; 
    notes.push(note)
    res.send("note is saved")
}


export const findByName = (req, res) => {
   let {name} = req.params

   let result = notes.find((note) => {
    if(note.name === name)
     return note  
   })

   console.log(result)
   res.send(result)
}


export const deleteNotes = (req, res) =>{
    let {name} = req.params;

    // console.log(name)
   let result =  notes.filter(note => {
      return  note.name !== name
    })

    console.log(result)
    res.send("delete ho gya")
}