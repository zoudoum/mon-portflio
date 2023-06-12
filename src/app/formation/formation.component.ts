import { Component } from '@angular/core';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent {
  etat:boolean=false
  etatdeux:boolean=false
  onCardFocusHandler() {
    console.log('Card focused!');
    this.etat=true
  }
  onCardMouseLeave(){
     this.etat=false
  }
  getEtat(){
    if(this.etat==true)
    return "#bbbcff"
    else
    return "white"
  }

  onCardFocusHandlerdeux() {
    console.log('Card focused!');
    this.etatdeux=true
  }
  onCardMouseLeavedeux(){
     this.etatdeux=false
  }
  getEtatdeux(){
    if(this.etatdeux==true)
    return "#bbbcff"
    else
    return "white"
  }
}
