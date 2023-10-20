import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // ngOnInit(){
  //   const scrollToSection = (event: Event) => {
  //     event.preventDefault();
  //     const target = (event.target as HTMLElement).getAttribute('data-scroll-to');
  //     const section = document.getElementById(target!);
  //     section!.scrollIntoView({ behavior: 'smooth' });
  //   };

  //   document.addEventListener('DOMContentLoaded', () => {
  //     const scrollLinks = document.querySelectorAll('a[data-scroll-to]');
  //     scrollLinks.forEach((link) => {
  //       link.addEventListener('click', scrollToSection);
  //     });
  //   });
  // }

}
