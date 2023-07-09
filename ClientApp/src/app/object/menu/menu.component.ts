import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [
    trigger('expandAnimation', [
      state('collapsed', style({ height: '80px' })),
      //state('expanded', style({ height: 'calc(243% + 1.3px)' })),
      state('expanded', style({ height: '50vh' })),
      transition('collapsed <=> expanded', animate('300ms ease-in-out')),
    ]),
    trigger('widthAnimation', [
      state('collapsed', style({ width: '100%' })),
      state('expanded', style({ width: 'calc(243% + 1.3px)' })),
      transition('collapsed <=> expanded', animate('200ms ease-out')),
    ]),
    trigger('iconAnimation', [
      state('inactive', style({ transform: 'rotate(0deg)' })),
      state('active', style({ transform: 'rotate(45deg)' })),
      transition('inactive <=> active', animate('300ms ease-in-out')),
    ]),
  ],
})
export class MenuComponent {
  isExpanded = false;

  animateSvg() {
    this.isExpanded = !this.isExpanded;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    // Passen Sie den Zustand von isCollapsed entsprechend an
    if (scrollTop > 50 && this.isExpanded == false) {
      this.isCollapsed = true;
    } else {
      this.isCollapsed = false;
    }
  }
  isCollapsed: boolean = false; // Variable zum Verfolgen des Zustands der Animation

  constructor() {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    // Passen Sie den Zustand von isCollapsed entsprechend an
    if (scrollTop > 50 && this.isExpanded == false) {
      this.isCollapsed = true;
    } else {
      this.isCollapsed = false;
    }
  }

  
  
  
}
