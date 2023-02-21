import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ScreenComponent } from './screen/screen.component';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { OptionsComponent } from './screen/options/options.component';

@NgModule({
  declarations: [
    AppComponent,
    ScreenComponent,
    KeyboardComponent,
    OptionsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
