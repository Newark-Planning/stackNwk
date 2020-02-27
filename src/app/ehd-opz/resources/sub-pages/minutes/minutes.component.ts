import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { DataItem } from '../../../../shared/models';
import { JsonDataService } from '../../../../shared/services';

@Component({
  selector: 'app-res-minutes',
  styleUrls: ['../../resources.component.scss'],
  templateUrl: './minutes.component.html'
})

export class MinutesDataComponent implements OnInit {
  loading = false;
  data: Array<DataItem>;
  files2019: Array<any> = [];
  filesTree: Array<DataItem> = [{
    children: this.files2019,
    collapsedIcon: 'fa fa-folder',
    expandedIcon: 'fa fa-folder-open',
    label: 'Zoning Board',
    leaf: false
  }];
  selectedFile: DataItem | null;

  constructor(
    public jsonData: JsonDataService,
    public sanitizer: DomSanitizer
    ) { }

  ngOnInit(): any {
    this.loading = true;
    this.jsonData.getFiles('minutes')
      .then((files: Array<DataItem>) => this.filesTree[0].children = files);
  }

  nodeSelect(file: DataItem): any {
    // tslint:disable: no-null-keyword
    (file.data) ? this.selectedFile = file : this.selectedFile = null;
    (this.selectedFile)
    // tslint:disable: no-non-null-assertion
    ? this.selectedFile.data!.pubDate! = new Date(file.data!.pubDate!)
    // tslint:disable-next-line: no-console
    : console.log('no file here');
  }
}
