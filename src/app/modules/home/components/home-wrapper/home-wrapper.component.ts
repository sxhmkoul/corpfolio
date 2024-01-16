import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinuxNavbarComponent } from '../linux-navbar/linux-navbar.component';
import { HomeLandingComponent } from '../home-landing/home-landing.component';
import { SectionComponent } from '../section/section.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { HomeDockComponent } from '../home-dock/home-dock.component';

@Component({
  selector: 'app-home-wrapper',
  standalone: true,
  imports: [
    CommonModule,
    LinuxNavbarComponent,
    SectionComponent,
    ButtonComponent,
    HomeDockComponent,
  ],
  templateUrl: './home-wrapper.component.html',
  styleUrl: './home-wrapper.component.scss',
})
export class HomeWrapperComponent implements OnInit {
  ngOnInit(): void {}

  handleRightClick(e: Event): void {
    alert('Right click');
  }
}
