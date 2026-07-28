export interface Post {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  read_time: string;
  cover_image: string;
  author_name: string;
  author_role: string;
  content: string;
  published: boolean;
  created_at: string;
  updated_at: string;
}

export interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  responsibilities: string;
  qualifications: string;
  skills: string;
  published: boolean;
  created_at: string;
  updated_at: string;
}
