import { Component, OnInit } from '@angular/core';
import { OperationEvaluter } from 'src/app/services/operationEvaluter.service';
import { LightDarkMode } from 'src/app/services/lightDarkMode.service';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.less'],
})
export class OptionsComponent implements OnInit {
  openMenu: boolean = false;
  opHistory: string[] = [];
  selectedMode: boolean = false;
  constructor(
    private operationEvaluter: OperationEvaluter,
    private lightDarkMode: LightDarkMode
  ) {}

  ngOnInit(): void {
    this.lightDarkMode.updateSelectedMode.subscribe(() => {
      this.selectedMode = this.lightDarkMode.selectedMode;
    });
  }
  showHistory() {
    this.opHistory = this.operationEvaluter.clacHistory;
    this.openMenu = !this.openMenu;
  }
  getHistory(item: string) {
    console.log(item);
    this.operationEvaluter.operationString = item;
  }
  onModeChange() {
    this.lightDarkMode.selectedMode = !this.lightDarkMode.selectedMode;
    this.lightDarkMode.updateSelectedMode.emit();
  }
}
