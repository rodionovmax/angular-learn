import { Component } from '@angular/core';
import { IProduct, listOfProducts } from '../../shared/products/products';

@Component({
	selector: 'app-product-list',
	templateUrl: './product-list.component.html',
	styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
	products: IProduct[] = [...listOfProducts];

	onProductCardClick(product: IProduct) {
		console.log(`On ${product.name} card clicked`);
	}
}
