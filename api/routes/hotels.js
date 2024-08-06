import express from "express";
import { createHotel, deleteHotel, getHotels, getSingleHotel, updateHotel } from "../controllers/hotelController.js";
const router = express.Router();

//CREATE
router.post("/", createHotel);

//UPDATE
router.put("/:id", updateHotel);

//DELETE
router.delete("/:id", deleteHotel);

//GET
router.get("/:id", getSingleHotel);

//GET ALL
router.get("/", getHotels);

export default router;
