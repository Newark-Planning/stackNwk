import { Component, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { DataItem } from '../../../../shared/models';
import { JsonDataService } from '../../../../shared/services';

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
  currentQuery = 0;
  nextQuery = 15;
  listOfData: Array<DataItem> = [];
  sortOptions: any;
  sortKey: string;
  sortField: string;
  sortOrder: number;

  constructor(
    public jsondata: JsonDataService,
    public sanitizer: DomSanitizer
    ) { }

  ngOnInit(): any {
    this.loading = true;
    this.listOfData = this.jsondata.getFiles('plans');
    this.currentQuery = Math.min((this.page * 15), this.listOfData.length);
    this.nextQuery = Math.min((this.currentQuery + 15), this.listOfData.length);
    this.sortOptions = [
      { label: 'A - Z', value: 'document' },
      { label: 'Z - A', value: '!document' },
      { label: 'Newest First', value: '!pubDate' },
      { label: 'Oldest First', value: 'pubDate' }
    ];
  }
  openDoc(event: Event, data: DataItem): any {
    this.selectedDoc = data;
    this.displayDialog = true;
    event.preventDefault();
  }
  openSource(data: string): any {
    window.open(data, '_blank');
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
