import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	title = 'angular-learnjs';

	onKeyDown(event: Event) {
		console.log('onKeyDown', event);
	}

	onAppHeaderClick() {
		console.log('onHeaderClick');
	}
}
