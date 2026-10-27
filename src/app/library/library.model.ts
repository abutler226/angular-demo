export interface IBook{
    id: number;
    title: string;
    authors: [{name: string}];
    summaries: [];
    copyright: boolean;
}

// This is a larger signature for the JSON output; play with this as: httpResource<IBook>
// export interface IBook {
//     count: number;
//     next: object;
//     previous: object;
//     results: [{
//         id: number;
//         title: string;
//         author: string;
//         summaries: [];
//         copyright: boolean;
//     }]
// }