import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from '../logo/logo.component';
import { Value } from '../../models/value';

@Component({
  selector: 'app-value-section',
  standalone: true,
  imports: [
    CommonModule,
    LogoComponent
  ],
  templateUrl: './value-section.component.html',
  styleUrl: './value-section.component.css'
})
export class ValueSectionComponent {

  public values: Value[] = [
    {
      'imgPath': 'images/values-1.png',
      'title': 'Компьютеры'
    },
    {
      'imgPath': 'images/values-2.png',
      'title': 'Планшеты'
    },
    {
      'imgPath': 'images/values-3.png',
      'title': 'Мобильные телефоны'
    }
  ]
}
