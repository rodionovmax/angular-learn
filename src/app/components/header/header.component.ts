import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IApplicationConfig } from '../../shared/application-config/application-config.interface';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
	@Input() applicationConfig!: IApplicationConfig;
	// @Input('applicationConfig') config!: IApplicationConfig; // 2nd option - but it returns error Avoid aliasing inputs and outputs
	@Output() menuClick = new EventEmitter<string>();

	onMenuClick() {
		console.log('onMenuClick');
	}

	onShareClick(event: Event) {
		console.log('onShareClick', event?.target);
		event.stopPropagation();
	}
}
