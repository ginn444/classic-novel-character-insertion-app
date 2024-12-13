import React from 'react';
import { Book } from '../data/books';
import { BookIcon, Flower } from 'lucide-react';

interface BookSelectionProps {
  books: Book[];
  onSelect: (book: Book) => void;
}

export function BookSelection({ books, onSelect }: BookSelectionProps) {
  return (
    <div className="relative">
      {/* Decorative flowers */}
      <div className="absolute -top-12 -left-8 text-amber-700/20 rotate-45">
        <Flower size={48} />
      </div>
      <div className="absolute -bottom-8 -right-8 text-amber-700/20 -rotate-45">
        <Flower size={48} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 relative">
        {books.map((book) => (
          <button
            key={book.id}
            onClick={() => onSelect(book)}
            className="group relative bg-white border-2 border-stone-200 rounded-lg p-6 hover:border-amber-700 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <div className="flex gap-6">
              {/* Book cover with adjusted size */}
              <div className="relative w-1/3 aspect-[2/3] overflow-hidden rounded-md">
                <img
                  src={book.cover}
                  alt={book.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
              </div>

              {/* Book details */}
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-serif font-semibold text-stone-800 mb-2">{book.title}</h3>
                    <p className="text-stone-600">
                      {book.author}
                    </p>
                    <p className="text-stone-500 text-sm">
                      {book.year}
                    </p>
                  </div>
                  <BookIcon className="text-amber-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                {/* Decorative line */}
                <div className="mt-4 border-t border-stone-100 pt-4">
                  <p className="text-sm text-stone-600 italic">
                    Click to begin your journey...
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative corner flourish */}
            <div className="absolute bottom-2 right-2 text-amber-700/10 group-hover:text-amber-700/20 transition-colors duration-300">
              <Flower size={24} />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}