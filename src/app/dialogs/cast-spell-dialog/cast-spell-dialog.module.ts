import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CastSpellDialogPageRoutingModule } from './cast-spell-dialog-routing.module';

import { CastSpellDialogPage } from './cast-spell-dialog.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CastSpellDialogPageRoutingModule
  ],
  declarations: [CastSpellDialogPage]
})
export class CastSpellDialogPageModule {}
