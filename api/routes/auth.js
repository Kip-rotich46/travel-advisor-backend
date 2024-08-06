import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send("Hello Auth endpoint")
});

router.get('/register', (req, res) =>{
    res.send("Register page")
})

export default router;