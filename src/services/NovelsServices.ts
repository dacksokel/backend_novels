import NovelModel from '../models/Chapter';
import IChapter from '../interfaces/IChapter';
import IChaptersPaginated from '../interfaces/IChaptersPaginated';
import INovel from '../interfaces/INovel';

class NovelsServices {

    async saveNovelService(novel: INovel, chapter: IChapter): Promise<boolean> {
        const existingNovel = await NovelModel.findOne({title: chapter.title});
        if (existingNovel) {
            return false;
        }
        const existingChapter = await NovelModel.findOne({chapterNumber: chapter.chapterNumber});
        if (existingChapter) {
            return false;
        }
        const saveNovel = new NovelModel(novel);
        try {
            await saveNovel.save();
            return true;
        } catch (error) {
            return false;
        }
    }

    
    async getNovelsPaginatedServices (page: number, limit: number): Promise<IChaptersPaginated> {
        const startIndex: number = (page - 1) * limit;
        const endIndex: number = page * limit;
        const results: IChaptersPaginated = {};

        try {
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
            const novelsReslts = await NovelModel.find().limit(limit).skip(startIndex).exec();
            results.results = novelsReslts;
            return results;
        } catch (e: any) {
            return e;
        }
    }


}

export default new NovelsServices();