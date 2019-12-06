import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { DataService } from '../../shared/util/data.service';
import * as DataActions from '../actions/about.actions';
@Injectable()
export class AboutDataEffects {

  @Effect() loadData = this.actions.pipe(
    ofType(DataActions.AboutActionTypes.LoadDataBegin),
    switchMap(() =>
      this.dataService
      .findAllRecords('Staff')
      .pipe(
        map((data: any) => new DataActions.LoadDataSuccess( { data } )),
        catchError(error =>
          of(new DataActions.LoadDataFailure({ error: {error} }))
        )
      ))
  );
  constructor(readonly actions: Actions, readonly dataService: DataService) { }
}
