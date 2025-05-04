import { Component } from '@angular/core';

@Component({
  selector: 'app-banner-card',
  imports: [],
  templateUrl: './banner-card.component.html',
  styleUrl: './banner-card.component.scss'
})
export class BannerCardComponent {
  UserData: any = sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user')!) : null;
}
