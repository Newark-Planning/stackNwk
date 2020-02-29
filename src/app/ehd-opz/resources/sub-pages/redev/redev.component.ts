import { animate, state, style, transition, trigger } from '@angular/animations';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { DataItem } from '../../../../shared/models';
import { JsonDataService } from '../../../../shared/services';

@Component({
  animations: [
    trigger('rowExpansionTrigger', [
      state('void', style({
        opacity: 0,
        transform: 'translateX(-10%)'
      })),
      state('active', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('* <=> *', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
    ])
  ],
  selector: 'app-res-redev',
  styleUrls: ['../../resources.component.scss'],
  templateUrl: './redev.component.html'
})

export class RedevDataComponent implements OnInit {
  fullScreen = false;
  iframeVis = false;
  loading = false;
  loaded = false;
  sidebarVisibility;
  selectedDoc;
  displayDialog: boolean;
  listOfData: Array<any>;
  cols: Array<any>;

  constructor(
    public jsonData: JsonDataService,
    public sanitizer: DomSanitizer,
    public breakpointObserver: BreakpointObserver
    ) { }

  ngOnInit(): any {
    this.loading = true;
    this.jsonData.getFiles('plans')
      .then(files => {
          files.forEach(datum => datum.pubDate = new Date(datum.pubDate));
          this.listOfData = files;
         });
    this.cols = [
      { field: 'id', header: 'Id', width: 'ui-g-2' },
      { field: 'label', header: 'Document', width: 'ui-g-8' },
      { field: 'pubDate', header: 'Published', width: 'ui-g-2', date: true }
    ];
    this.breakpointObserver.observe([ Breakpoints.Small ])
      .subscribe(result => {
        if (result.breakpoints[Breakpoints.Small] || result.breakpoints[Breakpoints.XSmall]) {
          this.fullScreen = true;
      }}
    );
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
}
