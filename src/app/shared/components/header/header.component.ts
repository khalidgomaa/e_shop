import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit() {
    // Add .show class after a short delay (you can adjust the delay)
    setTimeout(() => {
      this.renderer.addClass(this.el.nativeElement.querySelector('.navbar'), 'show');
    }, 700); // 500 milliseconds delay, adjust as needed
  }
}