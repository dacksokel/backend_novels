
import express from 'express';
import V1 from './V1/index';


const router = express.Router();
router.use('/v1', V1);
export default router;


