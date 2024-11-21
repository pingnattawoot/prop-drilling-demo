export interface Post {
  id: number;
  title: string;
  author: string;
  content: string;
  timestamp: string;
}

export interface Comment {
  id: number;
  postId: number;
  author: string;
  content: string;
  timestamp: string;
}
