import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { TreeNode } from 'primeng/api';
import { DataItem } from '../../../../shared/models';
import { JsonDataService } from '../../../../shared/services';

@Component({
  selector: 'app-res-minutes',
  styleUrls: ['../../resources.component.scss'],
  templateUrl: './minutes.component.html'
})

export class MinutesDataComponent implements OnInit {
  loading = false;
  filesTree: Array<TreeNode>;
  selectedFile: TreeNode | undefined;

  constructor(
    public jsonData: JsonDataService,
    public sanitizer: DomSanitizer
    ) { }

  ngOnInit(): any {
    this.loading = true;
    // tslint:disable: object-literal-sort-keys
    this.jsonData.getFiles('minutes')
      .then(
        (files: Array<DataItem>) => this.filesTree = [
          {
            data: [
              {
                label: 'Zoning Board',
                data: 'Zoning Board Folder',
                expandedIcon: 'fa fa-folder-open',
                collapsedIcon: 'fa fa-folder',
                children: [{
                        label: '2019',
                        data: 'Work Folder',
                        expandedIcon: 'fa fa-folder-open',
                        collapsedIcon: 'fa fa-folder',
                        children: () => {
                          files.filter(file => file.pubDate.toString()
                            .startsWith('2019'))
                            .forEach(file =>
                            ({
                              label: file.document,
                              data: file.docId,
                              icon: 'far fa-file-pdf'
                            })
                          );
                        }
                  }
                ]
              }
            ]
          }
        ]
      );
  }
  nodeSelect(file): any {
    this.selectedFile = undefined;
    this.selectedFile = file;
  }
}
