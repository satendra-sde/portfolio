import { Component } from '@angular/core';
import { MateriallistModule } from '../../../shared/materiallist/materiallist.module';

@Component({
  selector: 'app-skills-card',
  imports: [MateriallistModule],
  templateUrl: './skills-card.component.html',
  styleUrl: './skills-card.component.scss'
})
export class SkillsCardComponent {
  skills = [
    { name: 'HTML', image: '/assets/images/whoiam/Html-modified.png', description: 'HTML is the standard markup language for creating web pages.' },
    { name: 'CSS', image: '/assets/images/whoiam/css-modified.png', description: 'CSS is used for describing the presentation of a document written in HTML.' },
    { name: 'JavaScript', image: '/assets/images/whoiam/js-modified.png', description: 'JavaScript is a versatile programming language for web development.' },
    { name: 'TypeScript', image: '/assets/images/whoiam/ts-modified.png', description: 'TypeScript is a strongly typed superset of JavaScript.' },
    { name: 'Angular', image: '/assets/images/whoiam/Angular-modified.png', description: 'Angular is a platform for building mobile and desktop web applications.' },
    { name: 'Java', image: '/assets/images/whoiam/java-modified.png', description: 'Java is a high-level, class-based, object-oriented programming language.' },
    { name: 'Spring Boot', image: '/assets/images/whoiam/Spring Boot-modified.png', description: 'Spring Boot is a framework for building production-ready Java applications.' },
    { name: 'MySQL', image: '/assets/images/whoiam/mysql-modified.png', description: 'MySQL is a popular open-source relational database management system.' },
    // { name: 'Node.js', image: '/assets/images/whoiam/Nodejs-modified.png', description: 'Node.js is a JavaScript runtime built on Chrome\'s V8 JavaScript engine.' },
    // { name: 'Express', image: '/assets/images/whoiam/express-modified.png', description: 'Express is a minimal and flexible Node.js web application framework.' },
    // { name: 'MongoDB', image: '/assets/images/whoiam/mongodb-modified.png', description: 'MongoDB is a document-oriented NoSQL database used for high volume data storage.' }
  ];

  selectedSkill: any = this.skills[0]; // Default to the first skill

  onSkillClick(skill: any) {
    this.selectedSkill = skill;
  }

}
