import { Component, HostListener, signal } from '@angular/core';
import { CommonModule }                   from '@angular/common';

@Component({
  selector:    'app-navbar',
  standalone:  true,
  imports:     [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl:    './navbar.component.scss'
})
export class NavbarComponent {
  scrolled  = signal(false);
  menuOpen  = signal(false);

  @HostListener('window:scroll')
  onScroll() { this.scrolled.set(window.scrollY > 50); }

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    this.menuOpen.set(false);
  }
}