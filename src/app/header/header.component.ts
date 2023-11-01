import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  text: string = 'développeur fullstack'; // Texte initial
  isFullstack: boolean = true; // Indicateur de texte actuel

  constructor() { }

  ngOnInit(): void {
    console.log("dhdhd")
    setInterval(() => {
      this.isFullstack = !this.isFullstack; // Inverser l'indicateur de texte actuel

      if (this.isFullstack) {
        this.text = 'développeur fullstack';
      } else {
        this.text = 'développeur mobile';
      }
    }, 3000);
  }
}
