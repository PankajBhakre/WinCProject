import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActiveuserComponent } from './activeuser/activeuser.component';
import { InactiveuserComponent } from './inactiveuser/inactiveuser.component';

@NgModule({
  declarations: [
    AppComponent,
    ActiveuserComponent,
    InactiveuserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
