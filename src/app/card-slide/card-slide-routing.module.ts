import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardSlidePage } from './card-slide.page';

const routes: Routes = [
  {
    path: '',
    component: CardSlidePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardSlidePageRoutingModule {}
