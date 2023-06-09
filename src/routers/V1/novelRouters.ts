
import express from 'express';
import NovelsControllers from '../../controllers/NovelsControllers';

const router = express.Router({});

router.get('/', NovelsControllers.test.bind(NovelsControllers));
router.get('/getPaginated', NovelsControllers.getNovelsPaginated.bind(NovelsControllers));
router.post('/saveNovels', NovelsControllers.saveNovels.bind(NovelsControllers));

export default router;