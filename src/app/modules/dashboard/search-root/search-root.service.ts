import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchRootService {

  constructor(private _http: HttpClient) { }

  

	//public _url:string = "../../../../assets/data/search-root.json";
	public _url:string = "http://localhost:54147/api/availableroutes";
	

	getRootList() {
		return this._http.get(this._url)
		.map(result => result);
	}

	postRootList(data) {
		this._http.post(this._url, {data})
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
