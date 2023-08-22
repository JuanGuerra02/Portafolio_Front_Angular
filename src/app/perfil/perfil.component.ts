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
  typingSpeed: number = 150; // Velocidad de escritura en milisegundos
  deletingSpeed: number = 100; // Velocidad de borrado en milisegundos
  pauseBetweenPhrases: number = 500; // Pausa entre frases en milisegundos

  phrases: string[] = [
    '"Curriculum"'
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

}
