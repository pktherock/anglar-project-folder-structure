import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {
    // Check if user is already logged in, and if so, redirect to the home page
    if (true) {
      // ! call function to check
      this.router.navigate(['/dashboard']); // Redirect to the home page
    }
  }
}
