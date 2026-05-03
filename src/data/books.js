const books = [
  {
    id: "book-001",
    title: "The Mango Grove Mystery",
    author: "Nadia Rahman",
    description:
      "A warm adventure about three friends who discover a hidden library inside an old mango orchard. As they decode its secrets, they learn the power of stories and friendship.",
    category: "Story",
    available_quantity: 7,
    image_url: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400",
  },
  {
    id: "book-002",
    title: "Next.js Field Notes",
    author: "Arif Hasan",
    description:
      "A practical introduction to routing, rendering, data fetching, and deployment with modern Next.js. Perfect for developers moving from React to full-stack.",
    category: "Tech",
    available_quantity: 5,
    image_url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400",
  },
  {
    id: "book-003",
    title: "Particles and Possibilities",
    author: "Dr. Samira Chowdhury",
    description:
      "A friendly tour through atoms, light, energy, and the scientific method for young explorers who want to understand how the universe works.",
    category: "Science",
    available_quantity: 9,
    image_url: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400",
  },
  {
    id: "book-004",
    title: "Stories Under the Rain",
    author: "Mita Karim",
    description:
      "Short stories about kindness, courage, and everyday magic set in a monsoon city where every raindrop tells a tale.",
    category: "Story",
    available_quantity: 4,
    image_url: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?w=400",
  },
  {
    id: "book-005",
    title: "JavaScript Compass",
    author: "Tanvir Ahmed",
    description:
      "A beginner-friendly guide to JavaScript fundamentals, covering variables, functions, events, DOM manipulation, and async programming.",
    category: "Tech",
    available_quantity: 6,
    image_url: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400",
  },
  {
    id: "book-006",
    title: "The Human Body Lab",
    author: "Professor Lina Bose",
    description:
      "An illustrated science guide explaining organs, cells, muscles, and the body systems that keep us alive. Great for curious minds.",
    category: "Science",
    available_quantity: 3,
    image_url: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=400",
  },
  {
    id: "book-007",
    title: "The Clockmaker's Daughter",
    author: "Rehan Sayeed",
    description:
      "A thoughtful story about invention, family, and repairing more than broken clocks. Sometimes the things we fix end up fixing us.",
    category: "Story",
    available_quantity: 8,
    image_url: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400",
  },
  {
    id: "book-008",
    title: "Database Design Basics",
    author: "Nusrat Jahan",
    description:
      "A clear introduction to schemas, documents, indexing, and building reliable MongoDB-backed applications from scratch.",
    category: "Tech",
    available_quantity: 4,
    image_url: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400",
  },
  {
    id: "book-009",
    title: "Weather Makers",
    author: "Dr. Mahin Islam",
    description:
      "A science book about clouds, seasons, storms, and how climate shapes life on Earth. Understand the sky above you.",
    category: "Science",
    available_quantity: 10,
    image_url: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400",
  },
  {
    id: "book-010",
    title: "The Blue Notebook",
    author: "Farhana Akter",
    description:
      "A gentle coming-of-age story about writing, friendship, and finding one's own voice in a noisy world.",
    category: "Story",
    available_quantity: 2,
    image_url: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400",
  },
  {
    id: "book-011",
    title: "React Patterns in Practice",
    author: "Khaled Mahmud",
    description:
      "A project-based guide to reusable components, state management, forms, and clean frontend architecture with React.",
    category: "Tech",
    available_quantity: 11,
    image_url: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=400",
  },
  {
    id: "book-012",
    title: "Ocean Worlds",
    author: "Dr. Rupa Sen",
    description:
      "A bright science reader about marine ecosystems, tides, coral reefs, and deep-sea discovery. Dive into the blue.",
    category: "Science",
    available_quantity: 6,
    image_url: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400",
  },
];

export const getFeaturedBooks = () => {
  return books.slice(0, 4);
};

export const getBookById = (id) => {
  return books.find((book) => book.id === id);
};

export const getCategories = () => {
  return ["All", "Story", "Tech", "Science"];
};

export default books;
