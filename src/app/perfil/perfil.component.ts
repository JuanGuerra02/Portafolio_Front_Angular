import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {

  animatedText: string = '';
  currentIndex: number = 0;
  currentPhrase: string = '';
  typingSpeed: number = 150; 
  deletingSpeed: number = 100; 
  pauseBetweenPhrases: number = 500; 

  phrases: string[] = [
    'Curriculum'
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

  isPopupVisible: boolean[] = [false, false, false]; 
  
  showInfo(index: number){
    this.isPopupVisible[index - 1] = true;
  }

  closePopup(index: number){
    this.isPopupVisible[index - 1] = false;
  }

  whatsappText: string = "3023285467";
  gmail: string = "juansebastian2014.jsga@gmail.com"

  copyToClipboard(text: string) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
  }

  openLinkedInProfile() {
    const linkedinProfileUrl = "https://www.linkedin.com/in/juan-sebastian-guerra-6b927b238/";
    window.open(linkedinProfileUrl, "_blank");
  }
}
