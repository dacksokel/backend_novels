import { NextFunction, Request, Response } from 'express';
import IChapter from '../interfaces/IChapter';
import INovelsPaginated from '../interfaces/IChaptersPaginated';
import INovel from '../interfaces/INovel';
import NovelsServices from '../services/NovelsServices';

class NovelsControllers {

  test(req: Request, res: Response) {
    res.status(200).json({ status: 'OK' });
  }

  async saveNovelController(req: Request, res: Response) {
    const chapter = req.body.chapter as IChapter;
    const novel = req.body.novel as INovel;
    const responseSaveNovel = await NovelsServices.saveNovelService(novel, chapter);
    if (responseSaveNovel) {
      res.status(200).json({ status: 'Success' });
    } else {
      res.status(500).json({ status: 'Error saving novel' });
    }

  }

  async getNovelsPaginated(req: Request, res: Response) {
    const page: number = parseInt(req.query.page as string) || 1;
    const limit: number = parseInt(req.query.limit as string) || 100;
    const response: INovelsPaginated = await NovelsServices.getNovelsPaginatedServices(page, limit);

    if (response) {
      res.status(200).json(response);
    } else {
      res.status(500).json({ message: response });
    }

  }

}

export default new NovelsControllers


