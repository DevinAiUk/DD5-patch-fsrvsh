export interface Episode {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  video_url: string;
  thumbnail_url: string;
  duration: number;
  category_id: string;
  author_id: string;
  status: 'draft' | 'published' | 'archived';
  view_count: number;
  published_at: string;
  created_at: string;
  updated_at: string;
  author: {
    name: string;
    avatar_url: string;
  };
  category: {
    name: string;
    slug: string;
  };
  tags: {
    id: string;
    name: string;
  }[];
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  thumbnail_url: string;
  category_id: string;
  author_id: string;
  status: 'draft' | 'published' | 'archived';
  reading_time: number;
  view_count: number;
  published_at: string;
  created_at: string;
  updated_at: string;
  author: {
    name: string;
    avatar_url: string;
  };
  category: {
    name: string;
    slug: string;
  };
  tags: {
    id: string;
    name: string;
  }[];
}