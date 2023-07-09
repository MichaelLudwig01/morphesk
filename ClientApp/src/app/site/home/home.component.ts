import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  text = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.';


  @ViewChild('cover') coverRef!: ElementRef; // Referenz auf das Cover-Element
  coverTopOffset = 0; // Der initiale Offset des Covers

  @HostListener('window:scroll')
  onWindowScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.coverTopOffset = scrollPosition * 0.5; // Anpassen des Parallax-Offsets
    this.updateCoverTransform();
  }

  updateCoverTransform() {
    if (this.coverRef) {
      const coverElement = this.coverRef.nativeElement;
      coverElement.style.transform = `translateY(${this.coverTopOffset}px)`;
    }
  }
}

