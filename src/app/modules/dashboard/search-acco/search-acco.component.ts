import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../../../shared/loader/loader.service';
import { NotifyService } from '../../../shared/broadcast/notify.service';
import { Router } from '@angular/router';
import { SearchAccoService } from './search-acco.service'

@Component({
  selector: 'app-search-acco',
  templateUrl: './search-acco.component.html',
  styleUrls: ['./search-acco.component.scss']
})
export class SearchAccoComponent implements OnInit {
  public rdata;
  public data;

  constructor(private _root:SearchAccoService) {
    this._root.getAccoList().subscribe(res => {
      this.rdata = res;
      console.log(res);
      this.data = this.rdata;
    })
   }

  ngOnInit() {
  }

}
