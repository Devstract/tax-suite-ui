import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusinessTaxRoutingModule } from './business-tax-routing.module';
import { SearchComponent } from './pages/search/search.component';
import { BusinessTaxComponent } from './business-tax.component';

@NgModule({
  declarations: [SearchComponent, BusinessTaxComponent],
  imports: [CommonModule, BusinessTaxRoutingModule],
})
export class BusinessTaxModule {}
