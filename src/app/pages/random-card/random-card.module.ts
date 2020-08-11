import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RandomCardPageRoutingModule } from './random-card-routing.module';

import { RandomCardPage } from './random-card.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RandomCardPageRoutingModule
  ],
  declarations: [RandomCardPage]
})
export class RandomCardPageModule {}
