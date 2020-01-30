import {
    Component,
    Input,
    OnInit
} from '@angular/core';
import { BulkReqs, getReqs } from '../zoning.model';

@Component({
    selector: 'opz-lot',
    styleUrls: ['./lot.component.scss'],
    templateUrl: './lot.component.html'
})
export class LotComponent implements OnInit {

    @Input() zone;
    currentReqs: BulkReqs = getReqs('R-1', 'One-family');
    lotHeight = this.currentReqs.MinLotSize / this.currentReqs.MinLotWidth;
    envelope = {
        height: 50,
        width: 35,
        x: 30
    };
    @Input() dimensions = {
        envelope: {
            height: this.envelope.height,
            width: this.envelope.width,
            x: (this.currentReqs.SideYard.other) ? this.currentReqs.SideYard.other + 25 : this.currentReqs.SideYard + 25
        },
        lotHeight: this.lotHeight,
        lotWidth: this.currentReqs.MinLotWidth,
        viewBox: `0 0 ${this.currentReqs.MinLotWidth + 50} ${this.lotHeight + 50}`,
        widthLine: this.currentReqs.MinLotWidth + 25,
        widthLineCap: this.currentReqs.MinLotWidth + 25,
        widthLineTransform: `matrix(1 0 0 1 ${this.currentReqs.MinLotWidth * 0.5 + 21.0253} 21.0253)`
    };
    ngOnInit(): void {
        this.zone = 'R1';
    }

    updateDiagram(zone, buildingType = 'One-family'): any {
        this.currentReqs = getReqs(zone, buildingType);
    }
}
