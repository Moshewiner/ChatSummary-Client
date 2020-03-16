export interface WordsCount {
    author: string;
    keywords: {
        keyword: string;
        count: number;
    }[]
}

export interface GraphqlWordCountResponse {
    data: {
        wordCount: WordsCount[]
    }
}