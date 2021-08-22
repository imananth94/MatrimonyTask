import { NgModule } from '@angular/core';
import { BrowserModule,HammerModule,HammerGestureConfig, HAMMER_GESTURE_CONFIG  } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import * as Hammer from 'hammerjs';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// for tracking swipe events. enabling all swipe directions

export class HammerConfig extends HammerGestureConfig {
  overrides = <any>{
    'swipe': { direction: Hammer.DIRECTION_ALL }
  };
}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HammerModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, {
    provide: HAMMER_GESTURE_CONFIG,
    useClass: HammerConfig
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}
