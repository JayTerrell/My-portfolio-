// Corporate experience. Replace placeholders with your real roles.
// Outcomes render as large figures, so lead with a number when you can.
export type Role = {
  period: string;
  title: string;
  org: string;
  sector: string;
  summary: string;
  system: string; // the system you were responsible for improving
  outcomes: { figure: string; label: string }[];
};

export const roles: Role[] = [
  {
    period: '2023 to now',
    title: 'Role Title',
    org: 'Company Name',
    sector: 'Industry',
    summary:
      'Two or three sentences on the mandate. What were you hired to fix, build, or scale, and why did it matter to the business?',
    system: 'Name the system you owned, for example revenue operations, forecasting, or customer onboarding.',
    outcomes: [
      { figure: 'XX%', label: 'Reduction in cycle time' },
      { figure: '$X.XM', label: 'Annualized savings identified' },
      { figure: 'XX', label: 'Teams on a shared operating model' },
    ],
  },
  {
    period: '2020 to 2023',
    title: 'Role Title',
    org: 'Company Name',
    sector: 'Industry',
    summary:
      'Describe the problem in plain language, the pattern you noticed that others missed, and the change you led.',
    system: 'The process, platform, or decision loop you redesigned.',
    outcomes: [
      { figure: 'XX%', label: 'Forecast accuracy improvement' },
      { figure: 'Xx', label: 'Faster reporting turnaround' },
    ],
  },
  {
    period: '2017 to 2020',
    title: 'Role Title',
    org: 'Company Name',
    sector: 'Industry',
    summary:
      'Earlier roles are where the foundations were built. Keep this one short and focused on what it taught you.',
    system: 'The core skill this role sharpened.',
    outcomes: [{ figure: 'XX', label: 'Key metric' }],
  },
];

export const toolkit = [
  { group: 'Analysis', items: ['SQL', 'Python', 'Statistical modeling', 'Experiment design'] },
  { group: 'Strategy', items: ['Systems mapping', 'Process design', 'Operating models', 'Unit economics'] },
  { group: 'Finance', items: ['Forecasting', 'Scenario planning', 'Capital allocation', 'Valuation basics'] },
  { group: 'Communication', items: ['Executive narrative', 'Data storytelling', 'Workshop facilitation', 'Writing'] },
];
