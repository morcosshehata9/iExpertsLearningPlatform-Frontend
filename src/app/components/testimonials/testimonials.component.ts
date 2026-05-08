import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials', standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {
  testimonials = [
    { quote: "I landed my first developer role within 3 months of finishing the React course. The projects were real-world and the feedback was instant.",
      name: "Youssef Khalil", role: "Junior Developer, FinEdge", initials: "YK", color: "#2563eb" },
    { quote: "The Data Science path is exceptional. Prof. Khan explains complex concepts with such clarity. Best investment I've made in my career.",
      name: "Nadia Petrov",   role: "Data Analyst, Cloudspan",   initials: "NP", color: "#059669" },
    { quote: "Lifetime access is a game-changer. I revisit lessons regularly and the content keeps improving. Genuinely brilliant platform.",
      name: "Tariq Mensah",   role: "UX Lead, Launchpad Agency", initials: "TM", color: "#d97706" },
  ];
}