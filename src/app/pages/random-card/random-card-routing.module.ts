import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RandomCardPage } from './random-card.page';

const routes: Routes = [
  {
    path: '',
    component: RandomCardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RandomCardPageRoutingModule {}
