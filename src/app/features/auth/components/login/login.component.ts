import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    // Check if user is already logged in, and if so, redirect to the home page
    if (this.authService.isLoggedIn) {
      // ! call function to check
      this.router.navigate(['dashboard']); // Redirect to the home page
    }
  }
}
