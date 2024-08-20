import { Options } from './../../models/options';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-option-section',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './option-section.component.html',
  styleUrl: './option-section.component.css'
})
export class OptionSectionComponent {

  public options: Options[] = [
    {'icon': 'fa-solid fa-user-plus', 'price': 10, 'title': 'Дополнительный пользователь'},
    {'icon': 'fa-solid fa-diagram-project', 'price': 100, 'title': 'Дополнительная точки продаж'},
    {'icon': 'fa-solid fa-screwdriver-wrench', 'price': 100, 'title': 'Управление услугой'},
    {'icon': 'fa-solid fa-window-restore', 'price': 100, 'title': 'Аренда и прокат'},
    {'icon': 'fa-solid fa-house-circle-check', 'price': 150, 'title': 'Управление производством'},
    {'icon': 'fa-solid fa-heart-pulse', 'price': 150, 'title': 'Медицинская информационная система'},
    {'icon': 'fa-solid fa-temperature-quarter', 'price': 150, 'title': 'Лабораторная информационная система'},
    {'icon': 'fa-solid fa-plug', 'price': 200, 'title': 'Подключение интернет-магазина'},
  ]
}
