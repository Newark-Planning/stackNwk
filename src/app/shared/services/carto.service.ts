import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { CartoSQLResp } from '../models';

@Injectable()
export class CartoService {
  readonly API_STRING = 'Bearer ';
  readonly API_APP_ID = 'apph7gF9NG3sKQoZz';
  readonly API_BASE_URL = 'https://nzlur.carto.com:443/api/v2/sql?q=';
  // tslint:disable-next-line: restrict-plus-operands
  header = { authorization: `${this.API_STRING + environment.config.AIRTABLE_API_KEY}` };
  constructor(
    public http: HttpClient) { }

  getZoning(API_SELECT: string, API_WHERE_BLOCK: string, API_WHERE_LOT: string): Observable<any> {
    const SQL_QUERY =
      `select ${API_SELECT} from public.zoning where blocklot = '${API_WHERE_BLOCK}-${API_WHERE_LOT}'`;

    return this.http.get<CartoSQLResp>(
      `${this.API_BASE_URL}${SQL_QUERY}`
    );
  }

}
