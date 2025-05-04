import { Component, ElementRef, ViewChild } from '@angular/core';
import { MateriallistModule } from '../../../shared/materiallist/materiallist.module';
import { Router } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-projects-card',
  imports: [MateriallistModule],
  templateUrl: './projects-card.component.html',
  styleUrl: './projects-card.component.scss'
})
export class ProjectsCardComponent {
  constructor(
    private _router: Router,
  ) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }

  compilers:any = [
    {
      name: 'Fintech',
      img: '/assets/icons/program/python.svg',
      category: 'Redmil',
      baseUrl: '/compiler/python-compiler',
      title: 'Python Compiler: Fast, Simple, and Powerful',
      keywords: ['Python', 'Compiler', 'Interpreter', 'Scripting', 'Language'],
      description: 'Python is a high-level, interpreted, interactive and object-oriented scripting language. Python is designed to be highly readable. It uses English keywords frequently where as other languages use punctuation, and it has fewer syntactical constructions than other languages.'
    },
  
    {
      name: 'HDFC Loan',
      img: "/assets/icons/program/r.svg",
      category: 'Redmil',
      baseUrl: '/compiler/r-compiler',
      title: 'R Compiler: Fast and Efficient R Code Execution',
      keywords: ['R', 'Compiler', 'Interpreter', 'Scripting', 'Language'],
      description: 'R is a programming language and free software environment for statistical computing and graphics supported by the R Foundation for Statistical Computing. The R language is widely used among statisticians and data miners for developing statistical software and data analysis.'
    },
  
    {
      name: 'PPF(Print protection film)',
      img: "/assets/icons/web/html.svg",
      category: 'Webconvoy',
      baseUrl: '/compiler/html-css-compiler',
      title: 'HTML/CSS Compiler: Build and Preview in Real-Time',
      keywords: ['HTML', 'CSS', 'Compiler', 'Web', 'Development'],
      description: 'HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content. CSS (Cascading Style Sheets) is a style sheet language used for describing the presentation of a document written in HTML.'
    },
  
    {
      name: 'Poker9 Club',
      img: "/assets/icons/web/js.svg",
      category: 'Webconvoy',
      baseUrl: '/compiler/javascript-compiler',
      title: 'JavaScript Compiler: Write, Debug, and Execute Instantly',
      keywords: ['JavaScript', 'Compiler', 'Interpreter', 'Scripting', 'Language', 'Run', 'Debug', 'Code'],
      description: 'JavaScript is a lightweight, interpreted programming language. It is designed for creating network-centric applications. It is complimentary to and integrated with Java. JavaScript is very easy to implement because it is integrated with HTML. It is open and cross-platform.'
    },
  
    {
      name: 'SAAS & Utils Tools',
      img: "/assets/icons/program/java.svg",
      category: 'Fine Quick',
      baseUrl: '/compiler/java-compiler',
      title: 'Java Playground: Build, Test, and Debug in Real-Time',
      keywords: ['Java', 'Compiler', 'Interpreter', 'Programming', 'Language', 'Run', 'Debug', 'Code'],
      description: 'Java is a high-level programming language developed by Sun Microsystems. It was originally designed for developing programs for set-top boxes and handheld devices, but later became a popular choice for creating web applications.'
    },
  
    {
      name: 'Portfolio',
      img: "/assets/icons/program/c-file.svg",
      category: 'MySelf',
      baseUrl: "/compiler/c-file",
      title: 'C Compiler Pro: Efficient and Instant Coding',
      keywords: ['C', 'Compiler', 'Interpreter', 'Programming', 'Language', 'Run', 'Debug', 'Code'],
      description: 'C is a general-purpose, procedural computer programming language supporting structured programming, lexical variable scope, and recursion, with a static type system. By design, C provides constructs that map efficiently to typical machine instructions.'
    },

  ];

  categories = ['All', 'Redmil', 'Webconvoy', 'Fine Quick','MySelf']; // Categories list
  activeCategory = 'All'; // Default active category
  filteredCompilers = this.compilers; // Initially show all compilers

  // Function to filter compilers based on selected category
  filterCompilers(category: string) {
    if (category === 'All') {
      this.filteredCompilers = this.compilers;
      this.activeCategory = category;
      return;
    }
    this.activeCategory = category;
    this.filteredCompilers = this.compilers.filter((compiler: { category: string; }) => compiler.category === category);
  }

  openCompiler(compiler: any) {
    // Function to open compiler
    this._router.navigate([compiler.baseUrl],
      {
        state: { data: compiler },
      }
    );
  }

  // Track function for better performance
  trackCompiler(index: number, compiler: any) {
    return compiler.name;
  }



}