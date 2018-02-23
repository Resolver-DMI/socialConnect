import { Injectable } from '@angular/core';
import { BehaviorSubject  } from 'rxjs/BehaviorSubject';
@Injectable()
export class LoaderService {
  public loaderStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor() {}
  displayLoader(value: boolean) {
    this.loaderStatus.next(value);
  }
}
