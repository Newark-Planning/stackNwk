import {
    ChangeDetectionStrategy,
    Component,
    HostListener,
    Input,
    OnInit
} from '@angular/core';

import { BulkReqs, getReqs } from '../zoning.model';

interface HoverTarget {
    name?: string;
    target: EventTarget | string;
    x: number;
    y: number;
}
interface DiagramTextBox {
    content?: string;
    style?: any;
}

@Component({
    changeDetection: ChangeDetectionStrategy.Default,
    selector: 'opz-lot',
    styleUrls: ['./lot.component.scss'],
    templateUrl: './lot.component.html'
})
export class LotComponent implements OnInit {
    @Input() zone;
    @Input() bldgType;
    @Input() currentReqs: BulkReqs = getReqs('R-1', 'One-family');
    diagramTextBox: DiagramTextBox;
    hoverTarget: HoverTarget = { name: '', x: 0, y: 0, target: document.body};
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
        this.hoverTarget.x = (e.target instanceof Element)
            ? (e.target.clientWidth / 2) + e.target.clientLeft
            : 0;
        this.hoverTarget.y = (e.target instanceof Element)
            ? (e.target.clientHeight / 2) + e.target.clientTop
            : 0;
        this.hoverTarget.name = (e.target instanceof Element) ? e.target.getAttribute('data-name')! : undefined;
        this.hoverTarget.target = (e.target instanceof Element) ? e.target.id : document.body;
        this.hoverTarget.target
        ? this.diagramTextBox.content = `<span>${this.hoverTarget.target}</span>`
        : this.diagramTextBox.content = '';
        (e.target instanceof SVGElement) ? this.diagramTextBox.style = {
            '-webkit-text-fill-color': 'white',
            'background-color': 'darkorchid',
            'border-radius': '5px',
            'box-shadow': '1px 1px 1px black',
            color: 'white',
            display: 'flex',
            left: `${this.hoverTarget.x}px`,
            position: 'absolute',
            top: `${this.hoverTarget.y}px`
        } : this.diagramTextBox.style = {
            display: 'none'
        };
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
