import { Component,HostListener,OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit{
  screenWidth: number;
  ngOnInit(): void {
    
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.screenWidth = window.innerWidth;
  }
}
