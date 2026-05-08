import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Course {
  emoji: string; title: string; instructor: string;
  lessons: number; duration: string; level: string;
  rating: number; tag: string; tagColor: string;
}

@Component({
  selector: 'app-courses', standalone: true,
  imports: [CommonModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {
  courses: Course[] = [
    { emoji: '⚛️', title: 'React & TypeScript Mastery', instructor: 'Dr. Lena Fischer',
      lessons: 64, duration: '18h', level: 'Intermediate', rating: 4.9,
      tag: 'Bestseller', tagColor: 'amber' },
    { emoji: '🐍', title: 'Python for Data Science', instructor: 'Prof. Amir Khan',
      lessons: 52, duration: '14h', level: 'Beginner', rating: 4.8,
      tag: 'New', tagColor: 'green' },
    { emoji: '🎨', title: 'UI/UX Design Fundamentals', instructor: 'Sara Osei',
      lessons: 40, duration: '11h', level: 'Beginner', rating: 4.9,
      tag: 'Top Rated', tagColor: 'blue' },
  ];
}