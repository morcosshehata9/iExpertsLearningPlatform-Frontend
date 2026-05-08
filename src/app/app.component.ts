import { Component } from '@angular/core';
import { NavbarComponent }       from './components/navbar/navbar.component';
import { HeroComponent }         from './components/hero/hero.component';
import { FeaturesComponent }     from './components/features/features.component';
import { CoursesComponent }      from './components/courses/courses.component';
import { AboutComponent }        from './components/about/about.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { ContactComponent }      from './components/contact/contact.component';
import { FooterComponent }       from './components/footer/footer.component';

@Component({
  selector:    'app-root',
  standalone:  true,
  imports: [
    NavbarComponent, HeroComponent, FeaturesComponent, CoursesComponent,
    AboutComponent, TestimonialsComponent, ContactComponent, FooterComponent
  ],
  template: `
    <app-navbar></app-navbar>
    <main>
      <app-hero></app-hero>
      <app-features></app-features>
      <app-courses></app-courses>
      <app-about></app-about>
      <app-testimonials></app-testimonials>
      <app-contact></app-contact>
    </main>
    <app-footer></app-footer>
  `
})
export class AppComponent {
  title = 'iExpertsLearningPlatform-frontend';
}
