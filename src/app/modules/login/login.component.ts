import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { 
    sessionStorage.removeItem('isLoggedin');
  }
  
loginUser(e){
	let username = e.target.elements[0].value;
	let password = e.target.elements[1].value;
	console.log(username + ' ' +password);
	if( username == "330335" && password == "330335"){
    sessionStorage.setItem('isLoggedin','true');
		this.router.navigate(['dashboard']);
	}
}

  ngOnInit() {
  }

}
