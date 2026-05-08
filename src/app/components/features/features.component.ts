import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Feature { icon: string; title: string; desc: string; }

@Component({
  selector:    'app-features',
  standalone:  true,
  imports:     [CommonModule],
  templateUrl: './features.component.html',
  styleUrl:    './features.component.scss'
})
export class FeaturesComponent {
  features: Feature[] = [
    { icon: '🎬', title: 'HD Video Lessons',
      desc: 'Crisp 1080p video with closed captions, playback speed control, and offline downloads.' },
    { icon: '🏆', title: 'Verified Certificates',
      desc: 'Earn industry-recognised certificates shareable directly on LinkedIn and your CV.' },
    { icon: '🤝', title: '1-on-1 Mentorship',
      desc: 'Book live sessions with expert instructors who provide personalised feedback.' },
    { icon: '📱', title: 'Learn on Any Device',
      desc: 'Fully responsive web app plus native iOS and Android apps for on-the-go learning.' },
    { icon: '🔄', title: 'Lifetime Access',
      desc: 'Purchase once, access forever — including all future course updates at no extra cost.' },
    { icon: '💬', title: 'Peer Community',
      desc: 'Join cohort study groups, discussion boards, and live Q&A sessions each week.' },
      {
    icon: '🧠',
    title: 'AI-Powered Learning Paths',
    desc: 'Get personalised course recommendations and smart study plans tailored to your goals.'
  },

  {
    icon: '📊',
    title: 'Progress Tracking',
    desc: 'Monitor your learning journey with detailed progress analytics, quizzes, and milestones.'
  }
  ];
}