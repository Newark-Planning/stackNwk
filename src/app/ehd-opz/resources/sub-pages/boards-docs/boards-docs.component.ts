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
  loading = true;
  data: Array<DataItem>;
  files2019: Array<any> = [];
  fullScreen = false;
  iframeVis = false;
  loaded = false;
  sidebarVisibility;
  displayDialog: boolean;
  listOfData: Array<any> = [{
    label: 'Look for board meeting minutes, agendas and other documents left'
  }];
  cols: Array<any>;
  filesTree: Array<DataItem> = [
    {
    children: [
      {
        children: [
          {
            data: {link: 'zba/agendas', year: 2019},
            icon: 'pi pi-file-pdf',
            label: '2019 Meeting Agendas'
          },
          {
            data: {link: 'zba/agendas', year: 2020},
            icon: 'pi pi-file-pdf',
            label: '2020 Meeting Agendas'
        }],
        collapsedIcon: 'fa fa-folder',
        expandedIcon: 'fa fa-folder-open',
        label: 'Agendas',
        leaf: false,
        selectable: false
      },
      {
        children: [
          {
            data: {link: 'zba/minutes', year: 2019},
            icon: 'pi pi-file-pdf',
            label: '2019 Meeting Minutes'
          },
          {
            data: {link: 'zba/minutes', year: 2020},
            icon: 'pi pi-file-pdf',
            label: '2020 Meeting Minutes'
        }],
        collapsedIcon: 'fa fa-folder',
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
        children: [
        {
          data: {link: 'cpb/agendas', year: 2019},
          icon: 'pi pi-file-pdf',
          label: '2019 Meeting Agendas'
        },
        {
          data: {link: 'cpb/agendas', year: 2020},
          icon: 'pi pi-file-pdf',
          label: '2020 Meeting Agendas'
        }],
        collapsedIcon: 'fa fa-folder',
        expandedIcon: 'fa fa-folder-open',
        label: 'Agendas',
        leaf: false,
        selectable: false
      },
      {
        children: [
          {
            data: {link: 'cpb/minutes', year: 2019},
            icon: 'pi pi-file-pdf',
            label: '2019 Meeting Minutes'
          },
          {
            data: {link: 'cpb/minutes', year: 2020},
            icon: 'pi pi-file-pdf',
            label: '2020 Meeting Minutes'
        }],
        collapsedIcon: 'fa fa-folder',
        data: '',
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
  tableMenu = [
      { icon: 'pi pi-info-circle', label: 'info', command: () => this.sidebarVisibility = true},
      // tslint:disable-next-line: no-non-null-assertion
      { icon: 'pi pi-download', label: 'download', command: () => this.download(this.selectedDoc!)}
  ];
  selectedGroup: DataItem | null;
  selectedDoc: DataItem | null;

  constructor(
    public jsonData: JsonDataService,
    public sanitizer: DomSanitizer
    ) { }

  ngOnInit(): any {
        // tslint:disable: no-null-keyword no-non-null-assertion
    this.loading = true;
    this.cols = [
      { field: 'id', header: 'Id', width: 'ui-g-2' },
      { field: 'label', header: 'Document', width: 'ui-g-8' },
      { field: 'pubDate', header: 'Published', width: 'ui-g-2', date: true }
    ];
  }

  nodeSelect(group: DataItem | null): any {
    if (this.loading) { this.loading = false; }
    if (group !== this.selectedGroup) { this.selectedGroup = group; }
    this.jsonData.getFiles(group!.data.link)
    .then((files: Array<DataItem>) => this.listOfData = files.filter(file => file.pubDate!.toString()
    .startsWith(group!.data.year)));
  }
  loadNode(event: any): any {
    if (event.node.data && event.node.children === undefined) {
      this.jsonData.getFiles(event.node.data)
        .then((files: Array<DataItem>) => event.node.children = files);
    }
  }
  download(doc: DataItem): any {
    window.open(`https://drive.google.com/uc?export=download&id=${doc.docId}`, '_blank');
  }
}
