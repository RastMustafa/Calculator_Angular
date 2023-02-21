import { Component, OnInit } from '@angular/core';
import { OperationEvaluter } from '../services/operationEvaluter.service';
import { LightDarkMode } from '../services/lightDarkMode.service';
@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.less'],
})
export class ScreenComponent implements OnInit {
  displayedOperation: string = '';
  displayedAnswer: number = 0;
  errorMsg: string = '';
  selectedMode: boolean = false;
  constructor(
    private operationEvaluter: OperationEvaluter,
    private lightDarkMode: LightDarkMode
  ) {}

  ngOnInit(): void {
    this.lightDarkMode.updateSelectedMode.subscribe(() => {
      this.selectedMode = this.lightDarkMode.selectedMode;
    });
    try {
      this.operationEvaluter.updateState.subscribe((e: any) => {
        this.displayedOperation = this.operationEvaluter.operationString;
        this.displayedAnswer = this.operationEvaluter.answer;
      });
      this.operationEvaluter.clear.subscribe(() => {
        this.displayedAnswer = 0;
        this.errorMsg = '';
      });
      this.operationEvaluter.errorHangler.subscribe(() => {
        console.log('first');
        this.displayedOperation = '';
        this.errorMsg = 'Enter a valid expression';
      });
    } catch (err) {
      console.log(err);
      this.errorMsg = 'Enter a valid expression';
      this.operationEvaluter.operationString = '';
    }
  }
}
