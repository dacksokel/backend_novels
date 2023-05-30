import { NextFunction, Request, Response } from 'express';
import NovelModel from '../models/NovelsModels';


class NovelsControllers {

    test (req: Request, res: Response) {
        res.status(200).json({status: 'OK'});
    }

    saveNovels (req: Request, res: Response) {
        const novel = (req as any).body;
        console.log(novel);


        res.status(200).json({status: 'OK'});

    }

    async getNovels (req: Request, res: Response) {
        const page: number = parseInt(req.query.page as string) || 1;
        const limit: number = parseInt(req.query.limit as string) || 100;
        const startIndex: number = (page - 1) * limit;
        const endIndex: number = page * limit;
      
        const results: any = {};
        // const novelModel = new NovelModel();
        const count = await NovelModel.countDocuments();
      
        if (endIndex < count) {
          results.next = {
            page: page + 1,
            limit: limit
          };
        }
      
        if (startIndex > 0) {
          results.previous = {
            page: page - 1,
            limit: limit
          };
        }
    }

}

export default new NovelsControllers
