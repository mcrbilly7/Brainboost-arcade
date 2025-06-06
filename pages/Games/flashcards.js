import { useState } from "react";

// You can also import this from your shared components if modularized
const FlashcardGame = ({ cards }) => {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="p-4 text-center">
      <div
        className="w-64 h-40 mx-auto flex items-center justify-center border rounded-xl cursor-pointer shadow-md transition-transform duration-300 transform hover:scale-105"
        onClick={() => setFlipped(!flipped)}
      >
        <h2 className="text-xl font-bold">
          {flipped ? cards[index].answer : cards[index].question}
        </h2>
      </div>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => {
          setFlipped(false);
          setIndex((index + 1) % cards.length);
        }}
      >
        Next
      </button>
    </div>
  );
};

export default function FlashcardsPage() {
  // Sample flashcard content (you can replace with your own)
  const cards = [
    { question: "What is 2 + 2?", answer: "4" },
    { question: "Capital of France?", answer: "Paris" },
    { question: "Opposite of 'hot'?", answer: "Cold" },
    { question: "Primary color that starts with 'B'?", answer: "Blue" },
    { question: "What shape has 3 sides?", answer: "Triangle" },
  ];

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">Flashcard Game</h1>
      <FlashcardGame cards={cards} />
    </div>
  );
    }
