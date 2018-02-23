import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchAccoService {

  constructor(private _http: HttpClient) { }

	// public _url:string = "../../../../assets/data/search-aco.json";
	public _url:string = "http://localhost:54147/api/accomodations";

	getAccoList() {
		return this._http.get(this._url)
		.map(result => result);
	}

	postAccoList(data) {
		this._http.post(this._url, data)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log("Error occured");
        }
	  );
	  
	  
	}
}
