import express from 'express';

const router = express.Router();
router.get('/', (req, req) => {
    req.send('This Works !');
});

export default router;