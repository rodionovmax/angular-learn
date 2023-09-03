import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderModule } from './components/header/header.module';
import { ProductListModule } from './modules/product-list-module/product-list.module';
import { SidenavModule } from './components/sidenav/sidenav.module';

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, BrowserAnimationsModule, HeaderModule, ProductListModule, SidenavModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
