import { NextFunction, Request, Response } from 'express';
// import NovelModel from '../models/novelModel';


class NovelsControllers {

    test (req: Request, res: Response) {
        res.status(200).json({status: 'OK'});
    }
}

export default new NovelsControllers