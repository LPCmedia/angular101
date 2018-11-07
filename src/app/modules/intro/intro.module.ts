import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgendaComponent } from './agenda/agenda.component';
import { TimelineComponent } from './timeline/timeline.component';
import { Routes, RouterModule } from '@angular/router';
import { SlideComponent } from 'src/app/shared/components/slide/slide.component';
import { WebComponent } from './web/web/web.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BigComponent } from './big/big/big.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'agenda' 
  },
  {
    path: 'agenda',
    component: AgendaComponent,
    data: {
      title: 'Agenda',
      nextRoute: 'timeline',
    }
  },
  {
    path: 'timeline',
    component: TimelineComponent,
    data: {
      title: 'Intro / Historical Perspective',
      nextRoute: 'web-components',
    }
  },
  {
    path: 'web-components',
    component: WebComponent,
    data: {
      title: 'Intro / About Web Components',
      nextRoute: 'big-3',
    }
  },
  {
    path: 'big-3',
    component: BigComponent,
    data: {
      title: 'Intro / Big 3',
      nextRoute: '',
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    NgxChartsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [AgendaComponent, TimelineComponent, SlideComponent, WebComponent, BigComponent]
})
export class IntroModule { }
