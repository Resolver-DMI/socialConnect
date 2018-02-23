import { Injectable } from '@angular/core';
import { BehaviorSubject  } from 'rxjs/BehaviorSubject';

@Injectable()
export class NotifyService {
  public dashboardStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public errorStatus: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  
  public dashboardText: BehaviorSubject<string> = new BehaviorSubject<string>('');
  constructor() { }
  notifyForDashboard(value: boolean, text: string ) {
    this.dashboardStatus.next(value);
    this.dashboardText.next(text);
  }
 
  notifyForError(text: any[] ){
    this.errorStatus.next(text);
  }

}
