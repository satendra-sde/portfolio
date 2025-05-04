import { Component } from '@angular/core';
import { MenuCardComponent } from '../pages/home/menu-card/menu-card.component';
import { FooterCardComponent } from '../pages/home/footer-card/footer-card.component';
import { BannerCardComponent } from '../pages/home/banner-card/banner-card.component';
import { TestimonialsCardComponent } from '../pages/home/testimonials-card/testimonials-card.component';
import { ExperienceCardComponent } from '../pages/home/experience-card/experience-card.component';
import { MeetMyFriendsComponent } from "../pages/home/meet-my-friends/meet-my-friends.component";
import { ProjectsCardComponent } from "../pages/home/projects-card/projects-card.component";

@Component({
  selector: 'app-index-page',
  imports: [
    MenuCardComponent,
    FooterCardComponent,
    BannerCardComponent,
    TestimonialsCardComponent,
    ExperienceCardComponent,
    MeetMyFriendsComponent,
    ProjectsCardComponent
],
  templateUrl: './index-page.component.html',
  styleUrl: './index-page.component.scss',
})
export class IndexPageComponent {}
