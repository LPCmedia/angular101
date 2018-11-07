import { Component } from '@angular/core';
import { single, multi } from './data/data';

@Component({
  selector: 'll-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent {

  single: any[];
  multi: any[];

  view: any[] = [1500, 600];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;


  xAxisLabel = 'Time';
  showYAxisLabel = true;
  yAxisLabel = 'Popularity (search)';
  legendPosition = 'right';
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA', 'hotpink', 'blue', 'orange']
  };

  // line, area
  autoScale = true;

  xAxisTickFormatting = (item) => {
    console.log(item);
    return new Date(item).getFullYear();
  }

  constructor() {
    Object.assign(this, {single, multi});
  }

  onSelect(event) {
    console.log(event);
  }

}
