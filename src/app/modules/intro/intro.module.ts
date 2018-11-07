import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgendaComponent } from './agenda/agenda.component';
import { TimelineComponent } from './timeline/timeline.component';
import { Routes, RouterModule } from '@angular/router';
import { SlideComponent } from 'src/app/shared/components/slide/slide.component';
import { WebComponent } from './web/web/web.component';

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
      title: 'Historical Perspective',
      nextRoute: 'web-components',
    }
  },
  {
    path: 'web-components',
    component: WebComponent,
    data: {
      title: 'Web Components',
      nextRoute: '',
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [AgendaComponent, TimelineComponent, SlideComponent, WebComponent]
})
export class IntroModule { }
