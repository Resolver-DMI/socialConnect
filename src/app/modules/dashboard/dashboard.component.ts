import { LoaderService } from './../../shared/loader/loader.service';
import { Component, OnInit } from '@angular/core';
import { NotifyService } from '../../shared/broadcast/notify.service';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
	isdashboard: boolean;
	selectedCompoent: string;

	tabActive = function(e){
		console.log(e);
	}


  	constructor(private notifyService: NotifyService, private load : LoaderService) { }
	ngOnInit() {

		this.notifyService.dashboardStatus.subscribe((val: boolean) => {
			this.isdashboard = val;
		});

		this.notifyService.dashboardText.subscribe((val: string) => {
			this.selectedCompoent = val;
		});
		this.load.displayLoader(false);
	}
}
