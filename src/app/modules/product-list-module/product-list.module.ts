import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from '../../components/product-list/product-list.component';
import { ProductCardComponent } from '../../components/product-list/product-card/product-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
	declarations: [ProductListComponent, ProductCardComponent],
	exports: [ProductListComponent],
	imports: [CommonModule, MatCardModule, MatButtonModule],
})
export class ProductListModule {}
