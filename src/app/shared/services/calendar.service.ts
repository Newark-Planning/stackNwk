import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CalendarService {

    constructor(readonly http: HttpClient) { }

    getBoardCommissionEvents(): any {
        return this.http.get('/assets/data/boardsCommissionsEvents.json')
            .toPromise()
            .then(res => res as Array<any>)
            .then(data => data);
    }
}
