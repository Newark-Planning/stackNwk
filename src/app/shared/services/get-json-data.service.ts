import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataItem } from '../models';

@Injectable()
export class JsonDataService {

    constructor(readonly http: HttpClient) { }

    getBoardCommissionEvents(): any {
        return this.http.get('/assets/data/boardsCommissionsEvents.json')
            .toPromise()
            .then(res => res as Array<any>)
            .then(data => data);
    }
    getFiles(docs): any {
        return this.http.get(`/assets/docs/${docs}.json`)
            .toPromise()
            .then(res => res as Array<DataItem>);
        }
}
