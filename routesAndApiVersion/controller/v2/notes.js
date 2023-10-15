 
const notes = [
    {
        "name": "first note",
        "title": "write anything what is your wish"
        },
        {
            "name": "second note",
            "title": "write anything what is your wish"
            },
            {
                "name": "third note",
                "title": "write anything what is your wish"
                }
]

export const getNotes2 = (req, res) =>{
    res.send(notes)
}
