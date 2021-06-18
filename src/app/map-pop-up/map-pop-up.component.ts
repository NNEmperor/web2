import { Component, Inject, OnInit } from '@angular/core';


import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';
import * as olProj from 'ol/proj';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Feature } from 'ol';
import Point from 'ol/geom/Point';
import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';


@Component({
  selector: 'app-map-pop-up',
  templateUrl: './map-pop-up.component.html',
  styleUrls: ['./map-pop-up.component.css']
})
export class MapPopUpComponent implements OnInit {



  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<MapPopUpComponent>) { }

  map!: Map;
  marker!: Feature;
  vectorLayer!: VectorLayer;
  vectorSource!: VectorSource;

  ngOnInit(): void {
    console.log(this.data)
    if(this.data != null){

      this.marker = new Feature({
        geometry: new Point(fromLonLat([19.771925663604687,45.23614962921749]))
      })
      this.marker.setStyle( new Style({
        image: new Icon({
          src: 'assets/images/vozilo-mapa.png',      

        }),
      }))

      this.vectorSource = new VectorSource({
        features: [this.marker]
      })

      this.vectorLayer = new VectorLayer({
        source: this.vectorSource
      })

      this.map = new Map({
        view: new View({
          center: fromLonLat([19.822994923248242,45.24834393080695]),
          zoom: 12,
        }),
        layers: [
          new TileLayer({
            source: new OSM(),
          })
        ,
        this.vectorLayer],
        target: 'ol-map'
      });
    }
    else{
      this.map = new Map({
        view: new View({
          center: fromLonLat([19.822994923248242,45.24834393080695]),
          zoom: 12,
        }),
        layers: [
          new TileLayer({
            source: new OSM(),
          })],
        target: 'ol-map'
      });
    } 



  }


  getCoord(event: any){
      var coordinate = this.map.getEventCoordinate(event);
      var lonlat = olProj.transform(coordinate, 'EPSG:3857', 'EPSG:4326');
      this.dialogRef.close(lonlat as []);
  }
}
