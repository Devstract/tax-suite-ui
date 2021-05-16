import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/ad-valorem-tax',
  },
  {
    path: 'ad-valorem-tax',
    loadChildren: () => import('./modules/ad-valorem-tax/ad-valorem-tax.module').then((m) => m.AdValoremTaxModule),
  },
  {
    path: 'business-tax',
    loadChildren: () => import('./modules/business-tax/business-tax.module').then((m) => m.BusinessTaxModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
