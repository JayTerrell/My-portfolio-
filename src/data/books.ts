// Your reading library. Starter list below: replace with the books you have actually read.
// Add `cover: '/covers/file.jpg'` to show a real cover; otherwise a typographic cover is generated.
export type BookCategory = 'Philosophy' | 'Mathematics' | 'Behavior' | 'Business' | 'Finance' | 'Data';

export type Book = {
  title: string;
  author: string;
  category: BookCategory;
  year: string; // year you read it
  takeaway: string;
  cover?: string;
};

export const books: Book[] = [
  { title: 'Thinking in Systems', author: 'Donella H. Meadows', category: 'Philosophy', year: '2024', takeaway: 'Behavior is a property of structure. To change outcomes, change the feedback loops.' },
  { title: 'Gödel, Escher, Bach', author: 'Douglas Hofstadter', category: 'Mathematics', year: '2023', takeaway: 'Meaning emerges from systems that can refer to themselves.' },
  { title: 'Thinking, Fast and Slow', author: 'Daniel Kahneman', category: 'Behavior', year: '2022', takeaway: 'Intuition is fast and confident, which is exactly why it needs a second opinion.' },
  { title: 'Meditations', author: 'Marcus Aurelius', category: 'Philosophy', year: '2021', takeaway: 'Discipline of judgment is the one asset nobody can take from you.' },
  { title: 'Antifragile', author: 'Nassim Nicholas Taleb', category: 'Finance', year: '2023', takeaway: 'Design systems that gain from disorder instead of merely surviving it.' },
  { title: 'The Signal and the Noise', author: 'Nate Silver', category: 'Data', year: '2022', takeaway: 'Good forecasters think probabilistically and update often.' },
  { title: 'Poor Charlie’s Almanack', author: 'Charles T. Munger', category: 'Business', year: '2024', takeaway: 'A latticework of mental models beats expertise in a single field.' },
  { title: 'The Goal', author: 'Eliyahu M. Goldratt', category: 'Business', year: '2021', takeaway: 'Find the constraint. Every other improvement is an illusion.' },
  { title: 'How to Measure Anything', author: 'Douglas W. Hubbard', category: 'Data', year: '2023', takeaway: 'If it matters, it leaves a trace, and anything that leaves a trace can be measured.' },
  { title: 'Influence', author: 'Robert B. Cialdini', category: 'Behavior', year: '2020', takeaway: 'Persuasion runs on a few dependable shortcuts. Use them ethically or watch for them.' },
];
