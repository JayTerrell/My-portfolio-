// Products and platforms you have built.
// demo: put a screen recording in /public/demos and set video, or set embed to a live URL.
export type Platform = {
  slug: string;
  name: string;
  year: string;
  kind: string;
  oneLiner: string;
  problem: string;
  system: string;
  result: string;
  stack: string[];
  demo?: { video?: string; poster?: string; embed?: string };
  link?: string;
};

export const platforms: Platform[] = [
  {
    slug: 'platform-one',
    name: 'Platform Name',
    year: '2025',
    kind: 'Analytics platform',
    oneLiner: 'One sentence that says what it does and who it is for.',
    problem: 'What was broken, slow, or invisible before this existed.',
    system: 'How it works: the inputs, the logic, and the decisions it supports.',
    result: 'What changed after launch. Lead with a number.',
    stack: ['Python', 'SQL', 'dbt', 'React'],
    demo: {},
  },
  {
    slug: 'platform-two',
    name: 'Platform Name',
    year: '2024',
    kind: 'Internal tool',
    oneLiner: 'One sentence that says what it does and who it is for.',
    problem: 'What was broken, slow, or invisible before this existed.',
    system: 'How it works: the inputs, the logic, and the decisions it supports.',
    result: 'What changed after launch. Lead with a number.',
    stack: ['Airtable', 'Automation', 'OpenAI API'],
    demo: {},
  },
];
