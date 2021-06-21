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
import XyzSource from 'ol/source/XYZ';



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
  xyzSource!: XyzSource
  tileLayer!: TileLayer

  ngOnInit(): void {
    //console.log("sklj "  + this.data)
    //console.log(this.data)
    //console.log(this.data.Coordinates[0]+"  --  "+this.data.Coordinates[1])
    if(this.data != null){

      

      this.vectorSource = new VectorSource({
        //features: [this.marker]
      })

      //this.vectorSource.addFeature(this.marker)

      this.vectorLayer = new VectorLayer({
        source: this.vectorSource
      })

      this.xyzSource = new XyzSource({
        url:'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}' // 'http://tile.osm.org/{z}/{x}/{y}.png',
      })

      this.tileLayer = new TileLayer({
        source: this.xyzSource
      })

      this.map = new Map({
        view: new View({
          center: fromLonLat([19.822994923248242,45.24834393080695]),
          zoom: 12,
        }),
        layers: [this.tileLayer, this.vectorLayer],
        target: 'ol-map'
      });

      this.marker = new Feature({
        geometry: new Point(fromLonLat([this.data.Coordinates[0], this.data.Coordinates[1]]))
      })
      this.marker.setStyle( new Style({
        image: new Icon({
          src: 'assets/images/vozilo-mapa.png',      

        }),
      }))

      this.vectorSource.addFeature(this.marker);


    }
    else{ //stisne na mapu,za dodavanje novig uredjaja
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
      var coordinate = this.map.getEventCoordinate(event);      //kas stisne na mapu
      var lonlat = olProj.transform(coordinate, 'EPSG:3857', 'EPSG:4326');
      this.dialogRef.close(lonlat as []);   //kod new device iz nav bara
  }
}
