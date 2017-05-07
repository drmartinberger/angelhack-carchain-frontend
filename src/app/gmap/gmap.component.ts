import {Component, Input, ViewChild, ElementRef, AfterViewInit} from "@angular/core";

declare var google: any;

@Component({
  selector: 'gmap',
  template: `
    <div #map style="height: 800px;">
    </div>
  `
})
export class GmapComponent implements AfterViewInit {
  @ViewChild('map') map: ElementRef;

  gmap: any;

  addMarker(lat, lon) {
    new google.maps.Marker({
      position: {
        lat: lat,
        lng: lon,
      },
      map: this.gmap,
    })
  }

  ngAfterViewInit() {
    let center = {
      lat: 50,
      lng: 11,
    };

    this.gmap = new google.maps.Map(this.map.nativeElement, {
      maxZoom: 10,
      center: center,
      zoom: 6,
    });
  }
}
