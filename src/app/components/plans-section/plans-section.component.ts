import { CommonModule } from '@angular/common';
import { Plans } from './../../models/plans';
import { Component } from '@angular/core';

@Component({
  selector: 'app-plans-section',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './plans-section.component.html',
  styleUrl: './plans-section.component.css'
})
export class PlansSectionComponent {
  
}
