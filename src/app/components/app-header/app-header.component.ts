import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent {
  constructor(
    private userService: UserService,
    private router: Router
  ){}
  onLogout() {
    this.userService.logout()
    this.router.navigateByUrl('/')

  }

}
