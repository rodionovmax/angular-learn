import { Component } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
	readonly imgSrc = '../../../favicon.ico';

	onMenuClick() {
		console.log('onMenuClick');
	}

	onShareClick(event: Event) {
		console.log('onShareClick', event?.target);
		event.stopPropagation();
	}
}
