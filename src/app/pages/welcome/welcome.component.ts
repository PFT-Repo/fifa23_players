import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  constructor(private router:Router){

  }
  data1: string='';
  data2: string='';
  data3: string='';
  textArr:string[] = [];
  currentIndex = 0;
  currentText = '';
  heading!: HTMLElement;

  ngOnInit() {
    setTimeout(() => {
      this.data1= document.getElementById('playersTi')!.innerText.toString(); 
      this.data2= document.getElementById('idolsTi')!.innerText.toString(); 
      this.data3= document.getElementById('heroesTi')!.innerText.toString(); 
      console.log(this.data1);
    }, 500);
   
    setTimeout(() => { 
      this.textArr = [this.data1,this.data2,this.data3];
    this.heading = document.querySelector('.tw') as HTMLElement;
      this.type();
    }, 1000); 
    
  }

  type() {
    if (this.currentIndex === this.textArr.length) {
      this.currentIndex = 0;
    }

    this.currentText = this.textArr[this.currentIndex];
    const letterIndex = 0;
    this.typeLetters(this.currentText, letterIndex);
  }

  typeLetters(text: string, letterIndex: number) {
    if (letterIndex < text.length) {
      this.heading.textContent += text.charAt(letterIndex);
      letterIndex++;
      setTimeout(() => {
        this.typeLetters(text, letterIndex);
      }, 50);
    } else {
      setTimeout(() => {
        this.eraseLetters(text, letterIndex);
      }, 1000);
    }
  }

  eraseLetters(text: string, letterIndex: number) {
    if (letterIndex >= 0) {
      const truncatedText = text.substring(0, letterIndex);
      this.heading.textContent = truncatedText;
      letterIndex--;
      setTimeout(() => {
        this.eraseLetters(text, letterIndex);
      }, 50);
    } else {
      this.currentIndex++;
      setTimeout(() => {
        this.type();
      }, 500);
    }
  }
  goPlayers(){
    this.router.navigateByUrl("/players");
  }
}