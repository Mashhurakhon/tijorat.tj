import { Component } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'app-preview-section',
  standalone: true,
  imports: [LogoComponent],
  templateUrl: './preview-section.component.html',
  styleUrl: './preview-section.component.css'
})
export class PreviewSectionComponent {

}
