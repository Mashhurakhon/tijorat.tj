import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Statistic {
  'icon': string,
  'col': number,
  'desc': string,
  'color': string
}

@Component({
  selector: 'app-statistic-section',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './statistic-section.component.html',
  styleUrl: './statistic-section.component.css'
})
export class StatisticSectionComponent {

  public statistics: Statistic[] = [
    {'icon': 'fa-regular fa-face-smile', 'col': 312, 'desc': 'Счастливые клиенты', 'color': 'text-blue-500'},
    {'icon': 'fa-regular fa-newspaper', 'col': 43, 'desc': 'Проекты', 'color': 'text-orange-500'},
    {'icon': 'fa-solid fa-headphones', 'col': 24, 'desc': 'Часы поддержки', 'color': 'text-green-500'},
    {'icon': 'fa-solid fa-users', 'col': 51, 'desc': 'Партнеры', 'color': 'text-fuchsia-700'}
  ]
}
