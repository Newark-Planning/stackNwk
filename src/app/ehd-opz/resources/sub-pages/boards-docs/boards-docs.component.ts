import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { DataItem } from '../../../../shared/models';
import { JsonDataService } from '../../../../shared/services';

@Component({
  selector: 'app-res-minutes',
  styleUrls: ['../../resources.component.scss'],
  templateUrl: './boards-docs.component.html'
})

export class BoardsDocsDataComponent implements OnInit {
  loading = false;
  data: Array<DataItem>;
  files2019: Array<any> = [];
  filesTree: Array<DataItem> = [
    {
    children: [
      {
        collapsedIcon: 'fa fa-folder',
        data: 'zba/agendas',
        expandedIcon: 'fa fa-folder-open',
        label: 'Agendas',
        leaf: false,
        selectable: false
      },
      {
        collapsedIcon: 'fa fa-folder',
        data: 'zba/minutes',
        expandedIcon: 'fa fa-folder-open',
        label: 'Minutes',
        leaf: false,
        selectable: false
      }
    ],
    collapsedIcon: 'fa fa-folder',
    expandedIcon: 'fa fa-folder-open',
    label: 'Zoning Board',
    leaf: false,
    selectable: false
    },
    {
    children: [
      {
        collapsedIcon: 'fa fa-folder',
        data: 'cpb/agendas',
        expandedIcon: 'fa fa-folder-open',
        label: 'Agendas',
        leaf: false,
        selectable: false
      },
      {
        collapsedIcon: 'fa fa-folder',
        data: 'cpb/minutes',
        expandedIcon: 'fa fa-folder-open',
        label: 'Minutes',
        leaf: false,
        selectable: false
      }],
    collapsedIcon: 'fa fa-folder',
    expandedIcon: 'fa fa-folder-open',
    label: 'Central Planning Board',
    leaf: false,
    selectable: false
    }
  ];
  selectedFile: DataItem | null;

  constructor(
    public jsonData: JsonDataService,
    public sanitizer: DomSanitizer
    ) { }

  ngOnInit(): any {
        // tslint:disable: no-null-keyword no-non-null-assertion
    this.loading = true;
  }

  nodeSelect(file: DataItem | null): any {
    if (file !== this.selectedFile) {this.selectedFile = file; }
    (this.selectedFile)
    // tslint:disable: no-null-keyword no-non-null-assertion
    ? this.selectedFile.data!.pubDate! = new Date(file!.data!.pubDate!)
    // tslint:disable-next-line: no-console
    : console.log('no file here');
  }
  loadNode(event: any): any {
    if (event.node.data && event.node.children === undefined) {
      this.jsonData.getFiles(event.node.data)
        .then((files: Array<DataItem>) => event.node.children = files);
    }
  }
}
