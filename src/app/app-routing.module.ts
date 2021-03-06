import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'card-list',
    loadChildren: () =>
      import('./pages/card-list/card-list.module').then(
        (m) => m.CardListPageModule
      ),
  },
  {
    path: 'random-card',
    loadChildren: () =>
      import('./pages/random-card/random-card.module').then(
        (m) => m.RandomCardPageModule
      ),
  },
  {
    path: 'cast-spell-dialog',
    loadChildren: () =>
      import('./dialogs/cast-spell-dialog/cast-spell-dialog.module').then(
        (m) => m.CastSpellDialogPageModule
      ),
  },  {
    path: 'memory',
    loadChildren: () => import('./pages/memory/memory.module').then( m => m.MemoryPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
