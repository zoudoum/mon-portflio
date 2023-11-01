import { Component,HostListener,OnInit } from '@angular/core';
import { ScrollServiceService } from '../scroll-service.service';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit{
  screenWidth: number;
  showElement: boolean = false; 
  etatSvg:string="white"
  etatText:string="black"
  constructor(private scroll:ScrollServiceService,private communicationService: CommunicationService){}
  ngOnInit(): void {
    this.screenWidth = window.innerWidth;

    this.scroll.svgNavClick3$.subscribe(()=>{
      this.showElement=true;
  
    });

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
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.screenWidth = window.innerWidth;
  }
}
