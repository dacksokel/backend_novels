import express from 'express';

import NovelsRouters from './novelRouters';

const router = express.Router();

router.use('/novels', NovelsRouters );

export default router;