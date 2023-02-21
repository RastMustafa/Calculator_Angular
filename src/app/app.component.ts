import { Component, OnInit } from '@angular/core';
import { LightDarkMode } from './services/lightDarkMode.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent implements OnInit {
  constructor(private lightDarkMode: LightDarkMode) {}
  selectedMode: boolean = false;
  ngOnInit(): void {
    this.lightDarkMode.updateSelectedMode.subscribe(() => {
      this.selectedMode = this.lightDarkMode.selectedMode;
    });
  }
}
