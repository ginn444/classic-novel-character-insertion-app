import React from 'react';
import { Book, Scene } from '../data/books';
import { BookOpenIcon } from 'lucide-react';

interface StoryDisplayProps {
  book: Book;
  character: {
    name: string;
    trait1: string;
    trait2: string;
  };
  onBack: () => void;
}

export function StoryDisplay({ book, character, onBack }: StoryDisplayProps) {
  const generateStory = (scene: Scene) => {
    return scene.template
      .replace('{name}', character.name)
      .replace('{trait1}', character.trait1)
      .replace('{trait2}', character.trait2);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <button
        onClick={onBack}
        className="text-amber-700 hover:text-amber-800 mb-6 flex items-center gap-2"
      >
        ← Create another character
      </button>
      
      <div className="bg-white border-2 border-stone-200 rounded-lg p-8">
        <div className="flex items-center gap-3 mb-6">
          <BookOpenIcon className="text-amber-700" />
          <h2 className="text-2xl font-serif font-semibold">Your Story in {book.title}</h2>
        </div>
        
        <div className="space-y-8">
          {book.scenes.map((scene) => (
            <div key={scene.id} className="prose prose-stone">
              <h3 className="text-lg font-serif font-semibold text-amber-700 mb-3">
                {scene.title}
              </h3>
              <p className="text-stone-700 leading-relaxed font-serif">
                {generateStory(scene)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}