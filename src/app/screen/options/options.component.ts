import { Component, OnInit } from '@angular/core';
import { OperationEvaluter } from 'src/app/services/operationEvaluter.service';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.less'],
})
export class OptionsComponent implements OnInit {
  openMenu: boolean = false;
  opHistory: string[] = [];
  constructor(private operationEvaluter: OperationEvaluter) {}

  ngOnInit(): void {}
  showHistory() {
    this.opHistory = this.operationEvaluter.clacHistory;
    this.openMenu = !this.openMenu;
  }
  getHistory(item: string) {
    console.log(item);
    this.operationEvaluter.operationString = item;
  }
}
