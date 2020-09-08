import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CastSpellDialogPage } from './cast-spell-dialog.page';

const routes: Routes = [
  {
    path: '',
    component: CastSpellDialogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CastSpellDialogPageRoutingModule {}
