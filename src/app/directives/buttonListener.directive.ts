import { Directive, HostListener, OnInit } from '@angular/core';
import { OperationEvaluter } from '../services/operationEvaluter.service';
@Directive({
  selector: '[buttonDirective]',
})
export class ButtonListenerDirective implements OnInit {
  constructor(private operationEvaluter: OperationEvaluter) {}

  result: any;
  num: number | undefined;
  op: string = '';
  @HostListener('click', ['$event.target.outerText']) onClick(value: string) {
    try {
      if (parseInt(value) || value === '0' || value === '00') {
        this.operationEvaluter.operationString =
          this.operationEvaluter.operationString + value;
        this.operationEvaluter.updateState.emit();
      } else {
        if (value === '×') value = '*';
        if (value === '÷') value = '/';
        if (value === '+/-') {
          this.operationEvaluter.operationString =
            '-1*' + this.operationEvaluter.operationString + ' ';
          this.operationEvaluter.updateState.emit();
        } else {
          this.operationEvaluter.operationString =
            this.operationEvaluter.operationString + ' ' + value + ' ';
          this.operationEvaluter.updateState.emit();
        }
      }
    } catch (err) {
      this.operationEvaluter.errorMsg = 'Enter a valid expression';
      this.operationEvaluter.errorHangler.emit();
    }
  }

  ngOnInit(): void {}
}
