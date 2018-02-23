import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }
  isdashboard;
  logOut = function(){
	sessionStorage.removeItem('isLoggedin');
	this.router.navigate(['login']);
  }
  ngOnInit() {
    
    if (sessionStorage.getItem('isLoggedin')) {
          this.isdashboard = true;
    }else{
        this.isdashboard = false;
    }
  
  }

}
