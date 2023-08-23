import { Component } from '@angular/core';
import {PageTitleService} from "../../page-title.service";

@Component({
  selector: 'app-location-page',
  templateUrl: './location-page.component.html',
  styleUrls: ['./location-page.component.css']
})
export class LocationPageComponent {
  constructor(private pageTitleService: PageTitleService) {}

  ngOnInit() {
    this.pageTitleService.setTitle("Orte");
    this.pageTitleService.setFabText("Erstelle Inhalt");
  }
}
