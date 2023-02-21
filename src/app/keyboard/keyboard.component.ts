import { Component, EventEmitter, OnInit } from '@angular/core';
import { OperationEvaluter } from '../services/operationEvaluter.service';
@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.less'],
})
export class KeyboardComponent implements OnInit {
  constructor(private operationEvaluter: OperationEvaluter) {}

  ngOnInit(): void {}
  evalAnswer() {
    console.log(this.operationEvaluter.clacHistory);

    try {
      if (
        this.operationEvaluter.answer !== 0 &&
        parseInt(this.operationEvaluter.operationString[0])
      ) {
        this.operationEvaluter.answer = eval(
          this.operationEvaluter.operationString
        );
      } else {
        let temp: any =
          ' ' +
          String(
            this.operationEvaluter.answer === 0
              ? ' '
              : this.operationEvaluter.answer
          ) +
          ' ' +
          this.operationEvaluter.operationString;
        this.operationEvaluter.answer = eval(temp);
        this.operationEvaluter.clacHistory.push(temp);
      }

      this.operationEvaluter.updateState.emit();
      this.operationEvaluter.operationString = '';
    } catch (err) {
      this.operationEvaluter.errorMsg = 'Enter a valid expression';
      this.operationEvaluter.clear.emit();
      this.operationEvaluter.errorHangler.emit();
    }
  }
  onClear() {
    this.operationEvaluter.operationString = '';
    this.operationEvaluter.answer = 0;
    this.operationEvaluter.errorMsg = '';
    this.operationEvaluter.clear.emit();
  }
}
