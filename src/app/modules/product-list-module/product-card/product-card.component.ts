import { Component, Input } from '@angular/core';
import { IProduct } from '../../../shared/products/products';

@Component({
	selector: 'app-product-card',
	templateUrl: './product-card.component.html',
	styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
	@Input() product: IProduct | undefined;

	onBuyButtonClick(event: Event) {
		console.log('On Buy button clicked');
		event.stopPropagation();
	}

	onSaveClick() {
		console.log('On Save button clicked');
	}
}
