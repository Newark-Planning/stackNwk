import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    HostListener,
    Input,
    Renderer2,
    ViewChild
} from '@angular/core';

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
    @Input() currentZone;
    @Input() currentBldgType;
    @Input() dimensions;
    @ViewChild('toolTip') tooltip: ElementRef;
    diagramTextBox: DiagramTextBox = {content: '', style: ''};
    hoverTarget: HoverTarget = { name: '', x: '0px', y: '0px', target: document.body};
    sidebarVisibility;
    sideBarTarget;
    sideBarContent;
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
            display: 'flex'
        }
        : this.diagramTextBox.style = {
            display: 'none'
        };
    }
    @HostListener('click', ['$event.target']) onClick(target: any): any {
        (this.sidebarVisibility === false) ? this.sidebarVisibility = true : this.sidebarVisibility = false;
        this.sideBarTarget = target.getAttribute('data-name');
    }
}
