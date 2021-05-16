import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusinessTaxRoutingModule } from './business-tax-routing.module';
import { SearchComponent } from './pages/search/search.component';

@NgModule({
  declarations: [SearchComponent],
  imports: [CommonModule, BusinessTaxRoutingModule],
})
export class BusinessTaxModule {}
