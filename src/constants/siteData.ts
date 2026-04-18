import { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 'enlit',
    title: 'EnLit',
    tagline: 'Modernizing educational tools with evidence-based learning principles.',
    summary: 'EnLit, a specialized research-based study portal, focuses on modernizing educational tools by integrating evidence-based learning principles',
    tags: ['UX Research', 'EdTech', 'Evidence-Based Design'],
    thumbnailUrl: '/projects/ENLIT THUMB LIGHT.svg', // Shown in light mode
    thumbnailUrlLight: '/projects/ENLIT THUMB DARK.svg', // Shown in dark mode
    heroUrl: '/projects/enlit-dark.png',
    heroUrlLight: '/projects/enlit-light.png',
    // ... rest of details
    videoUrlMobile: 'https://player.vimeo.com/video/76979871?badge=0&autopause=0&player_id=0&app_id=58479',
    videoUrlDesktop: 'https://player.vimeo.com/video/76979871?badge=0&autopause=0&player_id=0&app_id=58479',
    liveUrl: 'https://enlit.world/',
    description: 'EnLit is a digital learning companion that transforms passive studying into active learning. By leveraging research in cognitive psychology—specifically retrieval practice and spaced repetition—EnLit helps students build long-term retention through a minimalist, distraction-free interface.',
    role: 'Lead Product Designer',
    duration: 'Ongoing',
    challenge: 'How might we design a study tool that encourages deep focus and scientifically-backed learning habits rather than just rote memorization?',
    solution: 'A "Clean Slate" interface that prioritizes content and recall over complex hierarchies. Features include adaptive recall timers and interleaved practice sessions, presented through a high-precision typographic design system.',
    interactionNotes: 'The core navigation uses a "Zen Switch" between Study and Test modes. The transition is smooth and intentional, using CSS blur-filters to reduce visual noise and signal the switch in cognitive state.',
    outcome: 'Currently in private beta with 200+ active users. Preliminary qualitative feedback indicates a significant reduction in digital fatigue during long study sessions.',
    accentColor: '#5479A2'
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
    videoUrlMobile: 'https://player.vimeo.com/video/76979871?badge=0&autopause=0&player_id=0&app_id=58479',
    videoUrlDesktop: 'https://player.vimeo.com/video/76979871?badge=0&autopause=0&player_id=0&app_id=58479',
    liveUrl: 'https://new-filter.vercel.app/',
    description: 'Flavor Filter is a modular UI system designed for food delivery apps to help users with severe allergies and strict dietary restrictions navigate complex menus safely and efficiently.',
    role: 'Interaction Designer',
    duration: '6 Weeks',
    challenge: 'Filtering menus often feels binary (show/hide). Users with multiple restrictions (e.g., Gluten-Free + Vegan + Nut Allergy) often face empty states or confusing results. The goal was to provide granular control without overwhelming the user.',
    solution: 'A multi-tier filtering logic that visualizes ingredients rather than just hiding dishes. The "Strict Mode" toggle completely removes unsafe items, while "Soft Mode" dims them and highlights the conflicting ingredient. This transparency builds trust.',
    interactionNotes: 'I designed a "Sticky Filter Chip" pattern that remains accessible at the bottom of the screen (thumb zone) on mobile. Tapping it expands a modal with large, toggleable allergen icons. The transition uses a spring animation to feel responsive and lightweight.',
    outcome: 'The design system was adopted by a mid-sized delivery startup, resulting in a 15% decrease in support tickets related to allergen inquiries.',
    accentColor: '#F2A188' // Pastel Salmon
  },
  {
    id: 'sonic-wayfinder',
    title: 'Sonic Wayfinder',
    tagline: 'Audio-augmented reality navigation for the visually impaired.',
    summary: 'SONIC WAYFINDER: A spatial audio navigation system that uses 3D soundscapes to guide users through complex urban environments without visual dependency.',
    tags: ['Audio Design', 'Accessibility', 'Prototyping'],
    thumbnailUrl: 'https://picsum.photos/800/600?random=3',
    heroUrl: 'https://picsum.photos/1200/600?random=30',
    // TODO: Replace with actual project video. Using placeholder to prevent 404.
    videoUrlMobile: 'https://player.vimeo.com/video/76979871?badge=0&autopause=0&player_id=0&app_id=58479',
    videoUrlDesktop: 'https://player.vimeo.com/video/76979871?badge=0&autopause=0&player_id=0&app_id=58479',
    liveUrl: 'https://sonic-wayfinder-demo.vercel.app/',
    description: 'Sonic Wayfinder reimagines navigation by replacing turn-by-turn voice commands with continuous spatial audio cues. It creates a "virtual sound tether" that users can follow, reducing cognitive load and increasing situational awareness.',
    role: 'Product Designer & Audio Engineer',
    duration: '4 Months',
    challenge: 'Traditional GPS relies on visual maps or intrusive voice commands ("Turn left in 500 feet"). For visually impaired users, this disrupts their auditory attention, which is crucial for safety.',
    solution: 'A 3D audio engine that places a virtual sound source (e.g., a gentle chime) at the destination. As the user turns their head, the sound stays fixed in space (HRTF), allowing them to intuitively "hear" the direction they need to walk.',
    interactionNotes: 'The interface is gesture-based and screen-free. A double-tap on the earbud toggles the "Beacon" mode. Haptic feedback on the connected phone intensifies as the user approaches intersections, warning of traffic.',
    outcome: 'Field tests with 12 visually impaired participants showed a 30% reduction in navigation errors and a reported "sense of independence" compared to standard cane-only navigation.',
    accentColor: '#5D3FD3' // Iris Purple
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