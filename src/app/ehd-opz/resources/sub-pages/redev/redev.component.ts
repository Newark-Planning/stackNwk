import { Component, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ClrDatagridStateInterface } from '@clr/angular';
import { Resource } from '../data';
import { redevPlans } from './redev.plans';

@Component({
  selector: 'app-res-redev',
  styleUrls: ['../../resources.component.scss'],
  templateUrl: './redev.component.html'
})

export class RedevDataComponent implements OnInit {
  loading = false;
  // tslint:disable-next-line: prefer-output-readonly
  @Output() page = 1;
  currentQuery: number = Math.min((this.page * 15), redevPlans.length);
  nextQuery: number = Math.min((this.currentQuery + 15), redevPlans.length);
  listOfData: Array<Resource> = redevPlans;

  constructor(
    public sanitizer: DomSanitizer
    ) { }

  ngOnInit(): any {
    this.loading = true;
  }

  refresh(state: ClrDatagridStateInterface): any {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.listOfData = redevPlans.slice(0, this.nextQuery);
    }, 500);
  }
}
