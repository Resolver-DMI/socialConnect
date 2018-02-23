import { OnInit, Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoaderService } from './shared/loader/loader.service';
import { ErrorServiceService } from './shared/broadcast/error-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  loading: boolean;
  errMessages:any[] = [];
  constructor(public http: HttpClient, public loaderService:  LoaderService,
    public errorService:  ErrorServiceService) {
  }
  ngOnInit() {
    this.loaderService.loaderStatus.subscribe((val: boolean) => {
      this.loading = val;
    });

    this.errorService.errorMessages.subscribe((val) => {
      //debugger;
      if(val.length){
        console.log(val)
        this.errMessages.push({severity:'error', summary:'Info Message', detail: val[0].details});
      }
      
    });

  }
}
