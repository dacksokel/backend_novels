import express from 'express';
import NovelsControllers from '../../controllers/NovelsControllers';

const router = express.Router({});

router.get('/', NovelsControllers.test.bind(NovelsControllers));

export default router;