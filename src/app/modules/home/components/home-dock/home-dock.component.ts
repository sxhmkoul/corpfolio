import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Icon {
  name: string;
  path: string;
  active: boolean;
  tag: string;
}

@Component({
  selector: 'app-home-dock',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-dock.component.html',
  styleUrl: './home-dock.component.scss',
})
export class HomeDockComponent implements OnInit {
  icons: Icon[] = [
    { name: 'Finder', path: 'finder', active: true, tag: 'pinned' },
    { name: 'Safari', path: 'safari', active: false, tag: 'pinned' },
    { name: 'Music', path: 'music', active: true, tag: 'open' },
    {
      name: 'Visual Studio Code',
      path: 'vscode',
      active: true,
      tag: 'pinned',
    },
    { name: 'Terminal', path: 'terminal', active: true, tag: 'open' },
    {
      name: 'System Preferences',
      path: 'settings',
      active: true,
      tag: 'open',
    },
    { name: 'Notion', path: 'notion', active: true, tag: 'open' },
    { name: 'Bin', path: 'bin', active: false, tag: 'minimised' },
    { name: 'Freeform', path: 'freeform', active: false, tag: 'pinned' },
    { name: 'Microsoft Outlook', path: 'outlook', active: true, tag: 'open' },
  ];

  pinnedApps: Icon[] = [];
  openApps: Icon[] = [];
  minimisedApps: Icon[] = [];

  ngOnInit() {
    this.pinnedApps = this.icons.filter((icon) => icon.tag === 'pinned');
    this.openApps = this.icons.filter((icon)=> icon.tag === 'open');
    this.minimisedApps = this.icons.filter((icon) => icon.tag === 'minimised');
  }
}
