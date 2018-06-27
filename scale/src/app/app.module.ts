import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './constants/navbar/navbar.component';
import { FooterComponent } from './constants/footer/footer.component';
import { UserComponent } from './constants/user/user.component';
import { VisualizationComponent } from './utilities/visualization/visualization.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    UserComponent,
    VisualizationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
