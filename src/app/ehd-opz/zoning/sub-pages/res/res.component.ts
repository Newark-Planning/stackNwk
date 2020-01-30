import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Record } from '../../../../shared/models';
import { GetRegsService } from '../../../../shared/services';

@Component({
  selector: 'opz-zoning-res',
  styleUrls: ['./res.component.scss'],
  templateUrl: './res.component.html'
})
export class OpzZoningResComponent implements OnInit {
  zones: Observable<Record>;

  constructor(
    public zoner: GetRegsService
    ) { }

  ngOnInit(): void {
    const records = 'records';
    // tslint:disable-next-line: no-floating-promises
    this.zoner.getAllZones()
      .subscribe(
        data => this.zones = data[records]
      );
  }
}
