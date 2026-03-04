import { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 'smriti',
    title: 'Smriti',
    tagline: 'Anonymous memory-sharing platform focusing on emotional resonance.',
    summary: 'SMRITI: a nostalgia centred social platform built with constraints of post anonymity, privacy, and community safety, under ai supervision',
    tags: ['UX Research', 'Mobile App', 'Social Impact'],
    thumbnailUrl: 'https://picsum.photos/800/600?random=1',
    heroUrl: 'https://picsum.photos/1200/600?random=10',
    // TODO: Replace with actual project video. Using placeholder to prevent 404.
    videoUrl: 'https://player.vimeo.com/video/76979871?badge=0&autopause=0&player_id=0&app_id=58479',
    liveUrl: 'https://smriti-new.vercel.app/',
    description: 'Smriti is a digital sanctuary designed for the anonymous sharing of memories. Unlike traditional social media that prioritizes metrics and engagement, Smriti focuses on catharsis and emotional connection through ephemeral, text-first storytelling.',
    role: 'Lead Product Designer',
    duration: '3 Months',
    challenge: 'Design a social platform that minimizes performance anxiety and toxicity while fostering genuine emotional connection among strangers.',
    solution: 'A minimalist interface that removes "likes" and public metrics. Interactions are limited to private "resonations" — pre-written empathetic responses. The visual design uses calming gradients and heavy whitespace to reduce cognitive load.',
    interactionNotes: 'The core interaction is the "Resonate" action. Instead of a quick double-tap (Like), users must hold a button for 1.5 seconds to acknowledge a memory. This "Time-to-Resonate" friction is intentional, ensuring users actually read and process the emotion before reacting.',
    outcome: 'Usability testing showed a 40% increase in time-spent-reading compared to standard feeds, with qualitative feedback highlighting a sense of safety and reduced anxiety.',
    accentColor: '#A8C5A8' // Sage Green
  },
  {
    id: 'flavor-filter',
    title: 'Flavor Filter',
    tagline: 'Dietary filtering interaction system for complex menus.',
    summary: 'FLAVOR FILTER: a modular dietary filtering system designed to help users with severe allergies navigate complex menus safely without binary exclusion.',
    tags: ['Interaction Design', 'Accessibility', 'System Design'],
    thumbnailUrl: 'https://picsum.photos/800/600?random=2',
    heroUrl: 'https://picsum.photos/1200/600?random=20',
    // TODO: Replace with actual project video. Using placeholder to prevent 404.
    videoUrl: 'https://player.vimeo.com/video/76979871?badge=0&autopause=0&player_id=0&app_id=58479',
    liveUrl: 'https://new-filter.vercel.app/',
    description: 'Flavor Filter is a modular UI system designed for food delivery apps to help users with severe allergies and strict dietary restrictions navigate complex menus safely and efficiently.',
    role: 'Interaction Designer',
    duration: '6 Weeks',
    challenge: 'Filtering menus often feels binary (show/hide). Users with multiple restrictions (e.g., Gluten-Free + Vegan + Nut Allergy) often face empty states or confusing results. The goal was to provide granular control without overwhelming the user.',
    solution: 'A multi-tier filtering logic that visualizes ingredients rather than just hiding dishes. The "Strict Mode" toggle completely removes unsafe items, while "Soft Mode" dims them and highlights the conflicting ingredient. This transparency builds trust.',
    interactionNotes: 'I designed a "Sticky Filter Chip" pattern that remains accessible at the bottom of the screen (thumb zone) on mobile. Tapping it expands a modal with large, toggleable allergen icons. The transition uses a spring animation to feel responsive and lightweight.',
    outcome: 'The design system was adopted by a mid-sized delivery startup, resulting in a 15% decrease in support tickets related to allergen inquiries.',
    accentColor: '#F2A188' // Pastel Salmon
  }
];

export const TECH_STACK = [
  {
    category: "Core",
    items: ["React 18", "TypeScript", "Vite"]
  },
  {
    category: "Styling",
    items: ["Tailwind CSS v4", "CSS Variables", "PostCSS"]
  },
  {
    category: "Architecture",
    items: ["Component-Based", "Headless UI Logic", "History API State Management"]
  },
  {
    category: "Performance",
    items: ["Code Splitting", "Lazy Loading", "Asset Optimization"]
  }
];

export const DOCUMENTATION_TEXT = `
This portfolio is engineered as a product, not just a static collection of images. It demonstrates a "systems-first" approach to design implementation.

**Philosophy:**
The interface follows a "Calm Technology" ethos. It avoids unnecessary animation, high-contrast jarring elements, and "scroll-jacking". Every interaction is intentional. The visual language ("Industrial Clay") uses low-saturation, matte colors to reduce eye strain and focus attention on the content.

**Technical Implementation:**
- **State Management:** Uses the browser's native History API to manage view states, allowing for deep-linking and back-button navigation without a heavy router library.
- **Responsiveness:** Built mobile-first with a unified component architecture that adapts to viewport constraints without code duplication.
- **Accessibility:** Semantic HTML structure, proper ARIA labels, and high-contrast text ensure the site is usable by everyone.
- **Performance:** Optimized for sub-second load times and 60fps animations using CSS transforms instead of JavaScript-driven motion.
`;