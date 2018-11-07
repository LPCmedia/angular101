import { Component, Input } from '@angular/core';

@Component({
  selector: 'll-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent {

  @Input() subtitle: string;

}
