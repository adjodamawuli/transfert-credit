import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';
import { FooterComponent } from './footer/footer.component';
import { AsideComponent } from './aside/aside.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MobileMenuComponent,
    FooterComponent,
    AsideComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
