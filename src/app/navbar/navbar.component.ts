import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import packageJson from '../../../package.json';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  radarVersion = packageJson.dependencies['eg-radar'];
  githubUrl = 'https://github.com/EdgarsGarsneks/eg-tech-radar';
  title = 'Tech Radar Demo v' + this.radarVersion;
}
