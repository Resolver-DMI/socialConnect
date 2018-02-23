import { Component, OnInit } from '@angular/core';
import { NotifyService } from '../../../shared/broadcast/notify.service';
import { Chart } from 'chart.js';
import { LoaderService } from '../../../shared/loader/loader.service';
@Component({
  	selector: 'app-all-details',
  	templateUrl: './all-details.component.html',
  	styleUrls: ['./all-details.component.scss']
})
export class AllDetailsComponent implements OnInit {
	// chart declared
	allPatientChart = [];
  	relievingDosesChart = [];
	attackCountChart = [];
	  
  	constructor(private notifyService: NotifyService) {
    	this.notifyService.notifyForDashboard(false,'allpatients');       
	   }

	ngOnInit() {	}

}
