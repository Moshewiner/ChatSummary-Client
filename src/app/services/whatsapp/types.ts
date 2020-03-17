export interface WordsCount {
    author: string;
    keywords: {
        keyword: string;
        count: number;
    }[]
}

export interface GraphqlResponse<T> {
    data: T
}

export interface WeekdaysAverage {
    day: string;
    average: number;
};

export interface GraphqlWordCountResponse extends GraphqlResponse<{ wordCount: WordsCount[] }> { }
export interface GraphqlAverageMessagesCountPerDayResponse extends GraphqlResponse<{ WeekdaysAverage: WeekdaysAverage[] }> { }