import express from 'express';
import { deleteUser, getSingleUser, getUsers, updateUser } from '../controllers/userController.js';
import { verifyAdmin, verifyToken, verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

// router.get('/checkauth', verifyToken, (req,res,next) => {
//     res.send("Hello, you are logged in")
// });

// router.get('/checkuser/:id', verifyUser, (req,res,next) => {
//     res.send("Hello, you are logged in and you can delete your account")
// });

// router.get('/checkadmin/:id', verifyAdmin, (req,res,next) => {
//     res.send("Hello admin, you are logged in and you can delete all accounts")
// })

//UPDATE
router.put("/:id",verifyUser, updateUser);

//DELETE
router.delete("/:id",verifyUser, deleteUser);

//GET
router.get("/:id",verifyAdmin, getSingleUser);

//GET ALL
router.get("/", getUsers);

export default router;