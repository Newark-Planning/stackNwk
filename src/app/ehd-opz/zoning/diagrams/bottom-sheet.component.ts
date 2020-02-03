import { Component, Inject } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';

@Component({
    selector: 'opz-bottom-sheet',
    templateUrl: './bottom-sheet.component.html'
})
export class BottomSheetComponent {

    constructor(
        @Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
        private readonly _bottomSheetRef: MatBottomSheetRef<BottomSheetComponent>
        ) { }

    openLink(event: MouseEvent): void {
        this._bottomSheetRef.dismiss();
        event.preventDefault();
    }
}
