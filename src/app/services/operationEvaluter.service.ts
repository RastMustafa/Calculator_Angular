import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class OperationEvaluter {
  updateState: EventEmitter<any> = new EventEmitter();
  clear: EventEmitter<any> = new EventEmitter();
  errorHangler: EventEmitter<any> = new EventEmitter();
  answer: number = 0;
  operationString: string = '';
  errorMsg = '';
}
