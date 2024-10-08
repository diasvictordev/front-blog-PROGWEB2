import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toast',
  template: `
    <div *ngIf="message" class="toast" [ngClass]="{ 'success': isSuccess, 'error': !isSuccess }">
      {{ message }}
    </div>
  `,
  styleUrls: ['./toastcomponent.component.css']
})
export class ToastcomponentComponent {
  @Input() message: string | null = null;
  @Input() isSuccess: boolean = true;

  hideToast() {
    this.message = null;
  }
}
