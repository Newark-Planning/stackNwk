import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Record } from '../models';

@Injectable()
export class AirService {
  readonly API_STRING = 'Bearer ';
  readonly API_APP_ID = 'apph7gF9NG3sKQoZz';
  readonly API_BASE_URL = 'https://api.airtable.com';
  readonly AZURE_API_STRING = 'Bearer ';
  readonly AZURE_APP_ID = 'apph7gF9NG3sKQoZz';
  readonly AZURE_BASE_URL = 'https://nwk-ehd-web.documents.azure.com';
  readonly AZURE_DB = 'nwk-ehd-web';
  azureHeader = {
    // accept: 'application/json',
    authorization: 'type%3Dmaster%26ver%3D1.0%26sig%3Dki2RFfvOVQj0%2BDZfwF4kOYx%2F7Z6B61HZXpdKKGK4whA%3D'
    // 'content-Type': 'application/query+json',
    // 'host': this.AZURE_BASE_URL.slice(8, 39),
    // // tslint:disable-next-line: newline-per-chained-call
    // 'x-ms-date': new Date().toUTCString(),
    // 'x-ms-documentdb-isquery': 'True',
    // 'x-ms-query-enable-crosspartition': 'True',
    // 'x-ms-version': '2015-12-16'
  };
  // tslint:disable-next-line: restrict-plus-operands
  header = { authorization: `${this.API_STRING + environment.config.AIRTABLE_API_KEY}` };
  constructor(
    public http: HttpClient) { }

  getRecords(API_BASE_NAME: string, API_FILTER: string): Observable<any> {
    const BASE_NAME = API_BASE_NAME;
    const FILTER = API_FILTER;

    return this.http.get<Record>(
      `${this.API_BASE_URL}/v0/${this.API_APP_ID}/${BASE_NAME}?${FILTER}`,
      {
        headers: this.header
      }
    );
  }

  getAzureData(AZURE_COLLECTION_NAME: string, AZURE_FUNCTION): Observable<any> {
    const BASE_NAME = AZURE_COLLECTION_NAME;

    return this.http.get(
      `${this.AZURE_BASE_URL}/dbs/${this.AZURE_DB}/colls/${BASE_NAME}`,
      {
        headers: this.azureHeader,
        observe: AZURE_FUNCTION
      }
    );
  }
}
  // function getAuthorizationTokenUsingMasterKey(verb, resourceType, resourceId, date, masterKey) {
  //   const key = new Buffer(masterKey, 'base64');

  //   const text = `${(verb || '').toLowerCase()}\n${(resourceType || '').toLowerCase()}\n${(resourceId || '')}\n${date}\n\n`;

  //   const body = new Buffer(text, 'utf8');
  //   const signature = crypto.createHmac('sha256', key).update(body).digest('base64');

  //   const masterToken = 'master';

  //   const tokenVersion = '1.0';

  //   return encodeURIComponent(`type=${masterToken}&ver=${tokenVersion}&sig=${signature}`);
  // }
const crypto = require('crypto');
function getAuthorizationTokenUsingMasterKey(verb, resourceType, resourceId, date, masterKey) {
      const key = new Buffer(masterKey, 'base64');

      const text = `${(verb || '').toLowerCase()}\n${(resourceType || '').toLowerCase()}\n${(resourceId || '')}\n${date}\n${''}\n`;

      const body = new Buffer(text, 'utf8');
      const signature = crypto.createHmac('sha256', key).update(body).digest('base64');

      const masterToken = 'master';

      const tokenVersion = '1.0';

      return encodeURIComponent(`type=${masterToken}&ver=${tokenVersion}&sig=${signature}`);
  }
getAuthorizationTokenUsingMasterKey('GET', 'colls', 'dbs/nwk-ehd-web/colls/ehd-web', new Date().toUTCString(), 'LdUcUUOupQyWZhnLqaeLnAmmdLLiWgbxpFCkNCWRQLCWiwzLHITEvQmZOUYiElyKCLUHqsLLePndcAo17pH0xw==')