import { Component } from '@angular/core';
import {PageTitleService} from "../../page-title.service";

@Component({
  selector: 'app-music-page',
  templateUrl: './music-page.component.html',
  styleUrls: ['./music-page.component.css']
})
export class MusicPageComponent {
  constructor(private pageTitleService: PageTitleService) {}

  ngOnInit() {
    this.pageTitleService.setTitle("Musik");
    this.pageTitleService.setFabText("Erstelle Inhalt");
  }
}
