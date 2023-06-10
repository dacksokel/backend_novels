import NovelModel from '../models/NovelsModels';
import INovel from '../interfaces/INovel';

class NovelsServices {

    async saveNovelService(novel: INovel): Promise<boolean> {
        const saveNovel = new NovelModel(novel);
        try {
            console.log(novel);
            await saveNovel.save();
            return true;
        } catch (error) {
            return false;
        }
    }

    async getNovelsPaginatedServices(page: number, limit: number) {
        console.log(` page: ${page} limit: ${limit}`);
        const startIndex: number = (page - 1) * limit;
        const endIndex: number = page * limit;

        try {
            const results: any = {};
            const count = await NovelModel.countDocuments();
            console.log(`this it's the count novels: ${count}`);
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