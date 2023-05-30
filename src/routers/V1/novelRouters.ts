import express from 'express';
import NovelsControllers from '../../controllers/NovelsControllers';

const router = express.Router({});

router.get('/', NovelsControllers.test.bind(NovelsControllers));
router.get('/get', NovelsControllers.getNovels.bind(NovelsControllers));

export default router;