import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { MateriallistModule } from '../../../shared/materiallist/materiallist.module';

@Component({
  selector: 'app-testimonials-card',
  imports: [MateriallistModule],
  templateUrl: './testimonials-card.component.html',
  styleUrl: './testimonials-card.component.scss'
})
export class TestimonialsCardComponent {

  testimonials = [
    {
      name: 'Sagar Raj Singhal',
      title: 'Founder & Co-founder Redmil & Better Bot Tech',
      message: `We were amazed by the professionalism and expertise of the team. The results exceeded our expectations, and our project was completed ahead of schedule. We highly recommend their services to anyone looking for top-notch quality...`,
      leftImage: '/assets/images/whoiam/satendra_1.jpeg',
      thumbnail: 'https://digital-marketing-gray.vercel.app/assets/image/home/sate.jpeg'
    },
    {
      name: 'Apoorv Mehra',
      title: 'CA Redmil Business Mall',
      message: `From start to finish, the team was incredibly professional and responsive. Everything I needed was delivered on time and within budget. Their expertise and customer-focused approach made the entire process smooth and stress-free...`,
      leftImage: 'https://satendra-coder.vercel.app/assets/images/montor/rishi.png',
      thumbnail: 'https://satendra-coder.vercel.app/assets/images/montor/rishi.png'
    },
    {
      name: 'Gaurav Singh',
      title: 'Co-Founder Webconvoy Pvt. Ltd.',
      message: `Working with them has been a game-changer for our business. Their attention to detail and commitment to excellence are unparalleled. We couldn't be happier with the results and look forward to future collaborations...`,
      leftImage: '/assets/images/global/testimonials/gaurav.jpeg'
    },
    {
      name: 'Edward Hawley',
      title: 'CTO XYZ Inc.',
      message: `Their dedication and skill turned our vision into reality. Not only was the work flawless, but it was also delivered with impressive speed and precision...`,
      leftImage: 'assets/client3-left.jpg',
      thumbnail: 'assets/client3-thumb.jpg'
    },
    {
      name: 'Satendra Rajput',
      title: 'CTO Satendra Coder.',
      message: `II combine technical expertise with strong problem-solving skills and a focus on user-centric design. I consistently deliver high-quality results ahead of deadlines, taking full ownership to align projects with business goals. Passionate, reliable, and driven — I’m ready to add value from day one...`,
      leftImage: 'assets/client3-left.jpg',
      thumbnail: 'assets/client3-thumb.jpg'
    }
  ];

  currentIndex = 0;

  @ViewChildren('thumbRefss') thumbRefss!: QueryList<ElementRef>;

  ngAfterViewInit() {
    this.scrollToActiveThumbnail(); // ensure initial one is in view
  }

  setIndex(index: number) {
    this.currentIndex = index;
    this.scrollToActiveThumbnail();
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
    this.scrollToActiveThumbnail();
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
    this.scrollToActiveThumbnail();
  }

  scrollToActiveThumbnail() {
    const activeEl = this.thumbRefss.get(this.currentIndex);
    if (activeEl) {
      activeEl.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center' // Scrolls horizontally to center
      });
    }
  }
}
