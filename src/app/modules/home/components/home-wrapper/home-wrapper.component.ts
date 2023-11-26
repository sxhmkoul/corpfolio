import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinuxNavbarComponent } from '../linux-navbar/linux-navbar.component';
import { HomeLandingComponent } from '../home-landing/home-landing.component';
import { SectionComponent } from '../section/section.component';

@Component({
  selector: 'app-home-wrapper',
  standalone: true,
  imports: [CommonModule, LinuxNavbarComponent, SectionComponent],
  templateUrl: './home-wrapper.component.html',
  styleUrl: './home-wrapper.component.scss',
})
export class HomeWrapperComponent {}
