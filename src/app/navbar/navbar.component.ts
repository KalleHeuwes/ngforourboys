import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {PageTitleService} from "../page-title.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  pageTitle: string = "";
  fabText: string = "";

  constructor(private pageTitleService: PageTitleService) {
    this.pageTitleService.title$.subscribe((title) => {
      this.pageTitle = title;
    });
    this.pageTitleService.fabText$.subscribe((fabText) => {
      this.fabText = fabText;
    });
  }
}
