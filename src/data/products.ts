// Knowledge products. Prices and contents are placeholders: set your own.
export type Product = {
  slug: string;
  format: string;
  title: string;
  pitch: string;
  forWho: string;
  inside: string[];
  price: string;
  status: 'Available' | 'Waitlist' | 'Coming soon';
  href?: string; // checkout link (Stripe, Gumroad, Lemon Squeezy) once live
};

export const products: Product[] = [
  {
    slug: 'systems-thinking-for-operators',
    format: 'Self paced course',
    title: 'Systems Thinking for Operators',
    pitch: 'Learn to see the loops, constraints, and incentives that quietly run your business, and change the one lever that matters.',
    forWho: 'Managers, founders, and analysts who want fewer fires and better decisions.',
    inside: ['Six modules with worked case studies', 'Systems mapping templates', 'A constraint finding diagnostic', 'Lifetime updates'],
    price: '$249',
    status: 'Waitlist',
  },
  {
    slug: 'ai-operating-playbook',
    format: 'Playbook',
    title: 'The AI Operating Playbook',
    pitch: 'A practical guide to putting AI to work inside real business processes, from first audit to measurable return.',
    forWho: 'Small business owners and team leads adopting AI without a data science team.',
    inside: ['Process audit worksheet', 'Prompt and workflow library', 'ROI model in a spreadsheet', 'Rollout checklist for teams'],
    price: '$79',
    status: 'Waitlist',
  },
  {
    slug: 'decision-models-toolkit',
    format: 'Template kit',
    title: 'Decision Models Toolkit',
    pitch: 'Twelve mental models translated into spreadsheets and canvases you can use in a meeting tomorrow.',
    forWho: 'Anyone who makes high stakes calls with incomplete information.',
    inside: ['Twelve model canvases', 'Scenario planning spreadsheet', 'Pre-mortem facilitation guide'],
    price: '$39',
    status: 'Coming soon',
  },
  {
    slug: 'data-story-workshop',
    format: 'Live workshop',
    title: 'The Data Story Workshop',
    pitch: 'Turn analysis into a narrative that executives act on. Two live sessions with feedback on your own work.',
    forWho: 'Analysts and consultants who present to leadership.',
    inside: ['Two live sessions', 'Personal deck review', 'Chart makeover library'],
    price: '$399',
    status: 'Coming soon',
  },
];
