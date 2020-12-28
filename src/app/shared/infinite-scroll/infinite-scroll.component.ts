import { Component, OnInit, Output, EventEmitter, ElementRef, ViewChild, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-infinite-scroll',
  template: `<ng-content></ng-content><div #anchor></div>`,
  styleUrls: ['./infinite-scroll.component.scss']
})
export class InfiniteScrollComponent implements OnInit, OnDestroy {
  @Input() options = {};
  @Output() scrolled = new EventEmitter();
  @ViewChild('anchor', {static: false}) anchor: any;


  constructor(
    private host: ElementRef, 
    private observer: IntersectionObserver) { }

  get element() {
    return this.host.nativeElement;
  }

  ngOnInit() {
    const options = {
      root: this.isHostScrollable() ? this.host.nativeElement : null,
      ...this.options
    };

    this.observer = new IntersectionObserver(([entry]) => {
      return entry.isIntersecting && this.scrolled.emit();
    }, options);

    if (this.anchor && this.anchor.nativeElement) {
      this.observer.observe(this.anchor.nativeElement);
    }
  }

  private isHostScrollable() {
    const style = window.getComputedStyle(this.element);

    return style.getPropertyValue('overflow') === 'auto' ||
      style.getPropertyValue('overflow-y') === 'scroll';
  }

  ngOnDestroy() {
    this.observer.disconnect();
  }

}


