import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { CompetenceComponent } from './competence/competence.component';
import { FormationComponent } from './formation/formation.component';
import { RealisationComponent } from './realisation/realisation.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import { ScrollHeightDirective } from './scroll-height.directive';
import { ScrollHeightFormationDirective } from './scroll-height-formation.directive';
import { ScrollHeightRealisationDirective } from './scroll-height-realisation.directive';
import { ScrollHeightFooterDirective } from './scroll-height-footer.directive';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    CompetenceComponent,
    FormationComponent,
    RealisationComponent,
    FooterComponent,ScrollHeightDirective, ScrollHeightFormationDirective, ScrollHeightRealisationDirective, ScrollHeightFooterDirective
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
