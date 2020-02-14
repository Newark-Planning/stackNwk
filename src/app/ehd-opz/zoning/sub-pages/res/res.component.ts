import { Component, Input, OnInit } from '@angular/core';
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
  @Input() value;

  constructor(
    public zoner: GetRegsService
    ) { }

  ngOnInit(): void {
    this.dimensions = getDimensions('R-2', 'One-family');
    this.typeNumber = buildingTypes('R-2').length - 1;
  }

  resBldgTypes(value: number): any {
    const currentType = buildingTypes('R-2')[value];

    return currentType;
  }

  changeType(value): any {
    const currentType = buildingTypes('R-2')[value];
    this.dimensions = getDimensions('R-2', currentType);
  }
}
