import { Component } from '@angular/core';
import { ScrollServiceService } from '../scroll-service.service';

@Component({
  selector: 'app-competence',
  templateUrl: './competence.component.html',
  styleUrls: ['./competence.component.css']
})
export class CompetenceComponent {
  showElement: boolean = false; 
  constructor(private scroll:ScrollServiceService){}
  ngOnInit() {
    this.scroll.svgNavClick$.subscribe(()=>{
      this.showElement=true;
  
    });
  
  }
 
}
