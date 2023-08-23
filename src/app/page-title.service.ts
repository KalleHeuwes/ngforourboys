import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PageTitleService {
  private titleSubject = new BehaviorSubject<string>("Default Title");
  title$ = this.titleSubject.asObservable();

  setTitle(title: string) {
    this.titleSubject.next(title);
  }
  private fabTextSubject = new BehaviorSubject<string>("Erstelle Inhalt");
  fabText$ = this.fabTextSubject.asObservable();

  setFabText(fabText: string) {
    this.fabTextSubject.next(fabText);
  }
}
