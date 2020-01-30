import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Record } from '../models';

@Injectable()
export class GetRegsService {
  readonly API_STRING = 'Bearer ';
  readonly API_APP_ID = 'appxRUzRJWREStdoU';
  readonly API_BASE_URL = 'https://api.airtable.com';
  // tslint:disable-next-line: restrict-plus-operands
  header = { authorization: `${this.API_STRING + environment.config.AIRTABLE_API_KEY}` };
  constructor(
    public http: HttpClient) { }

  getAllZones(): Observable<any> {
    return this.http.get<Record>(
      `${this.API_BASE_URL}/v0/${this.API_APP_ID}/Zones?view=Grouped%20by%20Type`,
      {
        headers: this.header
      }
    );
  }
  getZoneRecord(): Observable<any> {
    return this.http.get<Record>(
      `${this.API_BASE_URL}/v0/${this.API_APP_ID}/Zones?view=Grouped%20by%20Type`,
      {
        headers: this.header
      }
    );
  }
  getPrimaryUses(API_BASE_NAME: string, API_FILTER: string): Observable<any> {
    const BASE_NAME = API_BASE_NAME;
    const FILTER = API_FILTER;

    return this.http.get<Record>(
      `${this.API_BASE_URL}/v0/${this.API_APP_ID}/${BASE_NAME}?${FILTER}`,
      {
        headers: this.header
      }
    );
  }

}
