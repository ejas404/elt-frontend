export interface CreateBook {
    title: string;
    description?: string; 
    authorId: string;
    publishedDate: Date;
}

export interface ResponseBook {
    id: string; 
    title: string;
    description?: string; 
    authorId: string;
    publishedDate: string;
  }