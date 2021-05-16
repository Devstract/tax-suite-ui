import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdValoremTaxRoutingModule } from './ad-valorem-tax-routing.module';
import { SearchComponent } from './pages/search/search.component';
import { AdValoremTaxComponent } from './ad-valorem-tax.component';

@NgModule({
  declarations: [SearchComponent, AdValoremTaxComponent],
  imports: [CommonModule, AdValoremTaxRoutingModule],
})
export class AdValoremTaxModule {}
