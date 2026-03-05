import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { UserStateService } from '../user-state/user-state.service';

@Component({
  selector: 'app-navigation',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
  private readonly userState = inject(UserStateService);

  readonly isLoggedIn = this.userState.isLoggedIn;

  protected logout() {
    this.userState.logout();
  }

  protected login() {
    this.userState.login();
  }
}
