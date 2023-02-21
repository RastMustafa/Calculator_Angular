import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class LightDarkMode {
  updateSelectedMode: EventEmitter<any> = new EventEmitter();

  selectedMode: boolean = false; // false >> light
}
