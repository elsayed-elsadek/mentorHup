import mentorImgUiUx from '../assets/homePage/explore1.webp';
import mentorImgReact from '../assets/homePage/ask.webp';
import mentorImgMl from '../assets/homePage/aboutus3.webp';
import mentorImgFullstack from '../assets/homePage/aboutus2.webp';
import avatarDavid from '../assets/homePage/person1.webp';
import avatarSarah from '../assets/homePage/person2.webp';
import avatarKumar from '../assets/homePage/person3.webp';
import avatarJohn from '../assets/homePage/person4.webp';

export const TEXTS = {
  heroTitle: 'Learn.Mentor. Grow',
  heroSubtitle: 'Join a community where mentors share experience and students grow with real-world guidance',
  joinMeta: 'Join 1,000 mentors and students'
};

export const COLORS = {
  primary: 'text-[#0f5e8b]',
  primaryBg: 'bg-[#0f5e8b]'
};

export const SERVICES = {
  mentors: [
    { title: 'Manage Students Efficiently', desc: 'Track your mentees\' progress, review submissions, and provide instant feedback from your dashboard.' },
    { title: 'Create Mentorship Programs', desc: 'Design and publish mentorships easily — add descriptions, materials, quizzes, and assignments.' },
    { title: 'Flexible Schedule', desc: 'Organize your mentorship sessions according to your availability and connect with students globally.' },
    { title: 'Build a Professional Brand', desc: 'Showcase your experience and achievements to grow your visibility in the community.' },
  ],
  students: [
    { title: 'Skill-Based Learning Paths', desc: 'Access curated courses and quizzes that strengthen your technical and soft skills step by step.' },
    { title: 'Personalized Mentorships', desc: 'Get matched with mentors who align with your goals, skills, and learning pace.' },
    { title: 'Progress Tracking', desc: 'Monitor your improvement with detailed feedback and analytics after each session or assignment.' },
    { title: 'Career Guidance', desc: 'Receive expert advice on how to advance your career and land opportunities in your chosen field.' },
  ]
};

export const MENTORSHIPS = [
  { title: 'Mastering UI/UX Design: From Concept Prototype', image: mentorImgUiUx, rating: 4.9, reviews: 328, price: 250, instructor: 'David Hall', avatar: avatarDavid, category: 'UI/UX' },
  { title: 'Advanced React & Next.js Patterns', image: mentorImgReact, rating: 4.8, reviews: 450, price: 299, instructor: 'Sarah Chen', avatar: avatarSarah, category: 'Frontend' },
  { title: 'Machine Learning Fundamentals', image: mentorImgMl, rating: 4.9, reviews: 512, price: 320, instructor: 'Prof. Kumar', avatar: avatarKumar, category: 'Machine Learning' },
  { title: 'Full Stack Web Development', image: mentorImgFullstack, rating: 4.7, reviews: 289, price: 280, instructor: 'John Doe', avatar: avatarJohn, category: 'Full Stack' },
  { title: 'Full Stack Web Development', image: mentorImgFullstack, rating: 4.7, reviews: 289, price: 280, instructor: 'John Doe', avatar: avatarJohn, category: 'Full Stack' },

];

export const ABOUT_STATS = [
  { icon: '✓', value: '98%', label: 'Success Rate' },
  { icon: '👥', value: '15,000+', label: 'Active Students' },
  { icon: '📚', value: '500+', label: 'Courses' },
  { icon: '👨‍🏫', value: '150+', label: 'Expert Instructors' },
];

export const ABOUT_IMAGES = [
  '/src/assets/homePage/aboutus1.webp',
  '/src/assets/homePage/aboutus1.webp',
  '/src/assets/homePage/aboutus1.webp',
 '/src/assets/homePage/aboutus1.webp',
];
