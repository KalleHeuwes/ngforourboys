import { Component } from '@angular/core';
import {PageTitleService} from "../../page-title.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private pageTitleService: PageTitleService) {}

  ngOnInit() {
    this.pageTitleService.setTitle("Home");
    this.pageTitleService.setFabText("Erstelle Gruppe");
  }
}
