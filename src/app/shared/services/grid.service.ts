import { Injectable } from '@angular/core';
import { ClrDatagridStateInterface } from '@clr/angular';

@Injectable({
    providedIn: 'root'
})
export class GridStateService {

    storeCostDocumentState(state: ClrDatagridStateInterface): any {
        sessionStorage.setItem('costDocumentState', JSON.stringify(state));
    }

    getCostDocumentState(): ClrDatagridStateInterface {
        const state = sessionStorage.getItem('costDocumentState');

        // tslint:disable-next-line: no-angle-bracket-type-assertion no-non-null-assertion
        return <ClrDatagridStateInterface> JSON.parse(state!);
    }
}
