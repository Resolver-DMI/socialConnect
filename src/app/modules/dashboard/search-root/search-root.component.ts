import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../../../shared/loader/loader.service';
import { NotifyService } from '../../../shared/broadcast/notify.service';
import { Router } from '@angular/router';
import { SearchRootService } from './search-root.service'



@Component({
  selector: 'app-search-root',
  templateUrl: './search-root.component.html',
  styleUrls: ['./search-root.component.scss']
})
export class SearchRootComponent implements OnInit {
  public rdata;
  public data;
  constructor(private _root:SearchRootService) { 
    
    this._root.getRootList().subscribe(res => {
      this.rdata = res;
      console.log(res);
      this.data = this.rdata;
    })
  }
  

  ngOnInit() {
  }

}
