import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { SearchAccoService } from '../search-acco/search-acco.service'

@Component({
  selector: 'app-create-acco',
  templateUrl: './create-acco.component.html',
  styleUrls: ['./create-acco.component.scss']
})
export class CreateAccoComponent implements OnInit {

  constructor(private _http : SearchAccoService) { }
  submitForm(e){
    let data = {
      "eID":e.target.elements[0].value,
      "Name":e.target.elements[1].value,
      "CNo":e.target.elements[2].value,
      "addr":e.target.elements[6].value,
      "bud":e.target.elements[7].value,
      "avfrom":e.target.elements[5].value,
      "fcatgory":e.target.elements[3].value,
      "aroom":e.target.elements[4].value
    }
    this._http.postAccoList(data);
    
  }
  ngOnInit() {
  }

}
