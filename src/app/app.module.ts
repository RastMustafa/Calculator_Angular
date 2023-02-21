import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ScreenComponent } from './screen/screen.component';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { OptionsComponent } from './screen/options/options.component';
import { ButtonListenerDirective } from './directives/buttonListener.directive';
import { OperationEvaluter } from './services/operationEvaluter.service';
import { LightDarkMode } from './services/lightDarkMode.service';
@NgModule({
  declarations: [
    AppComponent,
    ScreenComponent,
    KeyboardComponent,
    OptionsComponent,
    ButtonListenerDirective,
  ],
  imports: [BrowserModule],
  providers: [OperationEvaluter, LightDarkMode],
  bootstrap: [AppComponent],
})
export class AppModule {}
