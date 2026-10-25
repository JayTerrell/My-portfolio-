// Papers you have written. Samples below show the format; replace with your own.
// Put PDFs in /public/papers and set pdf: '/papers/file.pdf'.
export type Paper = {
  year: string;
  title: string;
  status: 'Published' | 'Working paper' | 'Draft' | 'Essay';
  venue?: string;
  abstract: string;
  topics: string[];
  pdf?: string;
  readingTime?: string;
};

export const papers: Paper[] = [
  {
    year: '2026',
    title: 'Paper title: feedback loops in organizational decision making',
    status: 'Working paper',
    abstract:
      'A short abstract of three or four sentences. State the question, the method, the finding, and why a practitioner should care. Keep it readable for a smart person outside your field.',
    topics: ['Systems', 'Behavior', 'Operations'],
    readingTime: '18 min',
  },
  {
    year: '2025',
    title: 'Paper title: what stoic philosophy teaches about risk management',
    status: 'Essay',
    abstract:
      'A short abstract of three or four sentences. State the question, the method, the finding, and why a practitioner should care.',
    topics: ['Philosophy', 'Finance'],
    readingTime: '12 min',
  },
  {
    year: '2024',
    title: 'Paper title: measuring the cost of friction in customer journeys',
    status: 'Draft',
    abstract:
      'A short abstract of three or four sentences. State the question, the method, the finding, and why a practitioner should care.',
    topics: ['Data', 'Behavior', 'Business'],
    readingTime: '22 min',
  },
];
