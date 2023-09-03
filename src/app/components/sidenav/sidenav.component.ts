import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
	selector: 'app-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit, AfterViewInit {
	// @Input() isDrawerOpened = false;
	// @Output() isDrawerOpenedChange = new EventEmitter<boolean>();

	@ViewChild('drawer', { static: true })
	private matDrawerInstance!: MatDrawer;

	@ViewChild(MatDrawer, {
		read: MatDrawer,
		static: true,
	})
	private matDrawerTest!: MatDrawer;

	ngOnInit() {
		// this.matDrawerTest.toggle();
		console.log();
	}

	ngAfterViewInit(): void {
		setTimeout(() => {
			// this.matDrawerTest.toggle();
		});
	}

	toggleDrawer() {
		this.matDrawerInstance.toggle();
		// console.log(this.matDrawerTest)
	}
}
