import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { HeaderLink } from '../../models/header-link';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'app-header-section',
  standalone: true,
  imports: [
    CommonModule,
    LogoComponent
],
  templateUrl: './header-section.component.html',
  styleUrl: './header-section.component.css'
})
export class HeaderSectionComponent {
  public links: HeaderLink[] = [
    { "label": "Главная", "link": "" },
    { "label": "Возможности", "link": "#features" },
    { "label": "Услуги", "link": "#services" },
    { "label": "Тарифы", "link": "#pricing" },
    { "label": "Контакты", "link": "#contact" },
  ];

  public active: boolean = true;
  public openLinks() {
    this.active = !this.active;
  }

}
