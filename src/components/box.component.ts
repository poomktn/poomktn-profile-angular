import { Component, Input } from '@angular/core';

@Component({
  selector: 'Box',
  templateUrl: './box.component.html'
})

export class BoxComponent {
  @Input() color?: string
  @Input() title?: string
  @Input() class?: string
}