import { Component, OnInit } from '@angular/core';
import { NotifyService } from '../../../shared/broadcast/notify.service';
import { LoaderService } from '../../../shared/index';

@Component({
	selector: 'app-navigation',
	templateUrl: './navigation.component.html',
	styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

	isdashboard: boolean = false;
	selectedCompoent: string = '';
	totalPcount:any = '';
	totalPasthma:any = '';
	totalPanaphylaxis:any= '';
	dresult:any;

  	constructor(private loaderService:LoaderService,private notifyService: NotifyService) { 

		this.loaderService.displayLoader(true);
		this.notifyService.dashboardStatus.subscribe((val: boolean) => {
			this.isdashboard = val;
		});
	
		this.notifyService.dashboardText.subscribe((val: string) => {
			this.selectedCompoent = val;
		});

		
	  }

	ngOnInit() {
		
	}

}
