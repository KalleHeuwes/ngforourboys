import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-filter-chip',
  templateUrl: './filter-chip.component.html',
  styleUrls: ['./filter-chip.component.css']
})
export class FilterChipComponent {
  @Input() label! : string;
}
