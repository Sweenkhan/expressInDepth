import express  from "express";
import { getNotes2 } from "../../controller/v2/notes.js";

const router = express.Router()

router.get("/v2/notes", getNotes2)


export default router;