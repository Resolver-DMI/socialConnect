import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SearchRootService } from '../search-root/search-root.service'

@Component({
  selector: 'app-create-root',
  templateUrl: './create-root.component.html',
  styleUrls: ['./create-root.component.scss']
})
export class CreateRootComponent implements OnInit {

  constructor(public _http : SearchRootService) { }

  submitForm(e){

    let data = {
      "EID":e.target.elements[0].value,
      "Name":e.target.elements[1].value,
      "CNo":e.target.elements[2].value,
      "Des":e.target.elements[5].value,
      "Seat":e.target.elements[4].value,
      "Source":e.target.elements[3].value,
      "rdetail":e.target.elements[6].value
    }
    this._http.postRootList(data);
  }

  ngOnInit() {
  }

}
