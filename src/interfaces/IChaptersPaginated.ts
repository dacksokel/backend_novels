
import IChapters from './IChapter';

interface IChaptersPaginated {
    next?: {
        page: number,
        limit: number
    },
    previous?: {
        page: number,
        limit: number
    },
    results?: IChapters[],
    message?: string
}

export default IChaptersPaginated;