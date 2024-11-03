import { BlogPost } from "./types";

export const mockBlogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Evolution of Artificial Intelligence in 2024",
    excerpt: "Exploring the latest developments in AI and their impact on society.",
    content: "Full article content here...",
    author: {
      name: "Dr. Sarah Chen",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    },
    publishedAt: "2024-03-20",
    readingTime: "8 min read",
    category: "Technology",
    tags: ["AI", "Technology", "Future"],
    thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
  },
  {
    id: "2",
    title: "Understanding Climate Change: A Deep Dive",
    excerpt: "Breaking down the latest climate science research and its implications.",
    content: "Full article content here...",
    author: {
      name: "Prof. Michael Roberts",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    },
    publishedAt: "2024-03-18",
    readingTime: "12 min read",
    category: "Science",
    tags: ["Climate", "Science", "Environment"],
    thumbnail: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce",
  },
];

export const mockPopularTags = [
  { id: "1", name: "Technology", count: 45 },
  { id: "2", name: "Science", count: 32 },
  { id: "3", name: "Politics", count: 28 },
  { id: "4", name: "Culture", count: 24 },
  { id: "5", name: "Environment", count: 20 },
];

export const mockEpisodes = [
  {
    id: 1,
    title: "The Future of AI: Opportunities and Challenges",
    description: "An in-depth exploration of artificial intelligence's impact on society and technology.",
    videoUrl: "https://example.com/videos/ai-future.mp4",
    thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    duration: "54:32",
    date: "2024-03-20",
    views: 12500,
    category: "Technology",
    author: {
      name: "Dr. Sarah Chen",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    },
  },
  {
    id: 2,
    title: "Climate Change: Latest Scientific Findings",
    description: "Breaking down the most recent climate research and its implications.",
    videoUrl: "https://example.com/videos/climate-science.mp4",
    thumbnail: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce",
    duration: "48:15",
    date: "2024-03-18",
    views: 9800,
    category: "Science",
    author: {
      name: "Prof. Michael Roberts",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    },
  },
  {
    id: 3,
    title: "Digital Privacy in the Modern Age",
    description: "Understanding the complexities of privacy in our connected world.",
    videoUrl: "https://example.com/videos/digital-privacy.mp4",
    thumbnail: "https://images.unsplash.com/photo-1563013544-824ae1b704d3",
    duration: "62:45",
    date: "2024-03-15",
    views: 15670,
    category: "Technology",
    author: {
      name: "Emma Thompson",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    },
  },
];