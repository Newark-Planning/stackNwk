import { Component, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Resource } from '../data';
import { DataItem, redevPlans } from './redev.plans';

@Component({
  selector: 'app-res-redev',
  styleUrls: ['../../resources.component.scss'],
  templateUrl: './redev.component.html'
})

export class RedevDataComponent implements OnInit {
  loading = false;
  selectedDoc: DataItem | undefined;
  displayDialog: boolean;
  // tslint:disable-next-line: prefer-output-readonly
  @Output() page = 1;
  currentQuery: number = Math.min((this.page * 15), redevPlans.length);
  nextQuery: number = Math.min((this.currentQuery + 15), redevPlans.length);
  listOfData: Array<Resource> = redevPlans;
  sortOptions: any;
  sortKey: string;
  sortField: string;
  sortOrder: number;

  constructor(
    public sanitizer: DomSanitizer
    ) { }

  ngOnInit(): any {
    this.loading = true;
    this.sortOptions = [
      {label: 'Newest First', value: '!year'},
      {label: 'Oldest First', value: 'year'},
      {label: 'Brand', value: 'brand'}
    ];
  }
  openDoc(event: Event, data: DataItem): any {
    this.selectedDoc = data;
    this.displayDialog = true;
    event.preventDefault();
  }
  onDialogHide(): any {
    this.selectedDoc = undefined;
  }
  onSortChange(event): any {
    const value = event.value;
    if (value.indexOf('!') === 0) {
        this.sortOrder = -1;
        this.sortField = value.substring(1, value.length);
    } else {
        this.sortOrder = 1;
        this.sortField = value;
    }
  }
}
