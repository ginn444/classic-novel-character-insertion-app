export interface Book {
    id: string;
    title: string;
    author: string;
    year: number;
    cover: string;
    scenes: Scene[];
  }
  
  export interface Scene {
    id: string;
    title: string;
    template: string;
  }
  
  export interface Character {
    name: string;
    trait1: string;
    trait2: string;
  }