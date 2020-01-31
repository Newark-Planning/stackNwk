import {
    ChangeDetectionStrategy,
    Component,
    ContentChild,
    HostListener,
    Input,
    OnInit
} from '@angular/core';

import { BulkReqs, getReqs } from '../zoning.model';

interface HoverTarget {
    target: EventTarget | string;
    x: number;
    y: number;
}

@Component({
    changeDetection: ChangeDetectionStrategy.Default,
    selector: 'opz-lot',
    styleUrls: ['./lot.component.scss'],
    templateUrl: './lot.component.html'
})
export class LotComponent implements OnInit {
    @ContentChild('#DiagramTextBox') diagramTextBox: any;
    @Input() zone;
    @Input() bldgType;
    @Input() currentReqs: BulkReqs = getReqs('R-1', 'One-family');
    hoverTarget: HoverTarget = { x: 0, y: 0, target: document.body};
    lotHeight = this.currentReqs.MinLotSize / this.currentReqs.MinLotWidth;
    viewBox = '0 0 125 125';
    frontYard = 25;
    rearYard = 30;
    envelope = {
        height: 45,
        width: 35,
        x: 62.5,
        y: 37.5
    };
    @Input() dimensions = {
        envelope: {
            height: this.envelope.height,
            width: this.envelope.width,
            x: this.envelope.x,
            y: this.envelope.y
        },
        frontYard: this.frontYard,
        lotHeight: this.lotHeight,
        lotWidth: this.currentReqs.MinLotWidth,
        rearYard: {
            height: this.rearYard,
            y: this.envelope.y + this.envelope.height
        },
        sideYard: {
            left: 5,
            right: 10,
            rightX: this.currentReqs.MinLotWidth + 57.5 - 10,
            y: this.frontYard + 12.5
        },
        viewBox: `0 0 ${this.currentReqs.MinLotWidth + 57.5 + 17.5} ${this.lotHeight + 25}`,
        widthLine: {
            x1: this.currentReqs.MinLotWidth + 57.5
        }
    };
    @HostListener('document:mousemove', ['$event']) onMouseMove(e: MouseEvent): void {
        this.hoverTarget.x = e.clientX;
        this.hoverTarget.y = e.clientY;
        this.hoverTarget.target =  (e.target instanceof Element) ? e.target.id : document.body;
        this.hoverTarget.target instanceof SVGElement
        ? this.diagramTextBox.textContent = this.hoverTarget.target.id
        : this.diagramTextBox.textContent = '';
        // tslint:disable-next-line: no-console
        console.log(this.hoverTarget.target);
    }
    ngOnInit(): void {
        this.zone = 'R-1';
        this.bldgType = 'One-family';
    }

    updateDiagram(zone, buildingType): any {
        this.currentReqs = getReqs(zone, buildingType);
        // tslint:disable-next-line: no-console
        console.log(this.currentReqs);
    }
}
