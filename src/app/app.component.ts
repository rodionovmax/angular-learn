import { Component } from '@angular/core';
import { applicationConfigMock } from './shared/application-config/application-config.mock';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	title = 'angular-learnjs';
	readonly applicationConfig = applicationConfigMock;
	// isDrawerOpened = false;

	onKeyDown(event: Event) {
		console.log('onKeyDown', event);
	}

	onAppHeaderClick() {
		console.log('onHeaderClick');
	}

	// onMenuClick() {
	// 	this.isDrawerOpened = !this.isDrawerOpened;
	// }
}
