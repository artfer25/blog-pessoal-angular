export interface Post {
  id?: number;
  title: string;
  content: string;
  createdAt?: string;
  updatedAt?: string;
  author?: {
    id: number;
    name: string;
  };
}