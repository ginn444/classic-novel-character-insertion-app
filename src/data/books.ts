import { Book } from './types';
import { janeEyreScenes } from './scenes/jane-eyre';
import { wutheringHeightsScenes } from './scenes/wuthering-heights';

export const books: Book[] = [
  {
    id: 'jane-eyre',
    title: 'Jane Eyre',
    author: 'Charlotte Brontë',
    year: 1847,
    cover: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=1000',
    scenes: janeEyreScenes
  },
  {
    id: 'wuthering-heights',
    title: 'Wuthering Heights',
    author: 'Emily Brontë',
    year: 1847,
    cover: 'https://images.unsplash.com/photo-1518893063132-36e46dbe2428?auto=format&fit=crop&q=80&w=1000',
    scenes: wutheringHeightsScenes
  }
];