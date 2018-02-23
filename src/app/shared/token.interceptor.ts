import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import { LoaderService } from '../shared/loader/loader.service';
import 'rxjs/add/operator/finally';
import { ErrorServiceService } from '../shared/broadcast/error-service.service';

@Injectable()
export class TokenInterceptor implements  HttpInterceptor {
	pendingRequest = 0;
	index: number = 1;
	constructor(private loaderService: LoaderService,private errorService: ErrorServiceService) {
	}
	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
	this.loaderService.displayLoader(true);
		
	this.pendingRequest +=1;
	const _req =  req.clone({
	setHeaders: {
		'Authorization' : 'Basic cGF0aWVudGFkbTpETUlBZG0xbg=='
		}
	});
	return next.handle(_req).do(
		event => {
			// console.log(this.pendingRequest)
			// if ( this.pendingRequest < 0 ) {
			// 	 this.loaderService.displayLoader(false);
			// }else{
			// 	console.log("response back minus...")
				
			// }
		},
		err => {
			console.log(_req);
			let detail: string = (this.index++).toString() + ': Server Not Responding';
			this.errorService.showError([{details: detail}]);
			next.handle(_req);
		}).finally(() => {
			this.pendingRequest--;
			if(!this.pendingRequest){
				this.loaderService.displayLoader(false);
			}
			// ...
			/* Do something here when request is done. For example
			finish a spinning loader. */
		});;
	}
}
