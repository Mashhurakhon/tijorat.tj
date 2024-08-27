import { HeaderLink } from './../../models/header-link';
import { Component } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer-section',
  standalone: true,
  imports: [
    LogoComponent,
    CommonModule
  ],
  templateUrl: './footer-section.component.html',
  styleUrl: './footer-section.component.css'
})
export class FooterSectionComponent {
  public links: HeaderLink[] = [
    { "label": "Главная", "link": "#" },
    { "label": "Возможности", "link": "#" },
    { "label": "Услуги", "link": "#" },
    { "label": "Тарифы", "link": "#" },
    { "label": "Контакты", "link": "#" },
  ];

  public services: string[] = [
    "Автоматизации торговли",
    "Автоматизация магазина", 
    "Автоматизация работы склада",
    "Автоматизация складского учета", 
    "Управление торговлей"
  ];

  public email = 'info@tijorat.pro'
}
