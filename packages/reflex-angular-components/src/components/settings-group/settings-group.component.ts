import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-settings-group',
  templateUrl: './settings-group.component.html'
})
export class SettingsGroupComponent {

  @Input()
  public toggleId = 'custom';

  @Input()
  public elementTitle = 'Custom Title';

}
