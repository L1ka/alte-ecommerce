import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card.component';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ProductCardComponent],
  imports: [CommonModule, SharedModule, RouterModule],
  exports: [ProductCardComponent],
})
export class ProductCardModule {}
