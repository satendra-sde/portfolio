import { Component } from '@angular/core';
import { MateriallistModule } from '../../../shared/materiallist/materiallist.module';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { TalkToMeComponent } from '../../../shared/components/talk-to-me/talk-to-me.component';

@Component({
  selector: 'app-menu-card',
  imports: [MateriallistModule],
  templateUrl: './menu-card.component.html',
  styleUrl: './menu-card.component.scss'
})
export class MenuCardComponent {
  CloseOpen: boolean = false;
  isLoggedIn: boolean = false;
  isMobileVisible: boolean = false;
  isDropdownOpen = false; // Dropdown state
  UserData: any = sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user')!) : null;

  constructor(
    private dialog: MatDialog,
    private router:Router) {
  }

  isVisible:boolean = true;
  currentUrl: string = '';

  ngOnInit(): void {
    this.currentUrl = this.router.url;
    if(this.currentUrl ==="/montor"){this.isVisible = false;}
    
    // Check if the user is logged in by checking the token in sessionStorage
    sessionStorage.getItem('token') ? this.isLoggedIn = true : this.isLoggedIn = false;
  }


  // Method to handle the click event on the menu item
  goToAdmin(){
    this.router.navigate(['/admin/users']);
  }


  mobileClick(){
    this.isMobileVisible = true;
  }
  mobileclose(){
    this.isMobileVisible = false;
  }

  talkToMe(){
    const dialogRef = this.dialog.open(TalkToMeComponent, {
      width: '500px',  // Dialog width
      disableClose: true // Prevent closing on background click
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog closed', result);
    });
  }
}
