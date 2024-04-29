import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-value-text',
  templateUrl: './value-text.component.html'
})
export class ValueTextComponent {

  @Input()
  public elementTitle = '';

  @Input()
  public elementId = 'custom-select';

}
