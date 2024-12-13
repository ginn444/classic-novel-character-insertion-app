import React, { useState } from 'react';
import { books } from './data/books';
import { BookSelection } from './components/BookSelection';
import { CharacterForm } from './components/CharacterForm';
import { StoryDisplay } from './components/StoryDisplay';
import { BookOpenIcon } from 'lucide-react';

type Character = {
  name: string;
  trait1: string;
  trait2: string;
};

function App() {
  const [selectedBook, setSelectedBook] = useState(null);
  const [character, setCharacter] = useState<Character | null>(null);

  const handleReset = () => {
    setSelectedBook(null);
    setCharacter(null);
  };

  return (
    <div className="min-h-screen bg-stone-50">
      <header className="bg-white border-b border-stone-200 py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3">
            <BookOpenIcon className="text-amber-700" size={32} />
            <h1 className="text-2xl font-serif font-bold text-stone-800">
              Classic Novel Character Insertion
            </h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-8">
        {!selectedBook && (
          <>
            <div className="text-center mb-8">
              <h2 className="text-xl font-serif text-stone-700">
                Choose a classic novel to begin your literary journey
              </h2>
            </div>
            <BookSelection books={books} onSelect={setSelectedBook} />
          </>
        )}

        {selectedBook && !character && (
          <CharacterForm
            book={selectedBook}
            onSubmit={setCharacter}
            onBack={handleReset}
          />
        )}

        {selectedBook && character && (
          <StoryDisplay
            book={selectedBook}
            character={character}
            onBack={handleReset}
          />
        )}
      </main>
    </div>
  );
}

export default App;