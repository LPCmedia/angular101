import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule, CoreModule } from '@activia/ngx-components';
import { LAYOUT_SETTINGS } from '@activia/ngx-components';
import { LayoutMode } from '@activia/ngx-components';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule.forRoot({
      layoutConfig: { 
        provide: LAYOUT_SETTINGS,
        useValue: {
          mode: LayoutMode.OFF_CANVAS,
        }
      }
    }),
    CoreModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
