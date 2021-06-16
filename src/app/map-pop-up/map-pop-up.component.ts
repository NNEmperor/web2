import { Component, OnInit } from '@angular/core';


import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';
import * as olProj from 'ol/proj';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-map-pop-up',
  templateUrl: './map-pop-up.component.html',
  styleUrls: ['./map-pop-up.component.css']
})
export class MapPopUpComponent implements OnInit {



  constructor(public dialogRef: MatDialogRef<MapPopUpComponent>) { }

  map!: Map;

  ngOnInit(): void {
    this.map = new Map({
      view: new View({
        center: fromLonLat([19.822994923248242,45.24834393080695]),
        zoom: 12,
      }),
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      target: 'ol-map'
    });
  }

  getCoord(event: any){
      var coordinate = this.map.getEventCoordinate(event);
      var lonlat = olProj.transform(coordinate, 'EPSG:3857', 'EPSG:4326');
      var lon = lonlat[0];
      var lat = lonlat[1];
      //alert('lon'+lon+" lat"+lat);
      this.dialogRef.close(lonlat as []);
  }
}
