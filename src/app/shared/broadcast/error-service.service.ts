import { Injectable } from '@angular/core';
import { BehaviorSubject  } from 'rxjs/BehaviorSubject';

@Injectable()
export class ErrorServiceService {
  public errorMessages: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  constructor() {}
  showError(value: any[]) {
    this.errorMessages.next(value);
  }

}
