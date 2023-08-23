import { Component } from '@angular/core';
import {PageTitleService} from "../../page-title.service";

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css']
})
export class MoviePageComponent {
  constructor(private pageTitleService: PageTitleService) {}

  ngOnInit() {
    this.pageTitleService.setTitle("Filme");
    this.pageTitleService.setFabText("Erstelle Inhalt");
  }
}
