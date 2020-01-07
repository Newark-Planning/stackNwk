import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchResult } from '../models/interfaces';

@Injectable()
export class SearchService {

    private readonly apiEndpoint: string;
    constructor(private readonly httpClient: HttpClient) {
        this.apiEndpoint = '/contacts';
    }
    /**
     *
     * Adds seed contacts to API.
     *
     */
    addSeedContacts(): Observable<Array<SearchResult>> {
        return this.httpClient.post<Array<SearchResult>>(this.apiEndpoint, [
            {
                createdAt: '2017-09-02T15:44:09.289Z',
                email: 'jack.pigeon@gmail.com',
                firstName: 'Jack',
                id: 12,
                lastName: 'Pigeon',
                phone: '+91-78-234-23',
                updatedAt: '2017-09-02T15:44:09.289Z'
            },
            {
                createdAt: '2017-09-02T15:51:17.782Z',
                email: 'bojack.pigeon@gmail.com',
                firstName: 'BoJack',
                id: 13,
                lastName: 'Pigeon',
                phone: '+91-79-234-23',
                updatedAt: '2017-09-02T15:51:17.782Z'
            },
            {
                createdAt: '2017-09-02T15:51:32.640Z',
                email: 'bojack.horseman@gmail.com',
                firstName: 'BoJack',
                id: 14,
                lastName: 'Horseman',
                phone: '+91-769-69',
                updatedAt: '2017-09-02T15:51:32.640Z'
            },
            {
                createdAt: '2017-09-02T15:51:46.846Z',
                email: 'walter.white@gmail.com',
                firstName: 'Walter',
                id: 15,
                lastName: 'White',
                phone: '+90-769-69',
                updatedAt: '2017-09-02T15:51:46.846Z'
            },
            {
                createdAt: '2017-09-02T15:51:57.900Z',
                email: 'bazooka.white@gmail.com',
                firstName: 'Walter',
                id: 16,
                lastName: 'Boom',
                phone: '+90-769-69-11',
                updatedAt: '2017-09-02T15:51:57.900Z'
            },
            {
                createdAt: '2017-09-02T15:52:21.326Z',
                email: 'afrojack.white@gmail.com',
                firstName: 'Afrojack',
                id: 17,
                lastName: 'Water',
                phone: '+90-7-69-11',
                updatedAt: '2017-09-02T15:52:21.326Z'
            },
            {
                createdAt: '2017-09-02T15:52:41.566Z',
                email: 'lolmax.tutu@gmail.com',
                firstName: 'Tutu',
                id: 18,
                lastName: 'Lol',
                phone: '+90-7-69-111',
                updatedAt: '2017-09-02T15:52:41.566Z'
            },
            {
                createdAt: '2017-09-02T15:53:04.619Z',
                email: 'donald.drumpf@gmail.com',
                firstName: 'Donald',
                id: 19,
                lastName: 'Drumpf',
                phone: '+1-11-11-111',
                updatedAt: '2017-09-02T15:53:04.619Z'
            }
        ]);

    }

    /**
     *
     * Gets contacts' count.
     *
     */
    getContactsCount(): Observable<number> {
        return this.httpClient.get<number>(`${this.apiEndpoint}/count`);
    }

    /**
     *
     * Gets page contacts.
     *
     * @param limit Limit per page.
     * @param skip Number of items to skip.
     * @param filters Filters.
     * @param sort Sort criterion.
     */
    getPageContacts(limit: number, skip: number, filters?: { [property: string]: string }, sort?: any): Observable<SearchResult> {
        let queryParameters = new HttpParams();
        queryParameters = queryParameters.append('limit', String(limit));
        queryParameters = queryParameters.append('skip', String(skip));
        if (filters) {
            const filterQuery = {};
            Object.keys(filters)
                .forEach(filter => {
                    filterQuery[filter] = {
                        contains: filters[filter]
                    };
            });
            queryParameters = queryParameters.append('where', JSON.stringify(filterQuery));
        }
        if (sort) {
            const sortQuery = `${sort.by} ${sort.reverse ? 'DESC' : 'ASC'}`;
            queryParameters = queryParameters.append('sort', sortQuery);
        }

        return this.httpClient.get<SearchResult>(this.apiEndpoint, { params: queryParameters });
    }
    /**
     *
     * Searches contacts.
     *
     * @param searchKey Search key.
     */
    searchContacts(searchKey: string): Observable<Array<SearchResult>> {
        let queryParameters = new HttpParams();
        queryParameters = queryParameters.append('searchKey', searchKey);

        return this.httpClient.get<Array<SearchResult>>(`${this.apiEndpoint}/search`, { params: queryParameters });

    }

}
