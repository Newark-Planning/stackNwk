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

import { BulkReqs, getReqs } from '../zoning.model';

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
    @Input() zone = 'R-2';
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
        driveway: (this.zone === 'R-1') ? 'inherit' : 'none',
        envelope: {
            height: this.lotHeight - this.currentReqs.FrontYard[0] - this.currentReqs.MinRearYard[0],
            width: (this.zone === 'R-1')
                ? this.currentReqs.MinLotWidth - this.currentReqs.SideYard[0] - this.currentReqs.SideYard[1]
                : this.currentReqs.MinLotWidth - (this.currentReqs.SideYard[0] * 2),
            x: this.currentReqs.SideYard[0] + 57.5,
            y: this.currentReqs.FrontYard[0] + 12.5
        },
        frontYard: this.currentReqs.FrontYard[0],
        lotHeight: this.currentReqs.MinLotSize / this.currentReqs.MinLotWidth,
        lotWidth: this.currentReqs.MinLotWidth,
        rearYard: {
            height: this.currentReqs.MinRearYard,
            y: this.envelope.y + this.envelope.height
        },
        sideYard: {
            left: this.currentReqs.SideYard[0],
            right: (this.currentReqs.SideYard[1]) ? this.currentReqs.SideYard[1] : this.currentReqs.SideYard[0],
            rightX: this.currentReqs.MinLotWidth + 57.5 - (
                (this.currentReqs.SideYard[1]) ? this.currentReqs.SideYard[1] : this.currentReqs.SideYard[0]
                ),
            y: this.currentReqs.FrontYard[0] + 12.5
        },
        viewBox: `0 0 ${this.currentReqs.MinLotWidth + 57.5 + 17.5} ${this.lotHeight + 25}`,
        widthLine: {
            text: `translate(${(this.currentReqs.MinLotWidth / 2) + 57.5}, 6.4)`,
            x1: this.currentReqs.MinLotWidth + 57.5
        }
    };
    constructor(
        private readonly renderer: Renderer2
        ) { }

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
            'background-color': 'rgba(100,100,100,.75)',
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
}
