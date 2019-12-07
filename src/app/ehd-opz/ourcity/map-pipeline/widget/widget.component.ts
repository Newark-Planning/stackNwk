import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Map } from 'leaflet';

import * as carto from '@carto/carto-vl';

@Component({
  selector: 'app-widget',
  styleUrls: ['./widget.component.scss'],
  templateUrl: './widget.component.html'
})

export class WidgetComponent implements OnInit {
  @Input() map: Map;
  @Input() client: any;
  @Input() source: any;
  @Input() column: string;
  @Input() bins: number;

  // tslint:disable-next-line: prefer-output-readonly no-output-on-prefix
  @Output() onDataChanged: EventEmitter<any> = new EventEmitter();

  data: any;
  binsMaxValue: number;
  barColors: Array<string> = ['#fcde9c', '#faa476', '#f0746e', '#e34f6f', '#dc3977', '#b9257a', '#7c1d6f'];

  ngOnInit(): void {
    const boundingBoxFilter = new carto.filter.BoundingBoxLeaflet(this.map);
    const sqlSource = new carto.source.SQL(this.source);

    const histogram = new carto.dataview.Histogram(sqlSource, this.column, { bins: this.bins });
    histogram.addFilter(boundingBoxFilter);
    histogram.on('dataChanged', data => {
      this.data = data;
      this.onDataChanged.emit(data);
    });

    this.client.addDataview(histogram);
  }

  getBarStyle(bin): any {
    if (!bin) {
      return {};
    }

    return {
      background: this.barColors[bin.bin],
      height: `${bin.normalized * 100}%`
    };
  }
}
