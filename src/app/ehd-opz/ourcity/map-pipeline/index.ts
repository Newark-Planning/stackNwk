import { BasemapComponent } from './basemap.component';
import { LayerComponent } from './layer.component';
import { MapComponent } from './map/map.component';
import { WidgetComponent } from './widget/widget.component';

export const mapPieces = [
    BasemapComponent,
    LayerComponent,
    MapComponent,
    WidgetComponent
];

export * from './basemap.component';
export * from  './layer.component';
export * from './map/map.component';
export * from  './widget/widget.component';
