import { Component, ElementRef, ViewChild } from '@angular/core';
import { SThemeService } from '../../../core/service/theme/s-theme.service';
import { Router } from '@angular/router';
import { MateriallistModule } from '../../../shared/materiallist/materiallist.module';

@Component({
  selector: 'app-footer-card',
  imports: [MateriallistModule],
  templateUrl: './footer-card.component.html',
  styleUrl: './footer-card.component.scss'
})
export class FooterCardComponent {

  isVisible:boolean = true;
  currentUrl: string = '';
  isDarkTheme: boolean = true;
  UserData: any = sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user')!) : null;
  constructor( 
    private themeService: SThemeService,
    private router:Router
  ){}

  ngOnInit(): void {
    this.currentUrl = this.router.url;
    console.log(this.currentUrl);
    if(this.currentUrl ==="/explore"
      || this.currentUrl ==="/skills-assessments" || this.currentUrl ==="/tutorial-library"
      || this.currentUrl ==="/courses" || this.currentUrl ==="/online-interview"
      || this.currentUrl ==="/career-paths" || this.currentUrl ==="/quizzes"
      || this.currentUrl ==="/problem-solving" || this.currentUrl ==="/compiler"
      || this.currentUrl ==="/whoiam/projects" || this.currentUrl ==="/compiler"
    ){this.isVisible = false;}

    this.isDarkTheme = this.themeService.getCurrentTheme();
  }
  
  isDarkModeMethod() {
    this.themeService.toggleTheme();
    this.isDarkTheme = this.themeService.getCurrentTheme();
  }

  showMenu = false;

  @ViewChild('footerRef') footerElement!: ElementRef;

  ngAfterViewInit(): void {
    const footer = this.footerElement?.nativeElement;

    footer?.addEventListener('mousemove', (e: MouseEvent) => {
      const bubble = document.createElement('div');
      console.log('Bubble created!');
      
      bubble.classList.add('bubble');
      bubble.style.position = 'absolute';
      bubble.style.borderRadius = '50%';
      bubble.style.opacity = '0.7'; // Set opacity for the bubble
      bubble.style.pointerEvents = 'none'; // Prevent mouse events on the bubble
      bubble.style.transition = 'transform 1s ease-out, opacity 1s ease-out'; // Animation for bubble

      // Set random size for bubble
      const size = Math.random() * (30 - 10) + 10; // Random size between 10px and 30px
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;

      // Set random background color
      const colors = ['#00c6ff', '#ff0080', '#ffbf00', '#00ff88', '#ff5e5e'];
      bubble.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

      // Position the bubble very close to the cursor (1-10px offset)
      const randomOffsetX = Math.random() * 10 - 5;  // Random small offset for X (-5px to +5px)
      const randomOffsetY = Math.random() * 10 - 5;  // Random small offset for Y (-5px to +5px)

      // Set the position of the bubble near the cursor
      bubble.style.left = `${e.clientX + randomOffsetX}px`;
      bubble.style.top = `${e.clientY + randomOffsetY}px`;

      // Add the bubble to the footer
      footer.appendChild(bubble);

      // Remove bubble after animation ends
      setTimeout(() => {
        bubble.remove();
      }, 1000); // Matches the duration of animation
    });
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
  
  performAction(option: string) {
    console.log('Clicked button:', option);
  }
}
