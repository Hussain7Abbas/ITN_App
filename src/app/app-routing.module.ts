import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)},
  { path: 'about', loadChildren: './about/about.module#AboutPageModule'},
  { path: 'notifi', loadChildren: './notifi/notifi.module#NotifiPageModule' },
  { path: 'add_investor', loadChildren: './modals/add_investor/add_investor.module#addInvestorPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
