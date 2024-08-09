import express from 'express';
import { verifyAdmin } from "../utils/verifyToken.js";
import { createRoom, deleteRoom, getRooms, getSingleRoom, updateRoom } from '../controllers/roomController.js';

const router = express.Router();

//CREATE
router.post("/:hotelid",verifyAdmin, createRoom);

//UPDATE
router.put("/:id",verifyAdmin, updateRoom);

//DELETE
router.delete("/:id",verifyAdmin, deleteRoom);

//GET
router.get("/:id", getSingleRoom);

//GET ALL
router.get("/", getRooms);

export default router;


