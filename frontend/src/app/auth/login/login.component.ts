import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {
  AuthService,
  FacebookLoginProvider,
  GoogleLoginProvider
} from 'angular-6-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private socialAuthService: AuthService) { }

  ngOnInit() {
  }


  public socialSignIn() {
    let socialPlatformProvider;
    socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;

    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(" sign in data : ", userData);
        this.router.navigate(['/chat/dashboard'])
      }
    );
  }

}
