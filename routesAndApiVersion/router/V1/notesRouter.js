import express from "express";
import { getNotes, saveNotes, deleteNotes, findByName } from "../../controller/v1/notes.js";


const router = express.Router();

//-----------------------------------FIRST VERSION API---------------------

router.get("/v1/notes", getNotes);

router.get("/v1/notes/:name", findByName);

router.post("/v1/notes", saveNotes);

router.delete("/v1/notes/:name", deleteNotes);


export default router;