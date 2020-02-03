import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    EventEmitter,
    HostListener,
    Input,
    Output,
    Renderer2,
    ViewChild
} from '@angular/core';

import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BulkReqs, getReqs } from '../zoning.model';
import { BottomSheetComponent } from './bottom-sheet.component';

interface HoverTarget {
    name?: string;
    target: EventTarget | string;
    x: string;
    y: string;
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
export class LotComponent {
    @Input() zone = 'R-1';
    @Input() bldgType = 'One-family';
    @Input() currentReqs: BulkReqs = getReqs(this.zone, this.bldgType);
    @Output() readonly reqChange = new EventEmitter<any>();
    @ViewChild('toolTip') tooltip: ElementRef;
    diagramTextBox: DiagramTextBox = {content: '', style: ''};
    hoverTarget: HoverTarget = { name: '', x: '0px', y: '0px', target: document.body};
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
    constructor(
        private readonly renderer: Renderer2,
        private readonly _bottomSheet: MatBottomSheet) { }

    @HostListener('document:mousemove', ['$event']) onMouseMove(e: MouseEvent): void {
        const svgEl = e.target as HTMLElement;
        this.hoverTarget.x = `${svgEl.getBoundingClientRect().left + window.scrollX}px`;
        this.hoverTarget.y = `${svgEl.getBoundingClientRect().top + window.scrollY}px`;
        // tslint:disable-next-line: no-non-null-assertion
        this.hoverTarget.name = svgEl.getAttribute('data-name')!;
        this.hoverTarget.target = svgEl.id;
        this.diagramTextBox.content = `<span>${this.hoverTarget.name}</span>`;
        this.renderer.setStyle(this.tooltip.nativeElement, 'left', this.hoverTarget.x);
        this.renderer.setStyle(this.tooltip.nativeElement, 'top', this.hoverTarget.y);
        (this.hoverTarget.target)
        ? this.diagramTextBox.style = {
            '-webkit-text-fill-color': 'white',
            'background-color': 'darkorchid',
            'border-radius': '5px',
            'box-shadow': '1px 1px 1px black',
            color: 'white',
            display: 'flex',
            margin: 0,
            padding: '.25rem',
            position: 'absolute',
            'z-index': 99
        }
        : this.diagramTextBox.style = {
            display: 'none'
        };
    }

    updateDiagram(zone, buildingType): any {
        this.zone = zone;
        this.bldgType = buildingType;
        this.currentReqs = getReqs(this.zone, this.bldgType);
        this.reqChange.emit(this.dimensions);
    }

    openDrawer(e: Event, id: string): void {
        this._bottomSheet.open(BottomSheetComponent, {
            data: id
        });
    }
}
