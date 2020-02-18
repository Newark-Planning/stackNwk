import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';
import { GetRegsService } from '../../../../shared/services';
import { buildingTypes, getDimensions } from '../../diagrams/diagrams.model';

@Component({
  selector: 'opz-zoning-res',
  styleUrls: ['./res.component.scss'],
  templateUrl: './res.component.html'
})
export class OpzZoningResComponent implements OnInit {
  @Input() dimensions: any;
  @Input() typeNumber: number;
  @Input() zone: string;
  @Input() bldgTypes = buildingTypes(this.zone);
  @Input() value;
  @Input() items: Array<MenuItem> = [];
  @Input() activeIndex = 0;

  constructor(
    public zoner: GetRegsService
    ) { }

  ngOnInit(): void {
    this.dimensions = getDimensions('R-2', 'One-family');
    this.bldgTypes.map(
      type => this.items.push({
        command: (event: any) => {
          this.dimensions = getDimensions(this.zone, type);
          this.activeIndex = this.bldgTypes.indexOf(type);
        },
        label: type
      })
    );
    // tslint:disable-next-line: no-non-null-assertion
    document.getElementById('Hex')!.addEventListener('click', e => {
      this.items = [];
      const svgEl = e.target as HTMLElement;
      // tslint:disable-next-line: no-non-null-assertion
      this.zone = (svgEl.parentElement!.hasAttribute('data-zone')) ? svgEl.parentElement!.getAttribute('data-zone')! : this.zone;
      this.dimensions = getDimensions(this.zone, buildingTypes(this.zone)[0]);
      this.bldgTypes = buildingTypes(this.zone);
      buildingTypes(this.zone)
        .map(
        type => this.items.push({
          command: (event: any) => {
            this.dimensions = getDimensions(this.zone, type);
            this.activeIndex = this.bldgTypes.indexOf(type);
          },
          label: type
        })
      );
    });
  }

  resBldgTypes(value: number): any {
    const currentType = buildingTypes('R-2')[value];

    return currentType;
  }
}
