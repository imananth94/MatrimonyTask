import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardSlidePageRoutingModule } from './card-slide-routing.module';

import { CardSlidePage } from './card-slide.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardSlidePageRoutingModule
  ],
  declarations: [CardSlidePage]
})
export class CardSlidePageModule {}
