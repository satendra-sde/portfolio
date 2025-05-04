import { Component } from '@angular/core';
import { MateriallistModule } from '../../../shared/materiallist/materiallist.module';

@Component({
  selector: 'app-experience-card',
  imports: [MateriallistModule],
  templateUrl: './experience-card.component.html',
  styleUrl: './experience-card.component.scss'
})
export class ExperienceCardComponent {

  UserData: any = sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user')!) : null;
  companies:any = [
    {
      name: 'Redmil Business (Rejoining)',
      icon: '/assets/images/whoiam/redmil.jpeg',
      duration: 'Sep 2024 - Present',
      degination: "Full Stack Developer",
      location: 'Sector 142 Noida, Uttar Pradesh · On-site',
      points: [
        'White Labeled NextGen LMS',
        'Platform for educators and creators',
        'Custom branding & analytics for each creator'
      ]
    },
    {
      name: 'WebConvoy Pvt Ltd',
      icon: '/assets/images/whoiam/webconvoy.jpeg',
      duration: 'May 2024 - Aug 2024',
      degination: "Angular Developer",
      location: 'H-159, Sector 63, Noida, Uttar Pradesh, India · On-site',
      points: [
        'AR/VR integration for education',
        'Built immersive classroom experiences',
        'Team management and module scaling'
      ]
    },
    {
      name: 'Redmil Business Mall',
      icon: '/assets/images/whoiam/redmil.jpeg',
      duration: 'Apr 2022 - Apr 2024',
      degination: "Angular Developer",
      location: 'Sector 62 Noida, Uttar Pradesh, India · On-site',
      points: [
        'Voice-enabled automation',
        'Customer engagement solutions',
        'Handled backend integration and front-end UI'
      ]
    },
    {
      name: 'Caria Electronics',
      icon: 'assets/icons/emitrr.png',
      duration: 'Sep 2021 - Mar 2022',
      degination: "Executive Assistant",
      location: 'B18, Block B, Sector 85, Noida, Uttar Pradesh',
      points: [
        'Voice-enabled automation',
        'Customer engagement solutions',
        'Handled backend integration and front-end UI'
      ]
    },
  ];

  selectedCompany = this.companies[0];

  selectCompany(company: any) {
    this.selectedCompany = company;
  }
}
