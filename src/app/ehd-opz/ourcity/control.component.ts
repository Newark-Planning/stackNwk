import { Component, ElementRef, Host, Input, OnInit, Optional } from '@angular/core';

import { BookmarkCtrl } from 'ol-ext/control/GeoBookmark';
import OlMap from 'ol/Map';
import { MapidService, MapService } from '../../shared/services';

// Add a control to the map
// The control can be set inside the map (using parent id) or outside (using a mapId attribute)
// @example
//   <!-- Display a control inside a map -->
//   <app-map>
//     <app-control></app-control>
//   </app-map>
//   <!-- Display a control outside a map -->
//   <app-control mapId="map"></app-control>
@Component({
    selector: 'app-control',
    template: ''
})

export class ControlComponent implements OnInit {

    // Map id
    @Input() mapId: string;

    // Define the service
    constructor(
        private readonly mapService: MapService,
        @Host() @Optional() private readonly mapidService: MapidService,
        private readonly elementRef: ElementRef
    ) { }

    // Add the control to the map

    ngOnInit(): void {
        // Get the current map or get map by id
        const map: OlMap = this.mapService.getMap(this.mapidService || this.mapId);
        // Get the target if outside the map
        const target = this.elementRef.nativeElement.parentElement ? this.elementRef.nativeElement : undefined;
        // Create the control
        const mark = new BookmarkCtrl({ target });
        map.addControl(mark);
    }
}
