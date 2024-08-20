import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Sales {
  'sale': number,
  'period': number
}
@Component({
  selector: 'app-sale-section',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './sale-section.component.html',
  styleUrl: './sale-section.component.css'
})
export class SaleSectionComponent {

  public sales: Sales[] = [
    {'sale': 5, 'period': 6},
    {'sale': 10, 'period': 12},
    {'sale': 15, 'period': 24},
    {'sale': 30, 'period': 36}
  ]
}
