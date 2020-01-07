export interface SearchResults {
    query: string;
    results: Array<SearchResult>;
}

export interface SearchResult {
    path: string;
    title: string;
    type: string;
    titleWords: string;
    keywords: string;
    deprecated: boolean;
}

export interface SearchArea {
    name: string;
    pages: Array<SearchResult>;
    priorityPages: Array<SearchResult>;
}
