import { Component, ElementRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsGroupComponent } from '@reflex/angular-components/dist';
import { OptionsComponent } from '../options/options.component';
@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [CommonModule,SettingsGroupComponent, OptionsComponent],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss'
})
export class DropdownComponent {
  isGestureDropdownOpen: boolean = false;
  isRecorderDropdownOpen: boolean = false;

  constructor(
    private elementRef: ElementRef,
  ) {}

  closeDropdown() {
    this.isGestureDropdownOpen = false;
    this.isRecorderDropdownOpen = false;
    this.removeClickOutsideListener();
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.closeDropdown();
    }
  }

  addClickOutsideListener() {
    document.addEventListener('click', this.onClickOutside.bind(this));
  }

  removeClickOutsideListener() {
    document.removeEventListener('click', this.onClickOutside.bind(this));
  }

}