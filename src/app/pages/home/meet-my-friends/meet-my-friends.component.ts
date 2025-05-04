import { Component, ElementRef, ViewChild } from '@angular/core';
import { MateriallistModule } from '../../../shared/materiallist/materiallist.module';

@Component({
  selector: 'app-meet-my-friends',
  imports: [MateriallistModule],
  templateUrl: './meet-my-friends.component.html',
  styleUrl: './meet-my-friends.component.scss'
})
export class MeetMyFriendsComponent {
  @ViewChild('carousel', { static: false }) carousel!: ElementRef;

  atStart = true;
  atEnd = false;

  friendsList = [
    {
      name: 'Govind Kumar',
      description: 'Sr. Software Engineer',
      image: '/assets/images/global/govind.png',
      company:"Redmil Business Mall",
      color:'#FF33A1',
      link: 'https://www.linkedin.com/in/bal-govind-b000bb158/'
    },
    {
      name: 'Rishi Singh',
      description: 'Sr. Software Engineer',
      image: '/assets/images/global/rishi.png',
      company:"Redmil Business Mall",
      color:'#FF33A1',
      link: 'https://www.linkedin.com/in/rishi-singh-a09b15229/'
    }, {
      name: 'Rohan Vishwakarma',
      description: 'Business Manager',
      image: '/assets/images/global/rohan.jpg',
      company:"Redmil Business Mall",
      color:'#FF33A1',
      link: 'https://www.linkedin.com/in/rohan-vishwakarma-4095a1218/'
    },
    {
      name: 'Prashant Yadav',
      description: 'Accounting and Financials',
      image: '/assets/images/global/prashant.png',
      company:"Redmil Business Mall",
      color:'#FF33A1',
      link: 'https://www.linkedin.com/in/prashant-yadav-yd01998/'
    },
    {
      name: 'Mutawakkil Shahid',
      description: 'Graphic Designer',
      image: '/assets/images/global/mutawakkil.png',
      company:"Redmil Business Mall",
      color:'#FF33A1',
      link: 'https://www.linkedin.com/in/mutawakkil-shahid-b7140b208/'
    },
    {
      name: 'Vishal Tiwari',
      description: 'Backend Developer',
      image: '/assets/images/global/vishals.jpg',
      company:"Webconvoy Pvt Ltd.",
      color:'#FF5733',
      link: 'https://www.linkedin.com/in/vishal-tiwari311/'
    },
    {
      name: 'Harshit',
      description: 'MERN Stack Developer',
      image: '/assets/images/global/harshit.png',
      company:"Webconvoy Pvt Ltd.",
      color:'#FF5733',
      link: 'https://www.linkedin.com/in/harshit-dhiman/'
    },
    {
      name: 'Bachchu Singh',
      description: 'Leader & Mentor',
      image: '/assets/images/global/bachchu.jpg',
      company:"Caria Electronics",
      color:'#3357FF',
      link: 'https://www.instagram.com/sohit5285/'
    },
    {
      name: 'Ajeet Singh',
      description: 'Mechanical Engineer',
      image: '/assets/images/global/ajeet.png',
      company:"Caria Electronics",
      color:'#3357FF',
      link: 'https://www.instagram.com/__singh_aj/'
    }
  ];

  ngAfterViewInit() {
    this.checkScrollPosition();
  }
  
  onScroll() {
    this.checkScrollPosition();
  }
  
  scrollLeft() {
    const el = this.carousel.nativeElement;
    el.scrollBy({ left: -el.offsetWidth, behavior: 'smooth' });
    setTimeout(() => this.checkScrollPosition(), 300);
  }
  
  scrollRight() {
    const el = this.carousel.nativeElement;
    el.scrollBy({ left: el.offsetWidth, behavior: 'smooth' });
    setTimeout(() => this.checkScrollPosition(), 300);
  }
  
  checkScrollPosition() {
    const el = this.carousel.nativeElement;
    this.atStart = el.scrollLeft === 0;
    this.atEnd = el.scrollLeft + el.offsetWidth >= el.scrollWidth - 1;
  }
}
