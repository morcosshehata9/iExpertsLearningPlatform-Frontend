import { Component, signal } from '@angular/core';
import { CommonModule }      from '@angular/common';
import {
  ReactiveFormsModule, FormBuilder, FormGroup, Validators
} from '@angular/forms';
import { ContactService } from '../../services/contact.service';

type Status = 'idle' | 'loading' | 'success' | 'error';

@Component({
  selector:    'app-contact',
  standalone:  true,
  imports:     [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl:    './contact.component.scss'
})
export class ContactComponent {
  status       = signal<Status>('idle');
  errorMessage = signal('');
  form:          FormGroup;

  constructor(private fb: FormBuilder, private svc: ContactService) {
this.form = this.fb.group({
  name: [
    '',
    [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(100),
      Validators.pattern(/^[a-zA-Z\s]+$/)
    ]
  ],

  email: [
    '',
    [
      Validators.required,
      Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/)
    ]
  ],

  message: [
    '',
    [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(2000),
      Validators.pattern(/^(?!\s*$).+/)
    ]
  ]
});
  }

  /** Quick access to form controls in the template */
  get f() { return this.form.controls; }

/*   invalid(field: string): boolean {
    const c = this.form.get(field);
    return !!(c?.invalid && c?.touched);
  } */

    invalid(field: string): boolean {
  const c = this.form.get(field);
  return !!(c && c.invalid && (c.dirty || c.touched));
}
  onSubmit(): void {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }

    this.status.set('loading');

    this.svc.submit(this.form.value).subscribe({
      next:  () => { this.status.set('success'); this.form.reset(); },
      error: (e: Error) => { this.status.set('error'); this.errorMessage.set(e.message); }
    });
  }

  reset() { this.status.set('idle'); this.errorMessage.set(''); }
}