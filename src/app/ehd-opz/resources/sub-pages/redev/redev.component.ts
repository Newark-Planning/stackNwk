import { Component, OnInit } from '@angular/core';
import { redevPlans } from './redev.plans';

@Component({
  selector: 'app-res-redev',
  styleUrls: ['../../resources.component.scss'],
  templateUrl: './redev.component.html'
})

export class RedevDataComponent implements OnInit {
  mapOfExpandData: { [key: string]: boolean } = {};
  listOfData;

  ngOnInit(): void {

    this.listOfData = redevPlans;
  }
}
