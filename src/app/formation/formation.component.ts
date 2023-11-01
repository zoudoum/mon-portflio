import { Component,Input } from '@angular/core';
import { CommunicationService } from '../communication.service';
import { ScrollServiceService } from '../scroll-service.service';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent {
  etat:boolean=false
  etatdeux:boolean=false
  @Input() background: string;
@Input() color: string;
etatSvg:string="white"
  etatText:string="black"
  showElement: boolean = false; 
constructor(private communicationService: CommunicationService,private scroll:ScrollServiceService) {}
ngOnInit() {
  this.communicationService.svgNavClick$.subscribe(() => {
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
  });
  this.scroll.svgNavClick1$.subscribe(()=>{
    this.showElement=true;

  });
}
  onCardFocusHandler() {
    if(this.etatSvg=='white'){
      console.log('Card focused!');
      this.etat=true
    }
   
  }
  onCardMouseLeave(){
    if(this.etatSvg=='white'){
     this.etat=false
    }
  }
  getEtat(){
    if(this.etat==true)
    return "#eeeae5"
    else
    return "white"
  }

  onCardFocusHandlerdeux() {
    if(this.etatSvg=='white')
   
    this.etatdeux=true
  }
  onCardMouseLeavedeux(){
    if(this.etatSvg=='white')
     this.etatdeux=false
  }
  getEtatdeux(){
    if(this.etatdeux==true)
    return "#eeeae5"
    else
    return "white"
  }
}
