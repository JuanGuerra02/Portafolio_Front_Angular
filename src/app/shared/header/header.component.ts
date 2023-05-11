import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

//Aimacion nav
navIsFixed: boolean = false;
@HostListener('window:scroll', ['$event'])
onWindowScroll(e: Event) {
  if (window.pageYOffset > 0) {
    this.navIsFixed = true;
  } else {
    this.navIsFixed = false;
  }
}
}
