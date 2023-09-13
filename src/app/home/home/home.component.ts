import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  animatedText: string = '';
  currentIndex: number = 0;
  currentPhrase: string = '';
  typingSpeed: number = 150; 
  deletingSpeed: number = 100; 
  pauseBetweenPhrases: number = 500; 

  phrases: string[] = [
    'Desarrollador web',
    'Full Stack'
  ];

  constructor() { }

ngOnInit() {
  this.startAnimation();
}

startAnimation() {
  this.typePhrase();
}

typePhrase() {
  if (this.currentIndex >= this.phrases.length) {
    this.currentIndex = 0;
  }

  const currentPhrase = this.phrases[this.currentIndex];

  let currentIndex = 0;
  this.animatedText = '';
  this.currentPhrase = currentPhrase;

  const typingInterval = setInterval(() => {
    this.animatedText = currentPhrase.substring(0, currentIndex + 1);
    currentIndex++;

    if (currentIndex >= currentPhrase.length) {
      clearInterval(typingInterval);
      setTimeout(() => {
        this.deletePhrase();
      }, this.pauseBetweenPhrases);
    }
  }, this.typingSpeed);
}

deletePhrase() {
  const currentPhrase = this.currentPhrase;

  let currentIndex = currentPhrase.length;
  const deletingInterval = setInterval(() => {
    this.animatedText = currentPhrase.substring(0, currentIndex);
    currentIndex--;

    if (currentIndex < 0) {
      clearInterval(deletingInterval);
      this.currentIndex++;
      setTimeout(() => {
        this.typePhrase();
      }, this.pauseBetweenPhrases);
    }
  }, this.deletingSpeed);
}


@HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    const scrollTop = event.target.documentElement.scrollTop;
    const backgroundElement = document.querySelector('.background-image') as HTMLElement;
    backgroundElement.style.backgroundPositionY = `-${scrollTop}px`;

    if (scrollTop === 0) {
      return;
    }
  }
  
}
