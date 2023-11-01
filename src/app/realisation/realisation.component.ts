import { Component } from '@angular/core';
import { CommunicationService } from '../communication.service';
import { ScrollServiceService } from '../scroll-service.service';

@Component({
  selector: 'app-realisation',
  templateUrl: './realisation.component.html',
  styleUrls: ['./realisation.component.css']
})
export class RealisationComponent {
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
  this.scroll.svgNavClick2$.subscribe(()=>{
    this.showElement=true;

  });
}

}
