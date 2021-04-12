import { Component, OnInit } from '@angular/core';
//import "../node_modules/ol/ol.css";

import Map from 'ol/Map';
import View from 'ol/View';
import VectorLayer from 'ol/layer/Vector';
import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';
import OSM from 'ol/source/OSM';
import * as olProj from 'ol/proj';
import TileLayer from 'ol/layer/Tile';
import { Feature } from 'ol';
import TileJSON from 'ol/source/TileJSON.js';
import VectorSource from 'ol/source/Vector.js';
import Point from 'ol/geom/Point';
import XyzSource from 'ol/source/XYZ';
import { fromLonLat } from 'ol/proj';
import Geometry from 'ol/geom/Geometry';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  map!: Map;
  parentMessage = "Map"
  vectorSource!: VectorSource;
  vectorLayer!: VectorLayer;
  xyzSource!: XyzSource;
  tileLayer!: TileLayer;
  view!: View;
  marker!: Feature;
  marker2!: Feature;

  constructor() { }

  ngOnInit(): void {
    this.marker = new Feature({
      geometry: new Point(fromLonLat([27.46164, 53.902257]))
    });
    this.marker2 = new Feature({
      geometry: new Point(fromLonLat([50.46164, 60.902257]))
    });

    
    //------------


    var iconFeature = new Feature({
      geometry: new Point([27.46164, 57.902257]),
      name: 'Null Island',
      population: 4000,
      rainfall: 500,
    });
    
    var iconStyle = new Style({
      image: new Icon({
        anchor: [0.5, 46],
        //anchorXUnits: 'fraction',
       // anchorYUnits: 'pixels',
        src: 'assets/images/tacka.png',
      }),
    });
    
    iconFeature.setStyle(iconStyle);
    
   // var vectorSource = new VectorSource({
    //  features: [iconFeature],
   // });
    
    this.vectorSource = new VectorSource({
      features: [this.marker,this.marker2]
    });
    
    this.vectorLayer = new VectorLayer({
      source: this.vectorSource
    });

    //var key = 'Get your own API key at https://www.maptiler.com/cloud/';
    // XYZ
    this.xyzSource = new XyzSource({
      url:'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}' // 'http://tile.osm.org/{z}/{x}/{y}.png',
      //tilePixelRatio: 5, // THIS IS IMPORTANT
    });
    
    this.tileLayer = new TileLayer({
      source: this.xyzSource
    });

    // View and map
    this.view = new View({
      center: fromLonLat([19.822994923248242,45.24834393080695]),
      zoom: 12
    });
    
    this.map = new Map({
      target: 'hotel_map',
      layers: [this.tileLayer, this.vectorLayer],
      view: this.view
    });
    
  }

  getCoord(event: any){
    var coordinate = this.map.getEventCoordinate(event);
    console.log(coordinate);
    var lonlat = olProj.transform(coordinate, 'EPSG:3857', 'EPSG:4326');
  var lon = lonlat[0];
  var lat = lonlat[1];
  console.log('lon'+lon+" lat"+lat);
   // var thing = new Point(fromLonLat());//([coordinate[0],coordinate[1]]))
    //console.log("tacka:"+thing);

    var markercic = new Feature({
      geometry: new Point(fromLonLat([lon, lat]))
    });
  markercic.setStyle(
      new Style({
        image: new Icon({
          //anchor: [0.5, 46],
          //anchorXUnits:"fraction",
          //anchorYUnits:"pixels",
          ////color: '#BADA55',
          //crossOrigin: 'anonymous',
          // For Internet Explorer 11
          
          //imgSize: [40, 40],
          src: 'assets/images/rad_ekipe.jpg',
        }),
      })
    );
    this.vectorSource.addFeature(markercic);
  }

}
