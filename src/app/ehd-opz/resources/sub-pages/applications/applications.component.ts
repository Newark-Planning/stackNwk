import { Component } from '@angular/core';

@Component({
  selector: 'app-resources-applications',
  styleUrls: ['../../resources.component.scss'],
  templateUrl: './applications.component.html'
})

export class ApplicationsDataComponent {
  mapOfExpandData: { [key: string]: boolean } = {};
  listOfData = [
    {
      color: 'red',
      description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
      document: 'John Brown Redevelopment Plan',
      fileType: 'pdf',
      id: 1,
      lastModified: 1 / 24 / 2017,
      type: 'plan'
    },
    {
      color: 'blue',
      description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
      document: 'John Brown',
      fileType: 'docx',
      id: 2,
      lastModified: 'December 30',
      type: 'application'
    },
    {
      color: 'brown',
      description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
      document: 'John Brown',
      fileType: 'shapefile',
      id: 3,
      lastModified: 'December 30',
      type: 'minutes'
    }
  ];
}
