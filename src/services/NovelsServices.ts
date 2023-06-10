import NovelModel from '../models/NovelsModels';

class NovelsServices {

    async saveNovelService (novel: any): Promise<boolean> {
        const saveNovel = new NovelModel(novel);
        try {
            console.log(novel);
            await saveNovel.save();
            return true;
        } catch (error) {
            return false;
        }
    }

}

export default new NovelsServices();