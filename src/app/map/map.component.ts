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
import { MessagePassingService } from '../message-passing.service';
import {MatDialog} from '@angular/material/dialog'; 
import { MapDocPopUpComponent } from '../map-doc-pop-up/map-doc-pop-up.component';
import { IncidentPassingService } from '../incident-passing.service';

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
  deviceovi=[] as any;
  constructor(private service: MessagePassingService , public dialog: MatDialog,private incidentService: IncidentPassingService) {
    this.service.changeData("MAP")
  }

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

    //za test prikaza 
    var iconFeature = new Feature({
      geometry:  new Point(fromLonLat([19.795958256378125, 45.29052031509573])),//new Point([0, 0]),
      name: 'EKIPA NUMERO UNO',
      population: 4000,
      rainfall: 500,
      
    });
    var iconStyle = new Style({
      image: new Icon({
        
        src: 'assets/images/ekipa-mapa.png',
      }),
    });
    
    iconFeature.setStyle(iconStyle);
    this.vectorSource.addFeature(iconFeature);//dodata JEDNA IKONICA
    
    var markercic = new Feature({
      geometry: new Point(fromLonLat([19.771925663604687,45.23614962921749]/*[lon, lat]*/)),
      name: 'VOZILO1',
      title:'vaaat'
    });

    markercic.setStyle(
        new Style({
          image: new Icon({
            src: 'assets/images/vozilo-mapa.png',
          }),
          
        })
      );


      this.incidentService.getAllDevices().subscribe(res=>{
        this.deviceovi = res as any;
        console.log(this.deviceovi)
        //xCoordinate: 19.810897552903093
  //yCoordinate: 45.25776989010703
       
        //devicovi
        alert(this.deviceovi.length)
    for(let i=0;i<this.deviceovi.length;i++){
      console.log(this.deviceovi[i].xCoordinate,this.deviceovi[i].yCoordinate)
      var markercic22 = new Feature({
        geometry: new Point(fromLonLat([this.deviceovi[i].xCoordinate,this.deviceovi[i].yCoordinate]/*[lon, lat]*/)),
        name: this.deviceovi[i].id,
        title:'vaaat'
      });
  
      markercic22.setStyle(
          new Style({
            image: new Icon({
              src: 'assets/images/vozilo-mapa.png',
            }),
            
          })
        );

        this.vectorSource.addFeature(markercic22);//DODAJU SVE
    }  
  })

    this.vectorSource.addFeature(markercic);  //DODATA DRUGA IKONICA
    
  }

  getCoord(event: any){
    var coordinate = this.map.getEventCoordinate(event);
   // console.log(coordinate);
    var lonlat = olProj.transform(coordinate, 'EPSG:3857', 'EPSG:4326');
    var lon = lonlat[0];
    var lat = lonlat[1];
  //  console.log('lon'+lon+" lat"+lat);
    
                                                  //KOD ZA DODAVANJE MARKERA NA MAPI privremeno zakomentarisan
  /*  var markercic = new Feature({
      geometry: new Point(fromLonLat([lon, lat])),
      name: 'VOZILO1',
      title:'vaaat'
    });

    markercic.setStyle(
        new Style({
          image: new Icon({
            src: 'assets/images/vozilo-mapa.png',
          }),
          
        })
      );

    this.vectorSource.addFeature(markercic);  //dodaje marker za vozilo
    */
    var postiji='ne'
    var mapica=this.map;
    this.map.on('click', function(evt) {
      //console.log("osuskuje");
      var feature = mapica.forEachFeatureAtPixel(evt.pixel,
        function(feature) {
          console.log('NASAO');
          return feature;
        });
     // if (feature === marker) {
       var i=1;
       //if(i==1){
        var prop=feature?.get('name'); //na osnovu imena (BICE TO ID ODGOVARAJUCEG DOKUMENTA) poslati zahtev ka serveru i napraviti popup prozor koji ce prikazati sve info
        //prop.
        i=2;
        console.log('imeee '+prop);
          if(prop==undefined){
          }else{
            console.log('postoji');
            //DODELJUJE KOJI ID JE U PITANJU IZ NAZIVA MARKERA
          localStorage.setItem('mapa',prop);
          }
      //}
      });
      var mapa=localStorage.getItem('mapa');
      console.log(mapa);
      if(mapa!=null){
        //OTVARA DIJALLOG ZA DOKUMENT
        let dialogRef = this.dialog.open(MapDocPopUpComponent);
      }
  }
  openDialog(){
  
    let dialogRef = this.dialog.open(MapDocPopUpComponent);
  }

}

