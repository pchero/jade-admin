import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { JadeService } from '../@core/data/jade.service';

@Component({
  selector: 'ngx-jade-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private jService: JadeService, private route: Router) { }

  ngOnInit() {
  }

  signin_handler() {
    console.log("Login info. username: " + this.username + ", password: " + this.password);
    this.jService.login(this.username, this.password).subscribe(
      res => {
        const token = res.result.authtoken;

        // set authtoken
        this.jService.set_authtoken(token);

        // get info
        this.jService.init().subscribe(
          data => {
            if(data !== true) {
              console.log("Could not login correctly.");
              return;
            }

            console.log("Logged in.");

            // // move to main page
            // this.route.navigateByUrl('/');
            this.route.navigate(['/']);
          },
        );
      },
    );
  }
}
