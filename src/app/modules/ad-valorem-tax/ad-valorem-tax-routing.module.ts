import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdValoremTaxComponent } from './ad-valorem-tax.component';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [
  {
    path: '',
    component: AdValoremTaxComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'search',
      },
      {
        path: 'search',
        component: SearchComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdValoremTaxRoutingModule {}
