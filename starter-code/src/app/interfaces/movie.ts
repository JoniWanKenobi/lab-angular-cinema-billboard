export interface Movie {
  id: number;
  title: string;
  poster: string;
  synopsis: string;
  genre: string[];
  year: number;
  director: string;
  actors: string[];
  hours: number;
  room: number;
}