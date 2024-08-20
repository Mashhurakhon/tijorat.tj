import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'app-fitures-2',
  standalone: true,
  imports: [
    CommonModule,
    LogoComponent
  ],
  templateUrl: './fitures-2.component.html',
  styleUrl: './fitures-2.component.css'
})
export class Fitures2Component {
   
  public fitures2: string[] = [
    "Для сферы торговли",
    "Для производственных предприятий",
    "Для предоставления услуг",
    "Для онлайн-магазинов",
    "Для медицинских информационных систем",
    "Для лабораторных информационных систем",
    "Подходит для различных видов бизнеса",
    "Для различных сфер деятельности",
  ]
}
