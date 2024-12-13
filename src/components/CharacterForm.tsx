import React, { useState } from 'react';
import { Book } from '../data/books';
import { UserIcon } from 'lucide-react';

interface CharacterFormProps {
  book: Book;
  onSubmit: (character: { name: string; trait1: string; trait2: string }) => void;
  onBack: () => void;
}

export function CharacterForm({ book, onSubmit, onBack }: CharacterFormProps) {
  const [character, setCharacter] = useState({
    name: '',
    trait1: '',
    trait2: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(character);
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <button
        onClick={onBack}
        className="text-amber-700 hover:text-amber-800 mb-6 flex items-center gap-2"
      >
        ← Back to books
      </button>
      
      <div className="bg-white border-2 border-stone-200 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-6">
          <UserIcon className="text-amber-700" />
          <h2 className="text-xl font-serif font-semibold">Create Your Character</h2>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-1">
              Your Character's Name
            </label>
            <input
              type="text"
              value={character.name}
              onChange={(e) => setCharacter({ ...character, name: e.target.value })}
              className="w-full px-3 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-1">
              First Character Trait
            </label>
            <input
              type="text"
              value={character.trait1}
              onChange={(e) => setCharacter({ ...character, trait1: e.target.value })}
              placeholder="e.g., determined, curious, gentle"
              className="w-full px-3 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-1">
              Second Character Trait
            </label>
            <input
              type="text"
              value={character.trait2}
              onChange={(e) => setCharacter({ ...character, trait2: e.target.value })}
              placeholder="e.g., mysterious, passionate, wise"
              className="w-full px-3 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-amber-700 text-white py-2 px-4 rounded-md hover:bg-amber-800 transition-colors duration-300"
          >
            Generate Your Story
          </button>
        </form>
      </div>
    </div>
  );
}