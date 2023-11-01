import { Component } from '@angular/core';
import { HostListener,ElementRef } from '@angular/core';
import { CommunicationService } from './communication.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'monPortflio';
  isScrolled: boolean = false;
  etatSvg:string="white"
  etatText:string="black"
  screenWidth: number;
  constructor(private communicationService: CommunicationService,private el: ElementRef) {
    this.screenWidth = window.innerWidth;
   
  }
  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled = window.pageYOffset > 0;
    
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.screenWidth = window.innerWidth;
  }
  onClickSvg(){
      if(this.etatSvg=='white')
      {
      this.etatSvg='black'
      this.etatText="white"
      }
      else
      {
      this.etatSvg='white'
      this.etatText="black"

      }
      this.communicationService.sendSvgNavClick();
  }
  getColor(){
    return this.etatSvg
  }
  getColorText(){
    return this.etatText
  }
  getInitialDisplay() {
    if (this.screenWidth > 882) {
      return '2000px';
    }  else if(this.screenWidth>596&&this.screenWidth<882) {
      return '2900px';
      // Vous pouvez ajuster le style en conséquence ici
    }
    else{
      return '3500px';
      console.log('in 3500')
    }
  }
}
