import { SocSectionComponent } from './components/soc-section/soc-section.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderSectionComponent } from './components/header-section/header-section.component';
import { PreviewSectionComponent } from './components/preview-section/preview-section.component';import { NgModel } from '@angular/forms';
import { LogoComponent } from "./components/logo/logo.component";
import { OpportunitySectionComponent } from './components/opportunity-section/opportunity-section.component';
import { Fitures2Component } from './components/fitures-2/fitures-2.component';
import { ServicesSectionComponent } from './components/services-section/services-section.component';
import { ValueSectionComponent } from './components/value-section/value-section.component';
import { StatisticSectionComponent } from './components/statistic-section/statistic-section.component';
import { PlansSectionComponent } from './components/plans-section/plans-section.component';
import { SaleSectionComponent } from './components/sale-section/sale-section.component';
import { OptionSectionComponent } from './components/option-section/option-section.component';
import { FaqSectionComponent } from './components/faq-section/faq-section.component';
import { SubscriptionSectionComponent } from './components/subscription-section/subscription-section.component';
import { FooterSectionComponent } from './components/footer-section/footer-section.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderSectionComponent,
    PreviewSectionComponent,
    LogoComponent,
    OpportunitySectionComponent, 
    Fitures2Component,
    ServicesSectionComponent,
    ValueSectionComponent,
    StatisticSectionComponent,
    PlansSectionComponent,
    SaleSectionComponent,
    OptionSectionComponent,
    FaqSectionComponent,
    SocSectionComponent,
    SubscriptionSectionComponent,
    FooterSectionComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-project';
}
